import Img1 from '../../../asset/image/svg/Careerfly';
import Img2 from '../../../asset/image/svg/Cantfind';

import { MultiCard } from '../../../component/card/multicard/MultiCard';
import { EmployeeBenefits, CareerListCardData } from '../../../userdata/UserData';
import { Herocard } from '../../../component/card/herocard/Herocard';
import BG_SVG from '../../../asset/image/svg/BG_SVG';
import { ListCard } from '../../../component/card/listcard/ListCard';
import Slideshow from '../../../component/slideshow/Slideshow';
import { AnimatedSection } from '../../../component/animated/AnimatedSection';
import DynamicHead from '../../../component/head/DynamicHead';

const Careers = () => {
  return (
    <>
      <DynamicHead
        title='Career'
        description='At Mediwave, we have a people-first culture and believe that a happy employee is a productive employee. We are a flat organisation (which means there is no hierarchy). As a member of the Mediwave team, we encourage you to share your ideas, vision, and suggestions.'
      >
        <section className='hero_block main_section bg-white-block'>
          <AnimatedSection>
            <Herocard
              addClass='mv-container landing_heading'
              image={<Img1 />}
              heading2='We believe in authenticity!'
              content='At Mediwave, we have a people-first culture and believe that a happy employee is a productive employee. We are a flat organisation (which means there is no hierarchy). As a member of the Mediwave team, we encourage you to share your ideas, vision, and suggestions.'
            />
            <div className='bg_block'>
              <BG_SVG />
            </div>
          </AnimatedSection>
        </section>
        <section
          id='Our_benefits'
          className='main_section bg-gray-block career_img_background'
        >
          <AnimatedSection>
            <MultiCard
              addClass='mv-container emp_benifits'
              heading1='Employee'
              heading2='benefits'
              content='Our employees love working at Mediwave. We asked them why they love working here, and here is what they have to say.'
              userdata={EmployeeBenefits}
              cardSize='col-3'
            />
            <div className='bg_block'>
              <BG_SVG />
            </div>
          </AnimatedSection>
        </section>
        <section className='main_section bg-white-block'>
          <ListCard
            addClass='mv-container double-listcard'
            doubleList
            listPosition='center'
            heading1='We’re looking '
            heading2='for the one'
            content='If you want to work in a fun and driven environment with colleagues from all walks of life, including designers, developers, testers, DevOps engineers, project managers, and researchers, passionate about learning and delivering, this is the place for you.'
            userdata={CareerListCardData}
          />

          <div className='bg_block'>
            <BG_SVG />
          </div>
        </section>
        <section
          id='life_mediwave'
          className='main_section bg-gray-block life_circle_background'
        >
          <Slideshow />
          <div className='bg_block'>
            <BG_SVG />
          </div>
        </section>
        <section className='main_section bg-white-block cantfind_background'>
          <AnimatedSection>
            <Herocard
              addClass='mv-container'
              image={<Img2 />}
              heading1='Can’t find '
              heading2='what you are looking for?'
              content='If our job description does not align with your field of work, but you are interested in working with us, feel free to submit your resume. Our team will get in touch with you as soon as possible! '
              btntext1='CLICK HERE TO SEND'
              btnClass1='primary-btn'
              btntextLink1='/contact'
            />
          </AnimatedSection>
        </section>
      </DynamicHead>
    </>
  );
};
export default Careers;
