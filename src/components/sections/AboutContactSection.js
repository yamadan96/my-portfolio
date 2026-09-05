import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import { TextLink } from '../ui/Editorial';
import profile from '../../data/profile';

// 人物像（研究と実務の2段落・現在地・第三者評価）と連絡先を1つのセクションにまとめる。
// SNS・外部プロフィールへのリンクはサイト内でここにだけ置く（Hero やフッターには置かない）。
const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 20rem;
  gap: ${({ theme }) => theme.spacing['3xl']};
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
  }
`;

const Bio = styled.p`
  max-width: ${({ theme }) => theme.measure};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.9;
  color: ${({ theme }) => theme.colors.textSecondary};

  & + & {
    margin-top: ${({ theme }) => theme.spacing.md};
  }
`;

const Block = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const BlockLabel = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Facts = styled.dl`
  display: grid;
  grid-template-columns: 7rem minmax(0, 1fr);
  gap: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.7;

  dt {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  dd {
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 0;

    dd {
      margin-bottom: ${({ theme }) => theme.spacing.sm};
    }
  }
`;

const Recognition = styled.ul`
  list-style: none;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.7;

  li + li {
    margin-top: ${({ theme }) => theme.spacing.xs};
  }
`;

const RecognitionNote = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
`;

const ContactCard = styled.aside`
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const ContactLead = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Mail = styled.a`
  display: inline-block;
  margin-top: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  word-break: break-all;
`;

const LinkList = styled.ul`
  list-style: none;
  margin-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const LinkRow = styled.li`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => `${theme.spacing.sm} 0`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const Handle = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: right;
  overflow-wrap: anywhere;
`;

const AboutContactSection = () => {
  const navigate = useNavigate();

  return (
    <Section id="about">
      <SectionTitle index="04" eyebrow="About" title="プロフィール" />
      <Grid>
        <div>
          {profile.bio.map((paragraph) => (
            <Bio key={paragraph}>{paragraph}</Bio>
          ))}

          <Block>
            <BlockLabel>Now</BlockLabel>
            <Facts>
              {profile.now.map((f) => (
                <React.Fragment key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </React.Fragment>
              ))}
            </Facts>
          </Block>

          <Block>
            <BlockLabel>Recognition</BlockLabel>
            <Recognition>
              {profile.recognition.map((r) => (
                <li key={r.title}>
                  {r.url ? (
                    <a href={r.url} target="_blank" rel="noopener noreferrer">
                      {r.title}
                    </a>
                  ) : (
                    r.title
                  )}
                  {r.note && <RecognitionNote> — {r.note}</RecognitionNote>}
                </li>
              ))}
            </Recognition>
          </Block>

          <Block>
            <TextLink onClick={() => navigate('/more')}>経歴・受賞・学歴・資格の全記録（CV）を見る →</TextLink>
          </Block>
        </div>

        <ContactCard id="contact" aria-labelledby="contact-heading">
          <BlockLabel as="h3" id="contact-heading">
            Contact
          </BlockLabel>
          <ContactLead>AI/ML の開発・共同研究・採用に関するご連絡はメールでお願いします。</ContactLead>
          <Mail href={`mailto:${profile.email}`}>{profile.email}</Mail>
          <LinkList>
            {profile.social.map((s) => (
              <LinkRow key={s.platform}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
                <Handle>{s.handle}</Handle>
              </LinkRow>
            ))}
          </LinkList>
        </ContactCard>
      </Grid>
    </Section>
  );
};

export default AboutContactSection;
