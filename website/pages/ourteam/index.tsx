import { Herocard } from '../../component/card/herocard/Herocard';
import Img1 from '../../asset/image/svg/Puzzle';
import { ListCard } from '../../component/card/listcard/ListCard';
import { OurCardData } from '../../userdata/UserData';
import Accordion from '../../component/accordion/Accordion';
import { AnimatedSection } from '../../component/animated/AnimatedSection';
import DynamicHead from '../../component/head/DynamicHead';

const OurTeam = () => {
  return (
    <>
      <DynamicHead
        title='Team'
        description='Mediwave Digital is the dedicated development arm of Mindwave Ventures which works on bringing together quality development and good design ...'
      >
        <section className='hero_block main_section bg-white-block team_hero_single'>
          <Herocard
            addClass='mv-container landing_heading'
            image={<Img1 />}
            heading1='Meet the team!'
            content='Our company takes pride in having a diverse team of experts with over 100+ years of combined experience.'
          />

          <section className='card_bg'>
            <ListCard
              classSideCard='cursor-pointer'
              parentonClick
              parentClass='list_ourteam'
              heading1='Our '
              heading2='team'
              content='Mediwave has been operating since 2018. At present, we have over 80 employees. As part of the Mediwave team, you will find software developers, designers, testers, DevOps engineers, project managers, researchers, and a comprehensive marketing department. As an exclusive development division of Mindwave, our primary focus is to develop innovative, high-quality designs for our clients. To date, we have completed over 20 projects in collaboration with Mindwave, and we are currently working on 23 more.'
              userdata={OurCardData}
            />
          </section>
        </section>
      </DynamicHead>
    </>
  );
};

export default OurTeam;
