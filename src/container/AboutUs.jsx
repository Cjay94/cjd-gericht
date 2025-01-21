import React from 'react';
import { images } from '../constants';



const AboutUs = () => (
  <section id='about' className='app__bg relative py-16 px-8 md:p-16 lg:px-24 flex justify-center items-center'>
    <div className="absolute inset-0 flex justify-center items-center">
      <img src={images.G} alt="g-big" className='w-4/5 h-80 md:w-[391px] md:h-[415px] z-0' />
    </div>

    <div className="w-full z-20 flex-col lg:flex-row flex justify-center items-center">

      <div className="flex flex-col flex-1 justify-end items-end text-right gap-5">
        <h1 className="headtext__cormorant text-5xl">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='w-11 md:w-20' />
        <p className="p__opensans !text-cgrey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quis pharetra adipiscing ultrices vulputate posuere tristique.
          In sed odio nec aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom__button !mx-0">Know More</button>
      </div>

      <div className="flex justify-center items-center m-16 lg:my-8 lg:mx-16">
        <img src={images.knife} alt="knife" className='h-[450px] md:h-[640px] lg:h-[910px]' />
      </div>

      <div className="flex flex-col flex-1 justify-start items-start text-left gap-5">
        <h1 className="headtext__cormorant text-5xl">Our History</h1>
        <img src={images.spoon} alt="history_spoon" className='w-11 md:w-20' />
        <p className="p__opensans !text-cgrey">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <button type="button" className="custom__button !mx-0">Know More </button>
      </div>

    </div>




  </section>
);

export default AboutUs;
