import React from 'react';
import Thankyou from '../../asset/image/svg/Thankyou';
import Link from 'next/link';
import DynamicHead from '../../component/head/DynamicHead';

const success = () => {
  return (
    <DynamicHead title='Success' description='success'>
      <div className='success-msg'>
        <div className='success-warpper'>
          <div className='success-icon'>
            <Thankyou />
          </div>
          <div className='success-header-text'>
            <p>Thank You!</p>
          </div>
          <div className='success-header-body'>
            <p>The form was submitted successfully.</p>
          </div>
          <div className='success-btn'>
            <Link href='/' className='btn secondary-btn'>
              BACK TO HOME
            </Link>
          </div>
        </div>
      </div>
    </DynamicHead>
  );
};

export default success;
