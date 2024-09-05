import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';
import { primaryMenu } from '../../userdata/UserData';

export const Navbar: React.FC<any> = () => {
  const location = useRouter();

  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveMenuItem(entry.target.id);
          } else if (entry.target.id === activeMenuItem) {
            console.log('isIntersecting', entry.target.id === activeMenuItem);
            setActiveMenuItem(null);
          }
        });
      },
      { root: null, rootMargin: '0px 0px 50% 0px', threshold: 0.5 }
    );

    const section1 = document.querySelector('#our_services');
    if (section1 !== null) {
      observer.observe(section1);
    }

    const section2 = document.querySelector('#our_work');
    if (section2 !== null) {
      observer.observe(section2);
    }

    return () => {
      if (section1 !== null) {
        observer.unobserve(section1);
      }
      if (section2 !== null) {
        observer.unobserve(section2);
      }
    };
  }, [activeMenuItem, location]);

  const tabIndex = 0;

  return (
    <>
      <nav className='primary-nav'>
        <ul className='nav-list'>
          {primaryMenu.map((item: any) => (
            <React.Fragment key={item.title}>
              <li className={`nav-item`} tabIndex={tabIndex}>
                <Link
                  className={`no-underline ${
                    location.asPath.includes(item.link) ? 'active' : ''
                  } ${
                    activeMenuItem
                      ? item.id === activeMenuItem &&
                        location.asPath !== activeMenuItem
                        ? 'menuactive'
                        : 'inactive'
                      : 'null-path'
                  }`}
                  href={item.link}
                  target={`${item.isExtenal === true ? '_blank' : '_self'}`}
                >
                  {item.title}
                </Link>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </>
  );
};
