import React, { useState, useEffect } from 'react';
import Groupicon from '../../asset/image/svg/groupicon';
interface ScrollToTopProps {}
export const ScrollToTop: React.FC<ScrollToTopProps> = () => {
  const tabIndex = 0;
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    // <div className="cursor-pointer inline-block">
    //   {showTopBtn && (
    //     <span tabIndex={tabIndex} onClick={goToTop} className="onkeyup">
    //       <ShowTopBtn />
    //     </span>
    //   )}
    // </div>

    <div className='group_container'>
      {showTopBtn && (
        <span tabIndex={tabIndex} onClick={goToTop} className='onkeyup'>
          <Groupicon />
        </span>
      )}
    </div>
  );
};
