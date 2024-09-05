import React, { useState } from 'react';
import { Button } from '../button/Button';
import { Navbar } from '../navbar/Navbar';
import Link from 'next/link';
import Logo from '../../asset/image/svg/mediwavelogo1';
import Moon from '../../asset/image/svg/Moon';
import BentoMenu from '../../asset/image/svg/Menu';
import { bentoMenu } from '../../userdata/UserData';
import { useRouter } from 'next/router';
import DarkTheme from '../theme/Theme';
import Router from 'next/router';

interface HeaderProps {
  addClass?: string;
}
export const Header: React.FC<HeaderProps> = ({ addClass }) => {
  const location = useRouter();
  const [BentoMenuShow, setBentoMenuShow] = useState(false);
  return (
    <header className='header-block'>
      <section className={`header_section ${addClass ? addClass : ''}`}>
        <div className='logo_block'>
          <Link href='/'>
            <Logo />
          </Link>
        </div>

        <div className='nav_section'>
          <Navbar />
          <div className='header_btn_block'>
            <Button
              addclass='secondary-btn'
              OnClick={() => Router.push('/contact')}
              btntext='LET’S TALK'
            />{' '}
          </div>

          <div className='theme_block'>
            <DarkTheme />
          </div>
          <div
            className='bento_menu'
            onClick={() =>
              BentoMenuShow ? setBentoMenuShow(false) : setBentoMenuShow(true)
            }
          >
            <BentoMenu />
          </div>
        </div>
      </section>
      {BentoMenuShow && (
        <>
          <section className='side-menu'>
            <div className='bento-logo logo_block'>
              <Link href='/' onClick={() => setBentoMenuShow(false)}>
                <Logo />
              </Link>
            </div>
            <div>
              <ul className='bento-nav-list'>
                {bentoMenu.map((item: any) => (
                  <React.Fragment key={item.title}>
                    <li
                      className={`bento-nav-item `}
                      onClick={() => setBentoMenuShow(false)}
                    >
                      <Link
                        className={`no-underline ${
                          location.asPath.includes(item.link) ? 'active' : ''
                        }`}
                        href={item.link}
                      >
                        {item.title}
                      </Link>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
              {/* <div>
                <Link
                  className="p-5"
                  onClick={() => setBentoMenuShow(false)}
                  href="/contact"
                >
                  CONTACT
                </Link>
              </div> */}
            </div>
          </section>
          <div
            className='sidenav-backdrop'
            onClick={() =>
              BentoMenuShow ? setBentoMenuShow(false) : setBentoMenuShow(true)
            }
          />
        </>
      )}
    </header>
  );
};
