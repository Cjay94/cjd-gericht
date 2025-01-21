import React from 'react';
import { SubHeading } from '../components';
import { data, images } from '../constants';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div
    className="min-w-full md:min-w-60 xl:min-w-96 my-4 mx-0 md:m-4 
  flex flex-1 justify-start items-start"
  >
    <img src={imgUrl} alt="awards" className="w-12 h-12" />
    <div className="lg:flex lg:flex-col lg:ml-4">
      <p className="p__cormorant text-cgolden">{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div id='awards' className="app__bg flex flex-col lg:flex-row justify-between items-center min-h-screen py-16 px-8 md:p-16 lg:px-24">
    <div className="flex flex-1 w-full justify-center items-start flex-col">
      <SubHeading title="Awards & recognition" />
      <h1 className='headtext__cormorant text-5xl'>Our Laurels</h1>

      <div className="flex justify-start items-center flex-wrap my-12">
        {data.awards.map((award, idx) =>
          <AwardCard award={award} key={idx} />
        )}
      </div>
    </div>

    <div className="flex flex-1 justify-center items-center w-full lg:ml-8">
      <img src={images.laurels} alt="laurels_img" />
    </div>
  </div>
);

export default Laurels;
