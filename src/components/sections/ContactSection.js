import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';

const ContactWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Input = styled.input`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}20`};
  }
`;

const TextArea = styled.textarea`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  min-height: 150px;
  resize: vertical;
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}20`};
  }
`;

const SubmitButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  background: ${({ theme }) => theme.colors.gradient};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  cursor: pointer;
  transition: opacity ${({ theme }) => theme.transitions.normal};

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ $success, theme }) => ($success ? theme.colors.success : theme.colors.error)};
`;

const ContactSection = () => {
  const form = useRef();
  const [status, setStatus] = useState({ message: '', success: false });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm('service_c42eif9', 'template_udjbasf', form.current, 'usagAKNIL-XGAkkrJ')
      .then(() => {
        setStatus({ message: '送信しました！ありがとうございます。', success: true });
        form.current.reset();
      })
      .catch(() => {
        setStatus({ message: '送信に失敗しました。もう一度お試しください。', success: false });
      })
      .finally(() => setSending(false));
  };

  return (
    <Section id="contact">
      <SectionTitle title="Contact" subtitle="お問い合わせ" />
      <ContactWrapper>
        <Form ref={form} onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="to_name">お名前</Label>
            <Input type="text" id="to_name" name="to_name" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="from_name">メールアドレス</Label>
            <Input type="email" id="from_name" name="from_name" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">メッセージ</Label>
            <TextArea id="message" name="message" required />
          </FormGroup>
          <SubmitButton type="submit" disabled={sending}>
            {sending ? '送信中...' : '送信する'}
          </SubmitButton>
          {status.message && (
            <StatusMessage $success={status.success}>{status.message}</StatusMessage>
          )}
        </Form>
      </ContactWrapper>
    </Section>
  );
};

export default ContactSection;
