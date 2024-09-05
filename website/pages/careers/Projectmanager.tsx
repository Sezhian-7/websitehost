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

const Projectmanager = () => {
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
        title='Project Manager'
        description='The principal role of a Project Manager is to plan, lead, organise, and motivate project teams. The goals are to achieve a high level of performance and quality and deliver projects that provide exceptional business value to users.'
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
              <h1 className='heading_story text_des mb-[45px]'>Project </h1>
              <h1 className='heading_story text_des mb-[45px]'>Manager</h1>
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
                        The principal role of a project manager is to plan,
                        lead, organise, and motivate project teams. The goals
                        are to achieve a high level of performance and quality
                        and deliver projects that provide exceptional business
                        value to users.
                      </p>
                    </div>
                    <div className='accordion_content'>
                      <h2>Responsibilities:</h2>
                      <span>
                        <li>
                          The project manager is responsible for clearly
                          defining and quantifying each step and establishing
                          concrete deadlines for each project milestone and
                          deliverables.
                        </li>
                        <li>
                          Anticipate risks and find resolutions before that risk
                          can derail a major milestone or deliverable.
                        </li>
                        <li>
                          Should handle all the complex aspects of the project;
                          these aspects may be subject to constant change to
                          accommodate market and economic conditions that
                          directly affect implementation costs, and the
                          organisation&apos;s potential profit or loss.
                        </li>
                      </span>
                    </div>
                    <div className='accordion_content'>
                      <h2>Project Manager Tasks:</h2>
                      <li>
                        Manages day-to-day operational aspects of a project and
                        its scopes, such as identifying resources needed and
                        assigning individual responsibilities, reviewing
                        deliverables, project milestones, and final project
                        outcomes.
                      </li>
                      <li>
                        Quantify priority change impacts to succeeding projects,
                        such as organisational opportunity costs of delays and
                        time delays
                      </li>
                      <li>
                        Diligent management of team&apos;s capacity plan,
                        ensuring live dates are accurately reflected, cross-team
                        dependent work is being prioritised, started, and
                        completed in a manner that minimises waste across teams.
                      </li>
                      <li>
                        Build, maintain and evolve an organisational project
                        Status Dashboard. Hours spent by project, late projects,
                        current projects by team(s), projects by category
                        (revenue, risks, etc.)
                      </li>
                      <li>
                        Manages the life cycle of projects, including project
                        risks/issues, and escalates them by mitigation plans;
                        tracks and communicates changes to reach milestones.
                      </li>
                      <li>
                        Manages relationship, communication, and training with
                        project stakeholders, sponsors, and vendors by keeping
                        them closely engaged in all aspects of the project and
                        escalating issues.
                      </li>
                      <li>
                        Coordinates efforts with the director to prepare
                        budgets. Monitors budgets to ensure that spending is
                        appropriately tracked and within established guidelines.
                      </li>
                    </div>
                    <div className='accordion_content'>
                      <h2>Education:</h2>
                      <span>
                        <li>
                          Bachelor&apos;s degree in management information
                          systems (MIS), computer science, or related
                          engineering.
                        </li>
                      </span>
                    </div>
                    <div className='accordion_content'>
                      <h2>Experience Skills:</h2>
                      <span>
                        <li>
                          The technical project manager should have superior
                          communications skills.
                        </li>
                        <li>
                          Must be able to motivate and lead internal resources
                          to work together to resolve complex technical
                          problems.
                        </li>
                        <li>
                          Manages projects through proven skills in problem
                          analysis/solutions, cost/benefit analysis, change
                          management, risk and issue management, balancing
                          multiple priorities.
                        </li>
                        <li>
                          Familiar with working on a project management tool
                          such as Jira, Wrike or the like.
                        </li>
                        <li>
                          Strong knowledge of the Agile manifesto and its
                          principles is a plus.
                        </li>
                      </span>
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
export default Projectmanager;
