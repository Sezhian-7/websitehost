import React, { useState } from 'react';
import Image from 'next/image';
import { BirthImages } from '../../../userdata/birthday';
import { Birthdayslider } from '../../../component/slideshow/Birthdayslider';
import Arrow from '../../../asset/image/svg/Arrow';
import { useRouter } from 'next/router';
import DynamicHead from '../../../component/head/DynamicHead';
interface BirthdayProps {
  onClose?: any;
}
const BirthDay: React.FC<BirthdayProps> = ({ onClose }) => {
  const [showImage, setShowImage] = useState([]);
  const [showSlide, setShowSlide] = useState(false);
  const router = useRouter();
  return (
    <>
      <DynamicHead title='Birthday Celebration'>
        <section className='main_section circle_background'>
          <section className='mv-container'>
            <div className='multi_head'>
              <span className='multi_heading'>
                <h1>Birthday</h1>
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
              {BirthImages &&
                BirthImages.map((item: any, id: number) => (
                  <>
                    <div
                      className='slide_show_container'
                      onClick={() => {
                        setShowSlide(true);
                        setShowImage(item);
                      }}
                    >
                      <Image src={item.image} alt='ope1' />
                    </div>
                  </>
                ))}
            </div>
          </section>
          {showSlide && (
            <div>
              <Birthdayslider
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
export default BirthDay;
