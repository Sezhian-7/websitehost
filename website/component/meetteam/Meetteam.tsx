import React from 'react';
import BubbleTeam from '../../asset/image/svg/BubbleTeam';
import { Button } from '../button/Button';
import BubblePage from '../bubble/Bubble';

interface MeetteamProps {
  addClass?: string;
  heading1: string;
  heading2: string;
  content: string;
  userdata?: any;
  btntext?: any;
  OnClick?: any;
}

export const Meetteam: React.FC<MeetteamProps> = ({
  addClass,
  heading1,
  heading2,
  content,
}) => {
  return (
    <section className={`multicard_main ${addClass ? addClass : ''}`}>
      <div className='multi_head'>
        <span className='multi_heading animate-heading'>
          <h1>{heading1} </h1>
          <h1>{heading2}</h1>
        </span>
        <p className='animate-subtitle'>{content}</p>
      </div>
      <div className='bubble_block'>
        <BubblePage />
        <Button addclass='' btntext='' />
      </div>
    </section>
  );
};
