import { useState } from 'react';
import Image from 'next/image';
import Router from 'next/router';
import DynamicHead from '../component/head/DynamicHead';
import ScrollToSection from '../component/section/ScrollToSection';

import { Herocard } from '../component/card/herocard/Herocard';
import Img1 from '../asset/image/svg/Heroimg1';
import Star from '../asset/image/svg/star';
import Medical from '../asset/image/svg/medical';
import Fortnight from '../asset/image/svg/fortnight';
import Performance from '../asset/image/svg/performance';
import funimages1 from '../asset/image/jpg&png/funimages1.png';
import funimages2 from '../asset/image/jpg&png/funimages2.png';
import funimages3 from '../asset/image/jpg&png/funimages3.png';
import funimages4 from '../asset/image/jpg&png/funimages4.png';
import funimages5 from '../asset/image/jpg&png/funimages5.png';
import { AnimatedSection } from '../component/animated/AnimatedSection';
import '../styles/Home.module.css';
import {
  JoinUsData,
  ListCardData,
  multiCardData,
  TestimonialContent,
  TestMessage,
} from '../userdata/UserData';
import { ListCard } from '../component/card/listcard/ListCard';
import { Button } from '../component/button/Button';
import { MultiCard } from '../component/card/multicard/MultiCard';
import BG_SVG from '../asset/image/svg/BG_SVG';
import '../styles/Home.module.css';
import { Meetteam } from '../component/meetteam/Meetteam';
import { ExternalLink } from '../component/ExternalLink';
import { TestimonialCard } from '../component/card/testcard/TestimonialCard';

import Page from '../component/page/Page';

export default function Home() {
  const [readMoreData, setreadMoreData] = useState([]);

  return (
    <>
      <DynamicHead
        title='Mediwave Digital'
        description='With over 85 people and counting, we are a team of young and passionate individuals working to develop innovative and futuristic digital products and services. We work exclusively with Mindwave Ventures, our parent company based in London, United Kingdom. At Mediwave we believe that a happy employee is a productive employee and once you are a member of Mediwave, we encourage your ideas, visions, and suggestions.'
      >
        <section className='hero_block main_section bg-white-block landing_hero_single'>
          <AnimatedSection>
            <Herocard
              addClass='mv-container landing_heading'
              image={<Img1 />}
              heading2='Welcome to Mediwave Digital! '
              content='With over 85 people and counting, we are a team of young and passionate individuals working to develop innovative and futuristic digital products and services. We work exclusively with Mindwave Ventures, our parent company based in London, United Kingdom.
            At Mediwave we believe that a happy employee is a productive employee and once you are a member of Mediwave, we encourage your ideas, visions, and suggestions.
            '
              btntext1='JOIN OUR TEAM'
              btnClass1='primary-btn'
              btntextLink1='/careers'
              btntext2='CONTACT US'
              btnClass2='secondary-btn'
              btntextLink2='/contact'
            />
            <div className='bg_block'>
              <BG_SVG />
            </div>
          </AnimatedSection>
        </section>
        <ScrollToSection
          sectionId='our_services'
          className='main_section bg-gray-block service_circle_block'
        >
          <AnimatedSection>
            <MultiCard
              show_line
              addClass='mv-container mt-[35px]'
              heading1='Our'
              heading2='services'
              content=''
              userdata={multiCardData}
              cardSize='col-2'
            >
              <p className='animate-subtitle'>
                We are a passionate and energetic team of designers and
                developers committed to creating impactful digital products and
                services. As{' '}
                <ExternalLink
                  target='_blank'
                  link='https://mindwaveventures.com/'
                >
                  Mindwave Ventures
                </ExternalLink>{' '}
                exclusive development partner, we work exclusively on projects
                for their clients.
              </p>
            </MultiCard>
            <div className='bg_block'>
              <BG_SVG />
            </div>
          </AnimatedSection>
        </ScrollToSection>
        <ScrollToSection
          sectionId='our_work'
          className='main_section bg-white-block mt-[50px]'
        >
          <ListCard
            heading1='Our '
            heading2='works'
            content='In addition to the National Health Service in the UK, charities and private sector organisations, the team has worked on an array of projects with Mindwave Ventures..'
            userdata={ListCardData}
          />
          <div></div>
          <div className='bg_block'>
            <BG_SVG />
          </div>
        </ScrollToSection>
        <section className='main_section bg-gray-block'>
          <AnimatedSection>
            <Meetteam
              addClass='text-meet'
              heading1='Meet the'
              heading2='team'
              content='Pixels that contribute to the larger picture!'
            />
            <div className='text-center'>
              <Button
                addclass='primary-btn'
                btntext='MEET THE TEAM'
                OnClick={() => Router.push('/ourteam')}
              />
            </div>
            <div className='bg_block'>
              <BG_SVG />
            </div>
          </AnimatedSection>
        </section>
        <div className='main_section bg-white-block'>
          <section className='bg-white-block life_at_background'>
            <AnimatedSection>
              <div className='main_container_mediwave'>
                <div className='sub_main_container'>
                  <div className='images_slide'>
                    <div className='img_container1'>
                      <Image
                        src={funimages1}
                        alt='GFG logo imported from public directory'
                      />
                    </div>
                    <div className='img_container2'>
                      <Image
                        src={funimages2}
                        alt='GFG logo imported from public directory'
                      />
                    </div>
                    <div className='img_container3'>
                      <Image
                        src={funimages3}
                        alt='GFG logo imported from public directory'
                      />
                    </div>
                    <div className='img_container4'>
                      <Image
                        src={funimages4}
                        alt='GFG logo imported from public directory'
                      />
                    </div>
                    <div className='img_container5'>
                      <Image
                        src={funimages5}
                        alt='GFG logo imported from public directory'
                      />
                    </div>
                  </div>
                </div>

                <div className='content_container'>
                  <div className='content_mediwave multi_head'>
                    <span className='multi_heading text_des animate-heading'>
                      <h1 className='text_des'>Life at</h1>
                      <h1 className='text_des'>Mediwave</h1>
                    </span>
                  </div>
                </div>

                <div className='content_details'>
                  <p className='content_describe text_cont animate-subtitle'>
                    Get a glimpse into how we enjoy our work and the company of
                    others on a daily basis.
                  </p>
                  <div className='features_container'>
                    <div className='pay_scale_container'>
                      <div className='icon_star'>
                        <Star />
                      </div>
                      <div className='best_image_box'>
                        <p className='best_conatiner'>Best pay scale</p>
                      </div>
                    </div>
                    <div className='pay_scale_container'>
                      <div className='icon_star'>
                        <Fortnight />
                      </div>
                      <div className='best_image_box'>
                        <p className='best_conatiner'>
                          Alternative Friday off!
                        </p>
                      </div>
                    </div>
                    <div className='pay_scale_container'>
                      <div className='icon_star'>
                        <Medical />
                      </div>
                      <div className='best_image_box'>
                        <p className='best_conatiner'>Medical insurance</p>
                      </div>
                    </div>
                    <div className='pay_scale_container'>
                      <div className='icon_star'>
                        <Performance />
                      </div>
                      <div className='best_image_box'>
                        <p className='best_conatiner'>Performance bonus</p>
                      </div>
                    </div>
                  </div>
                  <div className='beny_container'>
                    <Button
                      btntext={'VIEW BENEFITS'}
                      OnClick={() => Router.push('/careers/#Our_benefits')}
                      addclass='primary-btn'
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </section>
          <section className='theme-white-bg pb-[95px]'>
            <ListCard
              listPosition='right'
              // readmoreLink={"/careers/Jobdescription"}
              heading1='Are you '
              heading2='the one?'
              content='At Mediwave, we take on major challenges, work with remarkable people, and make a tangible effect with our work. If you are hoping to progress in your career, join us on our mission to assist businesses in providing positive customer experiences.'
              userdata={JoinUsData}
              btntext='EXPLORE OPPORTUNITIES'
              btntextLink1='/careers'
            />
          </section>
          <section className='theme-white-bg'>
            <AnimatedSection>
              <TestimonialCard
                addClass='mv-container emp_benifits'
                heading1='What people'
                heading2='are saying?'
                content='Our employees love working at Mediwave. We asked them why they love working here, and here is what they have to say.'
                userdata={TestimonialContent}
              />
            </AnimatedSection>
          </section>
        </div>
      </DynamicHead>
    </>
  );
}
