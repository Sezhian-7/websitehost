// import React from 'react';
// import Image from 'next/image';
// import { Noise } from 'noisejs';

// import { NextPage } from 'next/types';
// import { bubbles } from '../../userdata/TeamData';

// const CANVAS_WIDTH = 3000;
// // The amplitude. The amount the noise affects the movement.
// const NOISE_AMOUNT = 0;
// // The frequency. Smaller for flat slopes, higher for jagged spikes.
// const NOISE_SPEED = 0.004;
// // Pixels to move per frame. At 60fps, this would be 18px a sec.
// const SCROLL_SPEED = 0.3;

// const backgroundPositions: string[] = [];

// for (let i = 0; i < 7; i++) {
//   for (let j = 0; j < 7; j++) {
//     backgroundPositions.push(`${-154 * j}px ${-154 * i}px`);
//   }
// }

// const noise = new Noise();

// const BubblePageold: NextPage = () => {
//   const animationRef = React.useRef<number>();
//   const bubblesRef = React.useRef(
//     bubbles.map((bubble) => ({
//       ...bubble,
//       noiseSeedX: Math.floor(Math.random() * 64000),
//       noiseSeedY: Math.floor(Math.random() * 64000),
//       xWithNoise: bubble.x,
//       yWithNoise: bubble.y,
//     }))
//   );

//   const [isReady, setReady] = React.useState(false);

//   React.useEffect(() => {
//     setTimeout(() => {
//       setReady(true);
//     }, 200);

//     animationRef.current = requestAnimationFrame(animate);

//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, []);

//   function animate() {
//     bubblesRef.current = bubblesRef.current.map((bubble, index) => {
//       const newNoiseSeedX = bubble.noiseSeedX + NOISE_SPEED;
//       const newNoiseSeedY = bubble.noiseSeedY + NOISE_SPEED;

//       const randomX = noise.simplex2(newNoiseSeedX, 0);
//       const randomY = noise.simplex2(newNoiseSeedY, 0);

//       const newX = bubble.x - SCROLL_SPEED;

//       const newXWithNoise = newX + randomX * NOISE_AMOUNT;
//       const newYWithNoise = bubble.y + randomY * NOISE_AMOUNT;

//       const element = document.getElementById(`bubble-${index}`);

//       if (element) {
//         element.style.transform = `translate(${newXWithNoise}px, ${newYWithNoise}px) scale(${bubble.s})`;
//       }

//       return {
//         ...bubble,
//         noiseSeedX: newNoiseSeedX,
//         noiseSeedY: newNoiseSeedY,
//         x: newX < -200 ? CANVAS_WIDTH : newX,
//         xWithNoise: newXWithNoise,
//         yWithNoise: newYWithNoise,
//       };
//     });

//     animationRef.current = requestAnimationFrame(animate);
//   }

//   const showCount = true;
//   return (
//     <div className='bubbles-wrapper'>
//       <div className='bubbles'>
//         {bubbles.map((bubble, index) => (
//           <>
//             <div
//               className={`bubble bubble-${bubble.c}`}
//               id={`bubble-${index}`}
//               key={`${bubble.x} ${bubble.y}`}
//               style={{
//                 backgroundPosition: backgroundPositions[index],
//                 opacity: isReady ? 1 : 0,
//                 transform: `translate(${bubble.x}px, ${bubble.y}px) scale(${bubble.s})`,
//               }}
//             >
//               {showCount && (
//                 <div className='bubble-count'>{<p>{bubble.id}</p>}</div>
//               )}
//               {bubble.i === undefined ? (
//                 ''
//               ) : (
//                 <Image
//                   src={bubble.i}
//                   alt='Picture of the author'
//                   width={500}
//                   height={500}
//                 />
//               )}
//             </div>
//           </>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BubblePageold;
import React from "react";

const BubbleOld = () => {
  return <div>BubbleOld</div>;
};

export default BubbleOld;
