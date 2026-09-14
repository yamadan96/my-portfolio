import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

// ページ遷移時のスクロール位置をアプリ全体でまとめて扱う。
// - 新しく開いたページ（リンク・ボタンでの遷移）は先頭から表示する
// - ブラウザの戻る／進む（と「← 戻る」ボタン）では、そのページを離れたときの位置に戻す
// - 「/#experience」のようにハッシュ付きで開いたときは MainPage 側のセクション移動に任せる
// ブラウザ標準の復元は、描画前の短いページに対して行われて位置がずれるため manual にする。

// 履歴エントリ（location.key）ごとの最後のスクロール位置
const positions = new Map();

// 戻った直後はページの描画・画像読み込みで高さが足りず目標位置まで届かないことがあるので、
// 高さが揃うまで短い間隔で再試行する（約1秒で打ち切り）
const RESTORE_INTERVAL_MS = 16;
const MAX_RESTORE_ATTEMPTS = 60;

const ScrollManager = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const keyRef = useRef(location.key);

  useEffect(() => {
    if (!('scrollRestoration' in window.history)) return undefined;
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  // 現在のエントリの位置を記録し続ける。キーは描画直後に切り替えるので、
  // 遷移中に発生したスクロールが前のページの記録を上書きすることはない。
  // requestAnimationFrame はタブが裏にあると止まるので使わず、その場で書き込む（Map への代入だけなので軽い）
  useEffect(() => {
    const handleScroll = () => positions.set(keyRef.current, window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useLayoutEffect(() => {
    keyRef.current = location.key;

    if (navigationType !== 'POP') {
      if (!location.hash) window.scrollTo(0, 0);
      return undefined;
    }

    // 初回表示（記録なし）でハッシュがあるときは、セクション移動を優先する
    if (!positions.has(location.key) && location.hash) return undefined;

    const target = positions.get(location.key) ?? 0;
    let timer = 0;
    let attempts = 0;
    const stop = () => {
      window.clearTimeout(timer);
      timer = 0;
      window.removeEventListener('wheel', stop);
      window.removeEventListener('touchstart', stop);
    };
    const restore = () => {
      window.scrollTo(0, target);
      attempts += 1;
      const reached = Math.abs(window.scrollY - target) < 2;
      timer = !reached && attempts < MAX_RESTORE_ATTEMPTS ? window.setTimeout(restore, RESTORE_INTERVAL_MS) : 0;
      if (!timer) stop();
    };
    // 復元中に読者が自分でスクロールし始めたら、そちらを優先して止める
    window.addEventListener('wheel', stop, { passive: true });
    window.addEventListener('touchstart', stop, { passive: true });
    restore();
    return stop;
  }, [location.key, location.hash, navigationType]);

  return null;
};

export default ScrollManager;
