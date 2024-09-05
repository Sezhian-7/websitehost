import React, { useState } from 'react';
import Image from 'next/image';
import Masonry from 'react-masonry-css';

interface TestimonialCardProps {
  heading1: string;
  heading2: string;
  content: string;
  userdata?: any;
  addClass?: string;
  item?: any;
  children?: any;
  TestimonialContent?: any;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  heading1,
  heading2,
  content,
  userdata,
  addClass,
  children,
}) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const [showAllData, setShowAllData] = useState(false);

  const handleShowMore = () => {
    setShowAllData(true);
  };

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

      <div className={`testicard_body`}>
        <div className='testicard_container'>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className='my-masonry-grid'
            columnClassName='my-masonry-grid_column'
          >
            {showAllData
              ? userdata &&
                userdata.map((item: any, idx: number) => (
                  <div className={`testicard_block`} key={idx.toString()}>
                    <p>{item.detial}</p>
                    <div className='testicard_img_block'>
                      <div className='testi_Icon_block'>
                        <Image
                          className='rounded-sm'
                          src={item.personImage}
                          alt={item.name}
                        />
                      </div>
                      <span className='team_masonry'>
                        <h2>{item.name} </h2>
                        <p>{item.designation}</p>
                        {children && <div>{children}</div>}
                      </span>
                    </div>
                  </div>
                ))
              : userdata.slice(0, 6).map((item: any, idx: number) => (
                  <div className={`testicard_block`} key={idx.toString()}>
                    <p>{item.detial}</p>
                    <div className='testicard_img_block'>
                      <div className='testi_Icon_block'>
                        <Image
                          className='rounded-sm'
                          src={item.personImage}
                          alt={item.name}
                        />
                      </div>
                      <span className='team_masonry'>
                        <h2>{item.name} </h2>
                        <p>{item.designation}</p>
                        {children && <div>{children}</div>}
                      </span>
                    </div>
                  </div>
                ))}
          </Masonry>
          {!showAllData ? (
            <div className='text-center'>
              <button
                className='primary-btn py-3 px-7'
                onClick={handleShowMore}
              >
                View More
              </button>
            </div>
          ) : (
            <div className='text-center'>
              {' '}
              <button
                className='primary-btn py-3 px-7'
                onClick={() => setShowAllData(false)}
              >
                View Less
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
