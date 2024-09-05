import React, { useState } from 'react';
// import Accordion from '../../component/accordion/Accordion';
import { Herocard } from '../../component/card/herocard/Herocard';
import Img2 from '../../asset/image/svg/Jobdes';
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
        title='Node JS Developer'
        description='We are looking for a Node.js developer with a minimum of 2 year’s experience responsible for managing the interchange of data between the server.'
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
              <h1 className='heading_story text_des mb-[45px]'>Node JS </h1>
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
                      <p>
                        Mediwave Digital is looking for a Node.js Developer with
                        a minimum of two years of experience responsible for
                        managing data interchange between the server and the
                        users. Your primary focus will be developing all
                        server-side logic, definition and maintenance of the
                        central database, ensuring high performance and
                        responsiveness to requests from the front-end. You will
                        also be responsible for integrating the front-end
                        elements built by your co-workers into the application.
                        Therefore, a basic understanding of front-end
                        technologies is necessary as well.
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
                          Integration of user-facing elements developed by
                          front-end developers with server-side logic.
                        </li>
                        <li>Writing reusable, testable, and efficient code.</li>
                        <li>
                          Design and implementation of low-latency,
                          high-availability, and performant applications.
                        </li>
                        <li>Implementation of security and data protection.</li>
                      </span>
                    </div>
                    <div className='accordion_content'>
                      <h2>Requirements:</h2>
                      <li>Strong proficiency with JavaScript.</li>
                      <li>
                        Knowledge of Node.js and frameworks like Express, Koa
                        and Keystone.
                      </li>
                      <li>
                        Understanding the nature of asynchronous programming and
                        its quirks and workarounds.
                      </li>
                      <li>
                        Good understanding of server-side templating languages
                        such as Jade, EJS, Nunjucks.
                      </li>
                      <li>
                        Basic knowledge of front-end technologies, such as HTML5
                        and CSS3.
                      </li>
                      <li>
                        User authentication and authorisation between multiple
                        systems, servers, and environments.
                      </li>
                      <li>
                        Integration of various data sources and databases into
                        one system.
                      </li>
                      <li>
                        Understanding fundamental design principles behind a
                        scalable application.
                      </li>
                      <li>
                        Creating database schemas that represent and support
                        business processes.
                      </li>
                      <li>
                        Proficient understanding of code versioning tools, such
                        as Git.
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
