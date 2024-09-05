import React, { useState, useRef } from 'react';
import Image from 'next/image';

import { NextPage } from 'next/types';
import { createNoise2D } from 'simplex-noise';

import { bubbles, dynamicProfile } from '../../userdata/TeamData';

interface BubbleProfile {
  id: number;
  s: number;
  l: number;
  t: number;
  x: number;
  y: number;
  c: number;
}

const CANVAS_WIDTH = 2000;
// The amplitude. The amount the noise affects the movement.
const NOISE_AMOUNT = 4;
// The frequency. Smaller for flat slopes, higher for jagged spikes.
const NOISE_SPEED = 0.005;
// Pixels to move per frame. At 60fps, this would be 18px a sec.
const SCROLL_SPEED = 0.5;

const backgroundPositions: string[] = [];

for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 7; j++) {
    backgroundPositions.push(`${-154 * j}px ${-154 * i}px`);
  }
}

const noise2D = createNoise2D();

const BubblePage: NextPage = () => {
  const formatBubble = (values: any) => {
    return values.map((bubble: any) => ({
      ...bubble,
      noiseSeedX: Math.floor(Math.random() * 64000),
      noiseSeedY: Math.floor(Math.random() * 64000),
      xWithNoise: bubble.x,
      yWithNoise: bubble.y,
    }));
  };

  const formattedBubble = formatBubble(dynamicProfile());
  const animationRef = React.useRef<number>();
  const currentBubbleList = useRef(formattedBubble);

  let [profile, setProfile] = useState(formattedBubble);
  // const [isReady, setReady] = React.useState(false);

  React.useEffect(() => {
    // setTimeout(() => {
    //   setReady(true);
    // }, 200);

    animationRef.current = requestAnimationFrame(animate);
    setInterval(() => {
      const newTeamBubbles = dynamicProfile();
      setProfile(formatBubble(newTeamBubbles));
      currentBubbleList.current = newTeamBubbles;
    }, 5000);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  function animate() {
    profile = profile.map((bubble: any) => {
      const newNoiseSeedX: any = bubble.noiseSeedX + NOISE_SPEED;
      const newNoiseSeedY: any = bubble.noiseSeedY + NOISE_SPEED;

      const randomX = noise2D(newNoiseSeedX, 0);
      const randomY = noise2D(newNoiseSeedY, 0);

      const newX = bubble.x - SCROLL_SPEED;

      const newXWithNoise = newX + randomX * NOISE_AMOUNT;
      const newYWithNoise = bubble.y + randomY * NOISE_AMOUNT;

      const element = document.getElementById(`bubble-${bubble.id}`);
      // const teamImageElement = document.getElementById(`team-img-${bubble.id}`);

      // if (teamImageElement) {
      //   const ifNotEqual = currentBubbleList.current.find(
      //     (item) => item.id !== bubble.id && item.i !== bubble.i
      //   );
      //   if(ifNotEqual){
      //     bubble.changingImg = true;
      //   }else{
      //     bubble.changingImg = false;
      //   }
      //   teamImageElement.style.opacity = ifNotEqual ? '1' : '0';
      // }

      if (element) {
        element.style.transform = `translate(${newXWithNoise}px, ${newYWithNoise}px) scale(${bubble.s})`;
      }

      return {
        ...bubble,
        noiseSeedX: newNoiseSeedX,
        noiseSeedY: newNoiseSeedY,
        // x: newX < -200 ? CANVAS_WIDTH : newX,
        xWithNoise: newXWithNoise,
        yWithNoise: newYWithNoise,
      };
    });
    animationRef.current = requestAnimationFrame(animate);
  }
  const showCount = false;
  return (
    <>
      {/* <button
        style={{ marginleft: 0 }}
        onClick={() => {
          setProfile(dynamicProfile());
        }}
      >
        test
      </button> */}
      <div className='bubbles-wrapper'>
        <div className='bubbles'>
          {profile.map((bubble: any, index: any) => (
            <div
              className={`bubble bubble-${bubble.c}`}
              id={`bubble-${bubble.id}`}
              key={`${bubble.l} ${bubble.t}`}
              style={{
                backgroundPosition: backgroundPositions[index],
                position: `absolute`,
                left: `${bubble.l}px`,
                top: ` ${bubble.t}px`,
              }}
            >
              {showCount && (
                <div className='bubble-count '>{<p>{bubble.id}</p>}</div>
              )}
              {bubble.i === undefined ? (
                ''
              ) : (
                <Image
                  src={bubble.i}
                  id={`team-img-${bubble.id}`}
                  alt='Picture of the author'
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default BubblePage;
