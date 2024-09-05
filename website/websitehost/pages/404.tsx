import Img1 from '../../asset/image/svg/Heroimg1';
import { Herocard } from '../../component/card/herocard/Herocard';
import { Button } from '../../component/button/Button';
import Link from 'next/link';
import DynamicHead from '../../component/head/DynamicHead';

const NotFound = () => {
  return (
    <>
      <DynamicHead title='Error' description='its not you'>
        <section className='hero_block main_section'>
          <Herocard
            addClass='mv-container error_block'
            image={<Img1 />}
            heading1='Sorry...'
            content='its not you'
            subcontent='its us'
            btntextLink1='pages/index'
          />
          <div className='text-center mt-[40px]'>
            <Link href='/' className='btn secondary-btn'>
              BACK TO HOME
            </Link>
          </div>
        </section>
      </DynamicHead>
    </>
  );
};

export default NotFound;
