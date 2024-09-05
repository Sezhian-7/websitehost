import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Image from "next/image";

interface TeamsliderProps {
  TeamList: any;
  setSliderImg: any;
  teamDetial: any;
  currentSlider: number;
}

export const Teamslider: React.FC<TeamsliderProps> = ({
  TeamList,
  setSliderImg,
  teamDetial,
  currentSlider,
}) => {
  const [active, setActive] = useState(teamDetial);
  const imageClick = (item: any) => {
    setSliderImg(item);
    setActive(item);
  };
  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={3}
        spaceBetween={10}
        initialSlide={currentSlider}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {TeamList.map((item: any, idx: number) => (
          <>
            <SwiperSlide key={`team-img-${idx}`}>
              <div
                className={`slider-image ${active === item ? "active" : ""}`}
              >
                <Image
                  className="rounded-sm"
                  src={item.personImage}
                  alt={item.name}
                  onClick={() => imageClick(item)}
                />
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </>
  );
};
