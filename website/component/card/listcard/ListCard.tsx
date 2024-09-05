import React, { useState } from 'react';
import Router from 'next/router';

import { Button } from '../../button/Button';
import { AnimatedSection } from '../../animated/AnimatedSection';

interface ListCardProps {
  heading1: string;
  heading2: string;
  content?: any;
  userdata?: any;
  addClass?: string;
  btntext?: any;
  btntextLink1?: string;
  OnClick?: any;
  readmoreLink?: string;
  doubleList?: boolean;
  listPosition?: 'left' | 'center' | 'right';
  parentClass?: string;
  parentonClick?: boolean;
  children?: any;
  classSideCard?: any;
  iconClick?: boolean;
}
export const ListCard: React.FC<ListCardProps> = ({
  heading1,
  heading2,
  content,
  userdata,
  addClass,
  parentClass,
  btntext,
  btntextLink1,
  OnClick,
  readmoreLink,
  doubleList,
  listPosition = 'left',
  parentonClick,
  children,
  classSideCard,
  iconClick,
}) => {
  const [readMoreData, setreadMoreData] = useState([]);
  const [showMorePopup, setshowMorePopup] = useState<string | null>(null);

  const popupdata: any = readMoreData;

  return (
    <section className={`listblock-${listPosition}`}>
      <div
        className={`ourworks_circle_background ${
          parentClass ? parentClass : ''
        } ${doubleList ? '' : 'listblock-full'}`}
      >
        <div className={`${doubleList ? '' : 'listblock'}`}>
          <section className={`listcard_section ${addClass ? addClass : ''}`}>
            <div className='card_head'>
              <AnimatedSection>
                <span className='card_heading animate-heading'>
                  <h1>
                    {heading1 && (
                      <span className=' text-4xl md:text-6xl'>{heading1}</span>
                    )}
                    {heading2 && (
                      <span className=' text-4xl md:text-6xl'>{heading2}</span>
                    )}
                  </h1>
                </span>
                {content && (
                  <span>
                    <p className='animate-subtitle'>{content}</p>
                  </span>
                )}
              </AnimatedSection>
              {children && <div>{children}</div>}
              {btntext && (
                <div className='listcard_btn_block'>
                  <Button
                    addclass='primary-btn'
                    btntext={btntext}
                    OnClick={() => Router.push(`${btntextLink1}`)}
                  />
                </div>
              )}
            </div>
            <div className={`listcard_body`}>
              <div className='listcard_list'>
                {userdata &&
                  userdata.map((item: any, idx: number) => (
                    <React.Fragment key={idx}>
                      <AnimatedSection addclass='listcard_block_group'>
                        <div
                          onClick={() => {
                            parentonClick && Router.push(`${item.parenturl}`);
                          }}
                          className={`${classSideCard} listcard_block cardline-${
                            item.id
                          }00 ${
                            showMorePopup === item.id
                              ? ''
                              : showMorePopup
                              ? 'card_hide'
                              : ''
                          }`}
                        >
                          {iconClick
                            ? item.image && (
                                <a href={item.contact}>
                                  <span role='image'>{item.image}</span>
                                </a>
                              )
                            : item.image && (
                                <span role='image'>{item.image}</span>
                              )}
                          {item.count && (
                            <div className='count_block'>
                              <h2>{item.count}</h2>
                              <p>{item.countheading}</p>
                            </div>
                          )}
                          <div className='listcard_info'>
                            {item.heading && <h2>{item.heading}</h2>}
                            {item.subheading && (
                              <h2 className='herocard_content'>
                                {item.subheading}
                              </h2>
                            )}
                            {item.content && (
                              <p>
                                {item.content.length > 90 ? (
                                  <>
                                    {item.content.substring(0, 90)}...
                                    {readmoreLink || item.link ? (
                                      <span
                                        className='click_menu'
                                        onClick={() =>
                                          Router.push(
                                            `${readmoreLink || item.link}`
                                          )
                                        }
                                      >
                                        Read more
                                      </span>
                                    ) : (
                                      <span
                                        className='click_menu'
                                        onClick={() => {
                                          setreadMoreData(item);
                                          setshowMorePopup(item.id);
                                        }}
                                      >
                                        Read more
                                      </span>
                                    )}
                                  </>
                                ) : (
                                  item.content
                                )}
                              </p>
                            )}
                            {item.weekend && (
                              <h3 className=' text-lg text-primaryContent'>
                                {item.weekend}
                              </h3>
                            )}
                            {item.contact && (
                              <a
                                className=' font-Nunito text-lg font-light text-primaryContent'
                                href={item.contact}
                              >
                                {item.contactinfo}
                              </a>
                            )}
                          </div>
                          {showMorePopup === item.id && (
                            <div className='readmore-popup'>
                              <div
                                className={`listcard_block cardline-${popupdata.id}00`}
                              >
                                {popupdata.image && (
                                  <span role='image'>{popupdata.image}</span>
                                )}
                                {popupdata.count && (
                                  <div className='count_block'>
                                    <h2>{popupdata.count}</h2>
                                    <p>{popupdata.countheading}</p>
                                  </div>
                                )}
                                <div className='listcard_info'>
                                  {popupdata.heading && (
                                    <h2>{popupdata.heading}</h2>
                                  )}
                                  {popupdata.content && (
                                    <p>
                                      {popupdata.content}
                                      <span
                                        className='click_menu'
                                        onClick={() => {
                                          setshowMorePopup(null);
                                        }}
                                      >
                                        Read less
                                      </span>
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </AnimatedSection>
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
