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

const Businessanalysis = () => {
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
        title='Business
        Analyst'
        description='We need someone who can interact closely with stakeholders during the proposal and bidding processes and liaise with the internal team to share the requirement and specifications.'
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
              <h1 className='heading_story text_des mb-[45px]'>Business </h1>
              <h1 className='heading_story text_des mb-[45px]'>Analyst</h1>
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
                      <p>
                        We need someone who can interact closely with
                        stakeholders during the proposal and bidding processes
                        and liaise with the internal team to share the
                        requirement and specifications.
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
                          Develop relationships with prospective clients, while
                          maintaining existing client relationships.
                        </li>
                        <li>
                          Partner with sales teams to create contract-winning
                          proposals for current and prospective clients.
                        </li>
                        <li>
                          Identify potential clients in the target market and
                          analyze customer requirements to design the
                          technical/Business solutions which meet customers’
                          needs.
                        </li>
                        <li>
                          Experienced in bid writing and proposal writing also
                          coordinating with the team to win the project.
                        </li>
                        <li>
                          Prepares analysis reports and seeks out all feasible
                          alternatives.
                        </li>
                        <li>
                          Liaise with stakeholder and Internal team share the
                          requirement into tangible deliverable such as
                          functional specification, wireframes, and process
                          diagrams.
                        </li>
                        <li>
                          Involved in creating software requirement
                          specifications, functional specification document
                          related to project.
                        </li>
                        <li>
                          Actively supported to project management activities.
                        </li>
                      </span>
                    </div>
                    <div className='accordion_content'>
                      <h2>Requirements:</h2>
                      <li>A bachelor’s degree in business or related field.</li>
                      <li>
                        A minimum of 1 year of experience in business analysis
                        or a related field.
                      </li>
                      <li>
                        Exceptional analytical and conceptual thinking skills.
                      </li>
                      <li>Excellent documentation skills.</li>
                      <li>
                        Excellent planning, organisational, and time management
                        skills.
                      </li>
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
export default Businessanalysis;
