import React from 'react';

interface MultiCardProps {
  heading1: string;
  heading2: string;
  content: string;
  userdata?: any;
  addClass?: string;
  cardSize?: 'col-1' | 'col-2' | 'col-3' | 'col-4';
  show_line?: boolean;
  children?: any;
}

export const MultiCard: React.FC<MultiCardProps> = ({
  heading1,
  heading2,
  content,
  userdata,
  addClass,
  cardSize = 'col-2',
  show_line,
  children,
}) => {
  return (
    <section className={`multicard_main ${addClass ? addClass : ''}`}>
      <div className='multi_head'>
        <span className='multi_heading animate-heading'>
          <h1>{heading1} </h1>
          <h1>{heading2}</h1>
        </span>
        {content && <p className='animate-subtitle'>{content}</p>}
        {children && <div>{children}</div>}
      </div>

      <div className={`multicard_body ${cardSize}`}>
        {userdata &&
          userdata.map((item: any, idx: number) => (
            <div
              className={`card_block ${show_line ? 'show_line' : ''}`}
              key={idx.toString()}
            >
              <span className='Icon_block' role='image'>
                {item.image}
              </span>
              <h2>{item.heading}</h2>
              <p>{item.content}</p>
            </div>
          ))}
      </div>
    </section>
  );
};
