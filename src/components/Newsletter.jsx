import React from 'react'
import SubHeading from './SubHeading'
import { images } from '../constants'

const Newsletter = () => {
  return (
    <div className="py-8 px-0 lg:px-16 lg:border lg:border-cgolden bg-cblack flex flex-col justify-center items-center w-full h-full">
      <div className="text-center">
        <div className="mb-4">
          <p className="p__cormorant">Newsletter</p>
          <img src={images.spoon} className="w-11 mx-auto" alt="spoon" />
        </div>
        <h1 className="headtext__cormorant text-3xl mb-4">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center mt-12 w-full">
        <input type="email" placeholder="Enter your email address" className='w-[300px] lg:w-[620px] border border-cgolden rounded-md text-base font-cormorant text-cwhite bg-cblack mb-8 lg:mr-8 lg:mb-0 py-3 px-4' />
        <button type="button" className="custom__button !mb-0 !w-max">Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter