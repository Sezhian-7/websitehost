import React from 'react';
import Logo from '../../asset/image/svg/mediwavelogo';
import Face from '../../asset/image/svg/facebooklogo';
import Insta from '../../asset/image/svg/instagramlogo';
import LinkedIn from '../../asset/image/svg/linkedinlogo';
import Twitter from '../../asset/image/svg/twitter';
import { ScrollToTop } from '../../component/slidetop/slide';
// import Groupicon from '../../asset/image/svg/groupicon';
import Link from 'next/link';
import BG_SVG from '../../asset/image/svg/BG_SVG';
import Bg_Footer from '../../asset/image/svg/Bg_Footer';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className='footer_section'>
        <div className='footer_bg_block'>
          <Bg_Footer />
        </div>
        <div className='footer_container'>
          <div className='mediwave_logo'>
            <Logo />
          </div>

          <div className='mediwave_description'>
            <div className='description_content'>
              <p className='head_container'>
                Mediwave Digital focuses on healthcare technology and clinical
                research by combining user-centered design with agile
                development.
              </p>
            </div>

            <div className='mainsecond_footer'>
              <div className='inner_footer'>
                <Link href='/about'>About</Link>
                <Link href='/#our_services'>Services</Link>
                <Link href='/#our_work'>Works</Link>
                <Link href='/ourteam'>Team</Link>
              </div>

              <div className='inner_footer'>
                <Link href='/careers'>Careers</Link>
                <Link href='https://handbook.mediwavedigital.com/'>
                  Handbook
                </Link>
                <Link href='/contact'>Contact</Link>
              </div>
            </div>

            <div className='thirdmain_container'>
              <div className='follow_container'>
                <h3 className='follow_conatiner'>Follow us:</h3>
                <div className='thirdinner_footer'>
                  <Link href='https://www.facebook.com/mediwavedigital'>
                    <Face />
                  </Link>
                  <Link href='https://www.instagram.com/mediwavedigital/'>
                    <Insta />
                  </Link>
                  <Link href='https://www.linkedin.com/company/mediwave-digital/mycompany/'>
                    {' '}
                    <LinkedIn />{' '}
                  </Link>
                  <Link href='https://twitter.com/MediwaveD?t=ghPraWtN1H841TdwxtGcGQ&s=09'>
                    {' '}
                    <Twitter />{' '}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='final_block'>
          <div className='private_group_container'>
            <div className='medi_container'>
              <p className='private_container'>
                © 2019 - {currentYear} Mediwave Digital Private Limited. All
                rights reserved.
              </p>
            </div>
            <ScrollToTop />
          </div>
        </div>
      </footer>
    </>
  );
};
