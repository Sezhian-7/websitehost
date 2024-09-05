import React, { useState } from 'react';
// import Accordion from '../../component/accordion/Accordion';
import { Herocard } from '../../../component/card/herocard/Herocard';
import Img2 from '../../../asset/image/svg/Jobdes';
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

const Jobdescription = () => {
  const [showAccordion, setAccordion] = useState(false);

  const handleClickScroll = (e: any) => {
    const element = document.getElementById('accordion__heading-1');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // aria-expanded="true"
  return (
    <>
      <DynamicHead
        title='Devops Engineer'
        description='We are looking for a DevOps Engineer who knows Docker inside and out with 4 - 7 years of experience. They will be responsible for defining and implementing our containerization technology strategies. They will also design our architecture and define our roadmap. The candidate will work on building, scaling, and monitoring various highly complex applications of ours, and making our container orchestration cluster highly available.'
      >
        <section className='main_section bg-white-block develop_circle_background'>
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
              <h1 className='heading_story text_des mb-[45px]'>Devops </h1>
              <h1 className='heading_story text_des mb-[45px]'>Engineer</h1>
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
                        We are looking for a DevOps engineer who knows Docker
                        inside and out with 4 - 7 years of experience. They will
                        be responsible for defining and implementing our
                        containerisation technology strategies. They will also
                        design our architecture and define our roadmap. In
                        addition, the candidate will work on building, scaling,
                        and monitoring various highly complex applications and
                        making our container orchestration cluster highly
                        available.
                      </p>
                    </div>
                    <div className='accordion_content'>
                      <h2>Responsibilities:</h2>

                      <span>
                        <li>Implement and improve monitoring and alerting.</li>
                        <li>
                          Build and maintain highly available systems on
                          Kubernetes.
                        </li>
                        <li>Implement and manage CI/CD pipelines.</li>
                        <li>
                          Implement an auto-scaling system for our Kubernetes
                          nodes.
                        </li>
                        <li>Participate in on-call rotations.</li>
                      </span>
                    </div>
                    <div className='accordion_content'>
                      <h2>Requirements:</h2>
                      <li>
                        Operations or systems administration experience,
                        particularly on Linux.
                      </li>
                      <li>
                        At least two years of experience on Azure or AWS cloud
                        service.
                      </li>
                      <li>
                        At least two years of experience on Azure or AWS cloud
                        service.
                      </li>
                      <li>Experience with container orchestration.</li>
                      <li>
                        Experience with monitoring tools like Prometheus,
                        Grafana, etc.
                      </li>
                      <li>
                        Experience with application deployment by using CI/CD.
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
export default Jobdescription;
