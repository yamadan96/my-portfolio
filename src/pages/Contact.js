import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 8rem 1rem; /* 上下のパディングを減らして調整 */
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: none;
`;

const Button = styled.button`
  padding: 0.75rem 1rem;
  background-color: #FFD700;
  color: #333;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FFA500;
  }
`;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_c42eif9', // サービスID
        'template_udjbasf', // テンプレートID
        form.current,
        'usagAKNIL-XGAkkrJ' // ユーザーID
      )
      .then(
        (result) => {
          alert('メッセージが送信されました！');
        },
        (error) => {
          console.error('エラー:', error.text);
          alert('エラーが発生しました。再度お試しください。');
        }
      );

    e.target.reset(); // フォームをリセット
  };

  return (
    <ContactContainer>
      <h2>Contact me</h2>
      <p>
        最後までご覧いただきありがとうございました。このサイトを通して、私のことを少しでも知っていただけたのなら嬉しいです。もしこのサイトや私について何かコメントがありましたら、下記フォームをご利用ください。
      </p>
      <Form ref={form} onSubmit={sendEmail}>
        <Input type="text" name="to_name" placeholder="Name" required />
        <Input type="email" name="from_name" placeholder="Email" required />
        <Textarea name="message" rows="4" placeholder="Comment" required></Textarea> {/* rowsを減らして調整 */}
        <Button type="submit">SEND</Button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
