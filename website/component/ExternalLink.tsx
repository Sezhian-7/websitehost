import React from 'react';

interface ExternalLinkProps {
  addclass?: string;
  id?: string;
  link: string;
  children: any;
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename';
  rel?: string;
}
export const ExternalLink: React.FC<ExternalLinkProps> = ({
  addclass,
  id,
  link,
  target,
  rel = 'noreferrer',
  children,
}) => {
  return (
    <a
      className={`link-block ${addclass ? addclass : ''}`}
      id={id}
      target={target}
      href={link}
      rel={rel}
    >
      {children}
    </a>
  );
};
