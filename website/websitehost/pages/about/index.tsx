import React from 'react';
import Router from 'next/router';
import { Timesheet } from '../../../component/timesheet/Timesheet';
import { Herocard } from '../../../component/card/herocard/Herocard';
import Img2 from '../../../asset/image/svg/Heroimg2';
import AboutImg from '../../asset/image/jpg&png/About.jpg';
import { InfoCard } from '../../../component/card/infocard/InfoCard';
import { ListCard } from '../../../component/card/listcard/ListCard';
import {
  AboutListCardData,
  JoinUsData,
  timesheetimages,
} from '../../../userdata/UserData';
import BG_SVG from '../../../asset/image/svg/BG_SVG';
import { AnimatedSection } from '../../../component/animated/AnimatedSection';
import 'animate.css/animate.min.css';
import DynamicHead from '../../../component/head/DynamicHead';

const About = () => {
  return (
    <>
      <DynamicHead
        pageURL="https://www.mediwavedigital.com/about"
        image="https://www.mediwavedigital.com/_next/static/media/About.4e684987.jpg"
        title='About'
        description='Through platforms and products designed collaboratively with end users, Mediwave (the development arm of Mindwave) promotes positive behaviour change by helping end users reach their health and wellbeing goals.'
      >
        <section className='hero_block main_section bg-white-block'>
          <AnimatedSection>
            <Herocard
              addClass='mv-container landing_heading'
              image={<Img2 />}
              heading2='Your health and wellbeing are our priority!'
              content='Through platforms and products designed collaboratively with end users, Mediwave (the development arm of Mindwave) promotes positive behaviour change by helping end users reach their health and wellbeing goals.'
            />
            <div className='bg_block'>
              <BG_SVG />
            </div>
          </AnimatedSection>
        </section>
        <section className='main_section bg-gray-block about_circle_block'>
          <AnimatedSection>
            <InfoCard
              addClass='mv-container'
              heading1='About'
              heading2='our company'
              content="We are Mindwave Ventures' dedicated development arm, working on bringing together quality development and thoughtful design to create digital products and services."
              image={AboutImg}
              infoContent='To date, the Mediwave Team has developed websites, apps, and VR projects for the NHS including Healthlocker, GoodThinking, Medichec, and Health VR. The company has also collaborated with leading academic research centres in London and throughout the UK.'
            />
            <div className='bg_block'>
              <BG_SVG />
            </div>
          </AnimatedSection>
        </section>
        <section className='main_section bg-white-block'>
          <ListCard
            addClass='text_heading'
            heading1='Our'
            heading2=' Vision'
            content="Our main goal is to continue providing complete services, including discovery, design, development, DevOps, QA and deployment, and to amass many leaders in healthcare and technology. With our team's collective expertise, we aim to propel Mindwave to the forefront of 'digital health,' solidifying its position as an industry leader in the UK."
            userdata={AboutListCardData}
          />
        </section>
        <section className='Timesheet_images_container'>
          <Timesheet
            addClass='mv-container'
            heading1='Throwback to'
            heading2='our journey'
            content='The brainchild of our founder Mr Kumar Jacob, Mediwave Digital, was born in 2018 with just an idea, five software developers and a small apartment complex in Pondicherry. Here is a brief look back at our journey to date.'
            userdata={timesheetimages}
          />
        </section>

        <section className='bg-white-block'>
          <ListCard
            listPosition='right'
            // readmoreLink={'/careers/Jobdescription'}
            heading1='Join '
            heading2='us'
            content='At Mediwave, we take on big challenges, collaborate with great people, and make a real impact with our work. If you’re ready to grow your career, join us on our mission to help companies deliver happy customer experiences.'
            userdata={JoinUsData}
            btntext='EXPLORE OPPORTUNITIES'
            btntextLink1='/careers'
          />
        </section>
      </DynamicHead>
    </>
  );
};

export default About;
