import React, { useState } from 'react';
// import Accordion from '../../component/accordion/Accordion';
import { Herocard } from '../../../component/card/herocard/Herocard';
import Img2 from '../../../asset/image/svg/Heroimg2';
import Arrow from '../../../asset/image/svg/Arrow';
import BG_SVG from '../../../asset/image/svg/BG_SVG';
import Uparrowimage from '../../../asset/image/svg/Uparrowimage';
import DownArrow from '../../../asset/image/svg/DownArrow';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import Router from 'next/router';
import { MailTo } from '../../../component/MailTo';
import DynamicHead from '../../../component/head/DynamicHead';

const Fullstackjob = () => {
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
        title='Full Stack Developer'
        description='We are looking for a Full Stack Developer to produce scalable software solutions. You’ll be part of a cross-functional team that’s responsible for the full software development life cycle, from conception to deployment. As a Full Stack Developer, you should be comfortable around both front-end and back-end coding languages, development frameworks and third-party libraries. You should also be a team player with a knack for visual design and utility.'
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
              <h1 className='heading_story text_des mb-[45px]'>Full Stack </h1>
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
                        We are looking for a Full Stack Developer to produce
                        scalable software solutions. You&apos;ll be part of a
                        cross-functional team that&apos;s responsible for the
                        entire software development life cycle, from conception
                        to deployment.
                      </p>
                      <p>
                        As a Full Stack Developer, you should be comfortable
                        around both front-end and back-end coding languages,
                        development frameworks and third-party libraries. You
                        should also be a team player with a knack for visual
                        design and utility.
                      </p>
                    </div>
                    <div className='accordion_content'>
                      <h2>Responsibilities:</h2>
                      {/* <p className='mb-5'>
                      You will work alongside our Lead developer and collaborate
                      with the team on all activities below.
                    </p> */}
                      <span>
                        <li>
                          Design client-side and server-side architecture.
                        </li>
                        <li>
                          Develop and manage well-functioning databases and
                          applications.
                        </li>
                        <li>Write effective APIs.</li>
                        <li>
                          Ensuring cross-platform optimisation for mobile
                          phones.
                        </li>
                        <li>
                          Work with development teams and product managers to
                          ideate software solutions.
                        </li>
                        <li>
                          Test software to ensure responsiveness and efficiency.
                        </li>
                        <li>Troubleshoot, debug and upgrade software.</li>
                        <li>Meeting both technical and consumer needs.</li>
                      </span>
                    </div>
                    <div className='accordion_content'>
                      <h2>Requirements:</h2>
                      <li>
                        Proficiency with server-side languages such as Node js,
                        PHP and .Net.
                      </li>
                      <li>
                        Proficiency with JavaScript frameworks such as Angular,
                        Ionic, React js and React native.
                      </li>
                      <li>
                        Proficiency with database technology such as MySQL,
                        Oracle, Postgresql and Mongo DB.
                      </li>
                      <li>
                        Familiarity with fundamental front-end languages and
                        libraries (e.g. HTML/ CSS, JavaScript, XML, jQuery).
                      </li>
                      <li>
                        Strong organisational and project management skills.
                      </li>
                      <li>Excellent verbal communication skills.</li>
                      <li>Good problem-solving skills.</li>
                      <li>Attention to detail.</li>
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
export default Fullstackjob;
