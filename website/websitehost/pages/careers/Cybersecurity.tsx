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

const Cybersecurity = () => {
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
        title='Cyber Security'
        description='Cyber security specialists assess, plan, and enact security measures to help protect an organisation from security breaches and attacks on its computer networks and systems. This job involves simulating attacks to identify vulnerabilities, testing new software to help protect the company’s data, and helping users adhere to new regulations and processes to ensure the network stays safe'
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
              <h1 className='heading_story text_des mb-[45px]'>
                Cyber Security |{' '}
              </h1>
              <h1 className='heading_story text_des mb-[45px]'>
                Information Security Specialist{' '}
              </h1>
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
                        Cyber security specialists assess, plan, and enact
                        security measures to help protect an organisation from
                        security breaches and attacks on its computer networks
                        and systems. This job involves simulating attacks to
                        identify vulnerabilities, testing new software to help
                        protect the company’s data, and helping users adhere to
                        new regulations and processes to ensure the network
                        stays safe.
                      </p>
                    </div>
                    <div className='accordion_content'>
                      <li>Experience: 2 to 5 years </li>
                      <li>
                        Candidate should have a key understanding of technology,
                        IT, and governance aspects from a Cyber Security
                        perspective
                      </li>
                      <li>
                        Candidate should have an understanding on performing gap
                        assessment on organisations Cyber security landscape
                        primarily to prevent them from cyber security threats
                      </li>
                      <li>
                        Candidate should have exposure to design, development,
                        implementation and maintenance of information security
                        framework aligned to framework like ISO 27001:2013
                      </li>
                      <li>
                        Candidate should have managed end-to-end Information
                        security, and cyber security for its organisations.
                      </li>
                      <li>
                        Experience in performing the risk assessment from Cyber
                        Security, Business Continuity, and Privacy perspective.
                      </li>
                      <li>
                        Experience in Data Privacy including design/ development
                        and review of privacy framework aligned with GDPR
                        requirements and GAPP framework.
                      </li>
                      <li>
                        Experience in design/ assessment/ review of information
                        security and privacy framework aligned to IT Act
                        requirements.
                      </li>
                      <li>Cyber Incident Response.</li>
                      <li>
                        Regulatory compliance assistance in Cyber for some of
                        the key sectors including Telecom, and the Health
                        Industry.
                      </li>
                      <li>
                        Development and documentation of information security /
                        cyber security policies and procedures.
                      </li>
                      <li>
                        Exposure to international standards like NIST, CIS 20,
                        ISO27001, ISO 22301, ISO 20000, PCI-DSS, and
                        certifications like CISM, and CISSP are added
                        advantages.
                      </li>
                      <li>Aligned organisation strategy to cyber strategy.</li>
                      <li>
                        Developing cyber strategy roadmap, helping in the
                        implementation.
                      </li>
                      <li>Performing maturity assessment for cyber setup.</li>
                      <li>
                        Recommending a roadmap for strengthening the
                        organisation&apos;s cyber security posture.
                      </li>
                      <li>
                        Ability to perform an independent assessment for third
                        parties and provide recommendations to clients in order
                        to minimize cyber security risks
                      </li>
                      <li>
                        Strengthening of organisations business continuity
                        posture.
                      </li>
                      <li>
                        Candidate should have experience in working in teams and
                        managing internal and external stakeholders.
                      </li>
                    </div>
                    <div className='accordion_content'>
                      <h2>Client Relationship Building and Management:</h2>
                      <li>
                        Establish and sustain long-term profitable client
                        relationships that drive value creation, delivery
                        excellence, and a positive client work environment.{' '}
                      </li>
                      <li>
                        Leads the client lifecycle from initial contact through
                        delivery.
                      </li>
                      <li>
                        Manages client expectations and client satisfaction.
                        Acts as an advisor and partner to the client.
                      </li>
                      <li>
                        Works with the client to minimize delivery disruptions
                        and effectively manages client urgencies.
                      </li>
                    </div>
                    <div className='accordion_content'>
                      <h2>Cloud Security :</h2>
                      <li>
                        Enable developers to find and fix security-related code
                        defects.{' '}
                      </li>
                      <li>
                        Ability to provide remediation coaching and guidance on
                        security-related code defects.
                      </li>
                      <li>Govern the use of open source components.</li>
                      <li>Understanding the basics of software development.</li>
                      <li>
                        Manage and report on application security policy, KPIs,
                        and metrics.{' '}
                      </li>
                      <li>
                        The ability to measure meaningful metrics at each point
                        in the SDLC process.
                      </li>
                      <li>
                        Understand the requirements for security testing
                        solutions in a DevOps & DevSecOps environment —
                        including the need for immediacy and accuracy of results
                        to avoid impacting the delivery cycle — and enable dev
                        to use these solutions Basic understanding of developer
                        role and tools, and the operation of a modern software
                        delivery pipeline/factory.
                      </li>
                      <li>Create developer security champions. </li>
                    </div>
                    <div className='accordion_content'>
                      <h2>Requirements:</h2>
                      {/* <p className='mb-5'>
                      You will work alongside our Lead developer and collaborate
                      with the team on all activities below.
                    </p> */}
                      <span>
                        <li>
                          Bachelor’s degree in Computer Science or related
                          field.
                        </li>
                        <li>
                          Experience managing Information Security program,
                          Cloud Security.
                        </li>
                        <li>
                          CISM®, CISSP or other recognized Security
                          Certification is an added advantage.
                        </li>
                        <li>
                          In-depth knowledge of architecture, engineering, and
                          operations of at least one enterprise SIEM platform,
                          experience in establishing and running SOC.
                        </li>
                        <li>
                          Knowledge of internationally recognized standards,
                          frameworks, and best practices related to information
                          security governance and strategy development.
                        </li>
                        <li>
                          Knowledge of methods to implement and communicate
                          information security policies, standards, procedures,
                          and guidelines.
                        </li>
                        <li>
                          Knowledge of reputable, reliable, and timely sources
                          of information regarding emerging information security
                          threats and vulnerabilities.
                        </li>
                        <li>
                          Knowledge of control baseline modelling and its
                          relationship to risk-based assessments.
                        </li>
                        <li>
                          Knowledge of applicable practices and laws relating to
                          data privacy and protection.
                        </li>
                        <li>
                          Should have 8 to 10 years of experience managing and
                          supporting complex global environments.
                        </li>
                      </span>
                    </div>
                    <div className='accordion_content'>
                      <h2>Interpersonal skills:</h2>
                      <li>
                        Passionate, Self-motivated, and driven, with keen
                        attention to detail, action-and-results oriented.
                      </li>
                      <li>
                        Excellent interpersonal, verbal, and written
                        communication skills as well as strong logical,
                        analytical, problem-solving skills and reporting skills.
                      </li>
                      <li>
                        Able to prioritize and execute tasks in a high-pressure
                        environment.
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
export default Cybersecurity;
