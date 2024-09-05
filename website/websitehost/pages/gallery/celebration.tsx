import React, { useState } from 'react';
import { CeleImages } from '../../../userdata/CeleBration';
import Image from 'next/image';
import { Celebrationslider } from '../../../component/slideshow/Celebrationslider';
import Arrow from '../../../asset/image/svg/Arrow';
import { useRouter } from 'next/router';
import DynamicHead from '../../../component/head/DynamicHead';
interface CeleBrationProps {
  onClose?: any;
}
const CeleBration: React.FC<CeleBrationProps> = ({ onClose }) => {
  const [showImage, setShowImage] = useState([]);
  const [showSlide, setShowSlide] = useState(false);
  const router = useRouter();
  return (
    <>
      <DynamicHead title='Celebration'>
        <section className='main_section circle_background'>
          <section className='mv-container'>
            <div className='multi_head'>
              <span className='multi_heading'>
                <h1>Celebration</h1>
              </span>
            </div>
            <div className='back_section'>
              <span
                className='back_arrow'
                onClick={() => router.push('/careers/#life_mediwave')}
              >
                <Arrow />
                <p>Back to Careers</p>
              </span>
            </div>
          </section>
          <section className='gallery_image_container'>
            <div className='image_container'>
              {CeleImages &&
                CeleImages.map((item: any, id: number) => (
                  <div
                    key={id}
                    className='slide_show_container'
                    onClick={() => {
                      setShowSlide(true);
                      setShowImage(item);
                    }}
                  >
                    <Image src={item.image} alt='ope1' />
                  </div>
                ))}
            </div>
          </section>
          {showSlide && (
            <div>
              <Celebrationslider
                selectImage={showImage}
                onClose={() => setShowSlide(false)}
              />
            </div>
          )}
        </section>
      </DynamicHead>
    </>
  );
};
export default CeleBration;
