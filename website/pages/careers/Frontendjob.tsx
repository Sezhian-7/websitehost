import React, { useState } from 'react';
// import Accordion from '../../component/accordion/Accordion';
import { Herocard } from '../../component/card/herocard/Herocard';
import Img2 from '../../asset/image/svg/Heroimg2';
import Arrow from '../../asset/image/svg/Arrow';
import BG_SVG from '../../asset/image/svg/BG_SVG';
import Uparrowimage from '../../asset/image/svg/Uparrowimage';
import DownArrow from '../../asset/image/svg/DownArrow';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import Router from 'next/router';
import { MailTo } from '../../component/MailTo';
import DynamicHead from '../../component/head/DynamicHead';

const Frontendjob = () => {
  const [showAccordion, setAccordion] = useState(false);
  const handleClickScroll = (e: any) => {
    const element = document.getElementById('accordion__heading-1');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <DynamicHead
        title='Front End Developer'
        description='We are looking for qualified Front-end developers with a minimum of 2 years experience to join our team. You will be responsible for building the ‘client-side’ of our web & mobile applications. You are required to work in teams alongside Back end Developers and User Experience Designers to ensure all elements of web creation are consistent. This requires excellent communication and interpersonal skills.'
      >
        <section className='main_section bg-gray-block develop_circle_background'>
          <div className='mv-container'>
            <div className='back_section'>
              <span
                onClick={() => Router.push('/careers')}
                className='back_arrow'
              >
                <Arrow />
                <p>Back to Careers</p>
              </span>
            </div>
            <span className='multi_heading text_des mb-0'>
              <h1 className='heading_story text_des mb-[45px]'>Front End</h1>
              <h1 className='heading_story text_des mb-[45px]'>Developer</h1>
            </span>
          </div>

          <section className='mv-container'>
            <Accordion preExpanded={['1']}>
              <AccordionItem uuid='1' onClick={handleClickScroll}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className={`accordion-head`}>About job:</div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className='accordion_space_block mb-[20px]'>
                    <div className='accordion_content'>
                      <h2>Job Description</h2>
                      <p className='mb-[20px]'>
                        We are looking for qualified Front-end developers with a
                        minimum two years of experience to join our team. You
                        will be responsible for building the
                        &apos;client-side&apos; of our web & mobile
                        applications.
                      </p>
                      <p>
                        You are required to work in teams alongside Back end
                        Developers and User Experience Designers to ensure all
                        elements of web creation are consistent. This requires
                        excellent communication and interpersonal skills.
                      </p>
                    </div>
                    <div className='accordion_content'>
                      <h2>Responsibilities:</h2>
                      <p className='mb-5'>
                        You will work alongside our Lead developer and
                        collaborate with the team on all activities below.
                      </p>
                      <span>
                        <li>
                          Use markup languages like HTML to create user-friendly
                          responsive web pages.
                        </li>
                        <li>Maintain and improve websites.</li>
                        <li>Optimise applications for maximum speed.</li>
                        <li>Design mobile-based features.</li>
                        <li>
                          Assure that all user input is validated before
                          submitting to the back-end.
                        </li>
                        <li>
                          Collaborate with back-end developers and web designers
                          to improve usability.
                        </li>
                        <li>
                          Maintaining brand consistency throughout the design.
                        </li>
                      </span>
                    </div>
                    <div className='accordion_content'>
                      <h2>Requirements:</h2>
                      <li>
                        Proficient understanding of web markup, including HTML5,
                        CSS3.
                      </li>
                      <li>
                        Basic understanding of server-side CSS pre-processing
                        platforms, such as LESS and SASS.
                      </li>
                      <li>
                        Proficient understanding of client-side scripting and
                        JavaScript frameworks, including jQuery.
                      </li>
                      <li>
                        Good understanding of advanced JavaScript libraries and
                        frameworks such as React.js, Bootstrap, Ionic, Node js,
                        CMS Framework like Apostrophe, Wagtail, keystone.
                      </li>
                      <li>Familiarity with browser testing and debugging.</li>
                      <li>
                        In-depth understanding of the entire web development
                        process (design, development and deployment).
                      </li>
                      <li>Excellent analytical and multitasking skills.</li>
                      <li>Experience with responsive and adaptive design.</li>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem uuid='2' onClick={handleClickScroll}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className={`accordion-head`}>About us:</div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className='accordion_space_block'>
                    <p className='accordion_para'>
                      We believe a happy employee is a productive employee. As a
                      company catering to the healthcare industry, we are making
                      an impact in the world of health and wellbeing by creating
                      products and services that genuinely meet the needs of
                      end-users. All our products and services are
                      evidence-driven. We test, we learn, and we deliver
                      high-quality products.
                    </p>

                    <p className='accordion_para'>
                      Our team consists of people from all walks of life
                      including designers, developers, testers, DevOps
                      engineers, project managers and researchers who are
                      passionate about learning and delivering. We work closely
                      with clinicians and other third parties to ensure we are
                      utilising the best brains in the business across many
                      sectors.
                    </p>
                    <p className='accordion_para'>
                      We are always employee-first. Once you are part of our
                      team, you reap the best benefits from the best package to
                      Diwali bonus, Annual performance bonus, Medical Insurance
                      and Life insurance- for you and your family, etc.
                    </p>
                    <p className='accordion_para'>
                      If you want to be a part of our small but growing team and
                      work in a fun environment, we would love to hear from you.
                    </p>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem uuid='3' onClick={handleClickScroll}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className={`accordion-head`}>
                      To apply, please send us:
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className='accordion_space_block mb-[20px]'>
                    <span>
                      <li>
                        CV - showing your key skills, interests and personality
                      </li>
                      <li>
                        Short cover letter - why is working at Mediwave Digital
                        right for you?
                      </li>
                    </span>
                    <p className='link_accordion'>
                      Applications should be sent to{' '}
                      <MailTo email='mediwave@mindwaveventures.com'>
                        mediwave@mindwaveventures.com
                      </MailTo>{' '}
                    </p>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </section>
        </section>
      </DynamicHead>
    </>
  );
};
export default Frontendjob;
