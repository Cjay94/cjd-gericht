import React from 'react';
import { MenuItem } from '../components';
import { data, images } from '../constants';



const SpecialMenu = () => (
  <section id='menu' className='flex flex-col justify-center items-center bg-cblack py-16 px-8 md:p-16 lg:px-24'>

    <div className="mb-8 text-center">
      <p className="p__cormorant">Menu that fits your palatte</p>
      <img src={images.spoon} className="w-11 md:w-20 mb-4 mx-auto" alt="spoon" />
      <h1 className="headtext__cormorant text-5xl">
        Today&apos;s Special
      </h1>
    </div>

    <div className="w-full my-8 mx-0 flex flex-col lg:flex-row justify-center items-center lg:items-start">

      <div className="flex flex-1 w-full flex-col justify-center items-center">
        <p className="font-cormorant font-semibold text-white tracking-wider text-4xl md:text-5xl">
          Wine & Beer
        </p>
        <div className="flex flex-col mt-8 mx-0 w-full">
          {data.wines.map((wine, idx) => (
            <MenuItem
              key={idx}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="w-full md:w-[410px] lg:w-[360px] my-12 mx-0 md:-mt-8 lg:my-0 lg:mx-8">
        <img src={images.menu} alt="menu image" className='w-full xl:w-[360px] h-auto xl:h-[560px]' />
      </div>

      <div className="flex flex-1 w-full flex-col justify-center items-center">
        <p className="font-cormorant font-semibold text-white tracking-wider text-4xl md:text-5xl">
          Cocktails
        </p>
        <div className="flex flex-col mt-8 mx-0 w-full">
          {data.cocktails.map((cocktail, idx) => (
            <MenuItem
              key={idx}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <button className='custom__button'>View More</button>
  </section>
);

export default SpecialMenu;
