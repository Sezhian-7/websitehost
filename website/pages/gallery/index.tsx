import React from 'react';
import OpenCermony from './opencermony';
import CeleBration from './celebration';
import BirthDay from './birthday';
import DynamicHead from '../../component/head/DynamicHead';
const Gallery = () => {
  return (
    <>
      <DynamicHead title='Celebration'>
        <section>
          <OpenCermony />
        </section>
        <section>
          <CeleBration />
        </section>
        <section>
          <BirthDay />
        </section>
      </DynamicHead>
    </>
  );
};
export default Gallery;
