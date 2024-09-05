import React from 'react';
import Image from 'next/image';
import { Button } from '../../button/Button';

interface InfoCardProps {
  heading1: string;
  heading2: string;
  content: string;
  image: any;
  infoContent?: string;
  btntext?: string;
  addClass?: string;
  OnClick?: any;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  heading1,
  heading2,
  content,
  image,
  infoContent,
  btntext,
  addClass,
  OnClick,
}) => {
  return (
    <>
      <section className={`multicard_main ${addClass ? addClass : ''}`}>
        <div className='multi_head'>
          <span className='multi_heading animate-heading'>
            <h1>{heading1} </h1>
            <h1>{heading2}</h1>
          </span>

          <p className='animate-subtitle'>{content}</p>
        </div>
        <div className={`infocard_body`}>
          <div className='info_img'>
            <Image src={image} alt='Picture of the author' />
          </div>
          <p className='infoContent'>{infoContent}</p>
          <div className='info_btn_block'>
            <Button
              addclass='primary-btn'
              OnClick={OnClick}
              btntext={btntext}
            />
          </div>
        </div>
      </section>
    </>
  );
};
