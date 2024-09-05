import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Gallery1 from "../../asset/image/jpg&png/Celebrations/celebrations-thumb-img6.jpg";
import Birthdeep from "../../asset/image/jpg&png/Birthdays/birthdeep.jpg";
import Gallery3 from "../../asset/image/jpg&png/Celebrations/celebrations-thumb-img1.jpg";
import Gallery4 from "../../asset/image/jpg&png/OpeningCeremony/gallery14.jpg";
import Gallery5 from "../../asset/image/jpg&png/Celebrations/celebrations-thumb-img13.jpg";
import Birthgerogecake from "../../asset/image/jpg&png/Birthdays/birthgeorgecake.jpg";
import Gallery7 from "../../asset/image/jpg&png/OpeningCeremony/gallery1.jpg";
import Gallery8 from "../../asset/image/jpg&png/Celebrations/celebrations-thumb-img19.jpg";
import NoSSR from 'react-no-ssr';

import { Pagination, Navigation, Autoplay } from "swiper";
import Image from "next/image";


export default function Slideshow() {
  return (
    <>
      <section className="mv-container">
        <div className="multi_head header_top">
          <span className="multi_heading">
            <h1>Life at</h1>
            <h1>Mediwave</h1>
          </span>
          <p>
            A sneak peek of what to expect once you join our team (Warning: We
            love having fun as much as we love working hard)
          </p>
        </div>
      </section>

     <div className="gallery-swiper">
      <NoSSR>
      <section className="swippers-container">
        <Swiper
          spaceBetween={30}
          navigation={true}
          // loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1494: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            1860: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          effect="cube"
          speed={1000}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="min_image_length">
            <div className="colorfull_entry fest_celebration">
              <Link href="/gallery/celebration">
                <Image src={Gallery1} alt="images1" />
                <div className="overlay">
                  <div className="text">Festival Celebration</div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_two_images">
              <div className="slide_images fest_celebration">
                <Link href="/gallery/birthday">
                  <Image src={Birthdeep} alt="images2" />
                  <div className="overlay">
                    <div className="text">Birthday Celebration</div>
                  </div>
                </Link>
              </div>
              <div className="slide_images fest_celebration">
                <Link href="/gallery/celebration">
                  <Image src={Gallery3} alt="images3" />
                  <div className="overlay">
                    <div className="text">Festival Celebration</div>
                  </div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="min_image_length">
            <div className="welcoming_images fest_celebration">
              <Link href="/gallery/opencermony">
                <Image src={Gallery4} alt="images4" />
                <div className="overlay">
                  <div className="text">Openning Cermony</div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_two_images">
              <div className="slide_images fest_celebration">
                <Link href="/gallery/celebration">
                  <Image src={Gallery5} alt="images5" />
                  <div className="overlay">
                    <div className="text">Festival Celebration</div>
                  </div>
                </Link>
              </div>
              <div className="slide_images fest_celebration">
                <Link href="/gallery/birthday">
                  <Image src={Birthgerogecake} alt="images6" />
                  <div className="overlay">
                    <div className="text">Birthday Celebration</div>
                  </div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="colorfull_content">
              <div className="Inside_colorfull fest_celebration">
                <Link href="/gallery/opencermony">
                  <Image src={Gallery7} alt="images7" />
                  <div className="overlay">
                    <div className="text">Openning Cermony</div>
                  </div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="min_image_length">
            <div className="welcoming_images fest_celebration">
              <Link href="/gallery/celebration">
                <Image src={Gallery8} alt="images4" />
                <div className="overlay">
                  <div className="text">Festival Celebration</div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="min_image_length">
            <div className="colorfull_entry fest_celebration">
              <Link href="/gallery/celebration">
                <Image src={Gallery1} alt="images1" />
                <div className="overlay">
                  <div className="text">Festival Celebration</div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_two_images">
              <div className="slide_images fest_celebration">
                <Link href="/gallery/birthday">
                  <Image src={Birthdeep} alt="images2" />
                  <div className="overlay">
                    <div className="text">Birthday Celebration</div>
                  </div>
                </Link>
              </div>
              <div className="slide_images fest_celebration">
                <Link href="/gallery/celebration">
                  <Image src={Gallery3} alt="images3" />
                  <div className="overlay">
                    <div className="text">Festival Celebration</div>
                  </div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="min_image_length">
            <div className="welcoming_images fest_celebration">
              <Link href="/gallery/opencermony">
                <Image src={Gallery4} alt="images4" />
                <div className="overlay">
                  <div className="text">Openning Cermony</div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_two_images">
              <div className="slide_images fest_celebration">
                <Link href="/gallery/celebration">
                  <Image src={Gallery5} alt="images5" />
                  <div className="overlay">
                    <div className="text">Festival Celebration</div>
                  </div>
                </Link>
              </div>
              <div className="slide_images fest_celebration">
                <Link href="/gallery/birthday">
                  <Image src={Birthgerogecake} alt="images6" />
                  <div className="overlay">
                    <div className="text">Birthday Celebration</div>
                  </div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="colorfull_content">
              <div className="Inside_colorfull fest_celebration">
                <Link href="/gallery/opencermony">
                  <Image src={Gallery7} alt="images7" />
                  <div className="overlay">
                    <div className="text">Openning Cermony</div>
                  </div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="min_image_length">
            <div className="welcoming_images fest_celebration">
              <Link href="/gallery/celebration">
                <Image src={Gallery8} alt="images4" />
                <div className="overlay">
                  <div className="text">Festival Celebration</div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      </NoSSR>
     </div>
    </>
  );
}
