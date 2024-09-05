import { Herocard } from '../../component/card/herocard/Herocard';
import Img1 from '../../asset/image/svg/Contactimg';

import { ListCard } from '../../component/card/listcard/ListCard';

import { ContactCardData } from '../../userdata/UserData';
import { ContactForm } from '../../component/contactForm/ContactForm';
import DynamicHead from '../../component/head/DynamicHead';

const Contact = () => {
  return (
    <>
      <DynamicHead
        title='Contact'
        description='We are just a click away, feel free to drop your questions. Our team will get in touch with you as soon as possible!'
      >
        <section className='hero_block main_section'>
          <Herocard
            addClass='mv-container'
            image={<Img1 />}
            heading1='Drop your questions!'
            content='We are just a click away, feel free to drop your questions. Our team will get in touch with you as soon as possible!'
          />
        </section>
        <section className=' '>
          <div className='form-list-card single_background_image'>
            <ListCard
              addClass='contact_block'
              heading1='Get '
              heading2='in touch'
              iconClick
              userdata={ContactCardData}
              parentClass='contact_background_images'
            >
              <ContactForm />
            </ListCard>
          </div>
        </section>
        <section className='map-container main_section'>
          <iframe src='https://maps.google.com/maps?width=1795&amp;height=515&amp;hl=en&amp;q=Plot%20No.73,%202nd%20Cross%20St,%20Aziz%20Nagar,%20Reddiarpalayam,%20Puducherry,%20605010%20Pondicherry+(Mediwave%20Digital%20Private%20Limited)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed' />
        </section>
      </DynamicHead>
    </>
  );
};

export default Contact;
