import React from 'react';

interface MailToProps {
  addclass?: string;
  id?: string;
  email: string;
  subject?: string;
  body?: string;
  children: any;
}
export const MailTo: React.FC<MailToProps> = ({
  addclass,
  id,
  email,
  subject,
  body,
  children,
}) => {
  return (
    <a
      className={`mail-block ${addclass ? addclass : ''}`}
      id={id}
      href={`mailto:${email}?subject=${subject || ''}&body=${body || ''}`}
    >
      {children}
    </a>
  );
};
