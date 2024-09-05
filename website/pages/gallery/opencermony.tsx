import React, { useState } from 'react';
import Image from 'next/image';
import Arrow from '../../asset/image/svg/Arrow';
import Router from 'next/router';
import { OpenGallery } from '../../userdata/OpenCermony';
import { Gallerysilder } from '../../component/slideshow/Galleryslider';
import { useRouter } from 'next/router';
import DynamicHead from '../../component/head/DynamicHead';
interface OpenCermonyProps {
  onClose?: any;
}
const OpenCermony: React.FC<OpenCermonyProps> = ({ onClose }) => {
  const [showImage, setShowImage] = useState([]);
  const [showSlide, setShowSlide] = useState(false);
  const router = useRouter();
  return (
    <>
      <DynamicHead title='Opening Cermony'>
        <section className='main_section circle_background'>
          <section className='mv-container'>
            <div className='multi_head'>
              <span className='multi_heading'>
                <h1>Opening</h1>
                <h1>cermony</h1>
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
              {OpenGallery &&
                OpenGallery.map((item: any, id: number) => (
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
              <Gallerysilder
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
export default OpenCermony;
