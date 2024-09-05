import React, { useEffect, useState } from 'react';
import Img1 from '../../../asset/image/svg/Puzzle';
import { Herocard } from '../../../component/card/herocard/Herocard';
import { Team } from '../../../component/team/Team';
import { TeamList } from '../../../asset/TeamData';
import BG_SVG from '../../../asset/image/svg/BG_SVG';
import { useRouter } from 'next/router';
import DynamicHead from '../../../component/head/DynamicHead';

const Teams = () => {
  const [toggleState, setToggleState] = useState<any>();

  const toggleTab = (index: any) => {
    setToggleState(index);
  };
  const { asPath, pathname } = useRouter();
  useEffect(() => {
    const path = asPath.split('#');

    switch (path[path.length - 1]) {
      case 'corporate_team':
        setToggleState(1);
        break;
      case 'design_and_development_team':
        setToggleState(2);
        break;
      case 'devOps_team':
        setToggleState(3);
        break;
      case 'qa_team':
        setToggleState(4);
        break;
      case 'operation_team':
        setToggleState(5);
        break;
      case 'support_team':
        setToggleState(6);
        break;
      default:
    }
  }, []);

  return (
    <>
      <DynamicHead
        title='Team'
        description='Our company takes pride in having a diverse team of experts with over 100+ years of combined experience.'
      >
        {/* <section className='hero_block main_section bg-white-block'>
        <Herocard
          addClass='mv-container landing_heading'
          image={<Img1 />}
          heading1='Meet the team!'
          content='Our company takes pride in having a diverse team of experts with over 100+ years of combined experience.'
          // btntext1="JOIN OUR TEAM"
          // btnClass1="primary-btn"
          // btntext2="CONTACT US"
          // btnClass2="secondary-btn"
        />
        <div className='bg_block'>
          <BG_SVG />
        </div>
      </section> */}
        <section className='pb-48 main_section bg-white-block team_main_background'>
          <div className='container'>
            <div className='overflow-x-auto'>
              <div className='bloc-tabs'></div>
              <div className='bloc-tabs'>
                <button
                  id='corporate_team'
                  className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
                  onClick={() => toggleTab(1)}
                >
                  Corporate team
                </button>
                <button
                  id='design_and_development_team'
                  className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
                  onClick={() => toggleTab(2)}
                >
                  Design and Development team
                </button>
                <button
                  id='devOps_team'
                  className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
                  onClick={() => toggleTab(3)}
                >
                  DevOps team
                </button>
                <button
                  id='qa_team'
                  className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'}
                  onClick={() => toggleTab(4)}
                >
                  QA team
                </button>
                <button
                  id='operation_team'
                  className={toggleState === 5 ? 'tabs active-tabs' : 'tabs'}
                  onClick={() => toggleTab(5)}
                >
                  Operations team
                </button>
                <button
                  id='support_team'
                  className={toggleState === 6 ? 'tabs active-tabs' : 'tabs'}
                  onClick={() => toggleTab(6)}
                >
                  Support team
                </button>
              </div>
            </div>

            <div className='content-tabs'>
              {toggleState === 1 && (
                <div
                  className={
                    toggleState === 1 ? 'content  active-content' : 'content'
                  }
                >
                  <Team teamData={TeamList['corporate']} />
                </div>
              )}

              {toggleState === 2 && (
                <div
                  className={
                    toggleState === 2 ? 'content  active-content' : 'content'
                  }
                >
                  <Team teamData={TeamList['design_development']} />
                </div>
              )}

              {toggleState === 3 && (
                <div
                  className={
                    toggleState === 3 ? 'content  active-content' : 'content'
                  }
                >
                  <Team teamData={TeamList['devops']} />
                </div>
              )}
              {toggleState === 4 && (
                <div
                  className={
                    toggleState === 4 ? 'content  active-content' : 'content'
                  }
                >
                  <Team teamData={TeamList['qa']} />
                </div>
              )}
              {toggleState === 5 && (
                <div
                  className={
                    toggleState === 5 ? 'content  active-content' : 'content'
                  }
                >
                  <Team teamData={TeamList['operations']} />
                </div>
              )}
              {toggleState === 6 && (
                <div
                  className={
                    toggleState === 6 ? 'content  active-content' : 'content'
                  }
                >
                  <Team teamData={TeamList['support']} />
                </div>
              )}
            </div>
          </div>
          {/* <div className='bg_block'>
          <BG_SVG />
        </div> */}
        </section>
      </DynamicHead>
    </>
  );
};

export default Teams;
