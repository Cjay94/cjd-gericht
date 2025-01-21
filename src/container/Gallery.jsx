import { useRef } from 'react';
import { SubHeading } from '../components';
import { images } from '../constants';
import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from 'react-icons/bs';


const Gallery = () => {

  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef

    direction === 'left' ? current.scrollLeft -= 300 : current.scrollLeft += 300;
  }
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center bg-black py-16 pr-0 pl-8 md:pl-16 lg:pl-24">
      <div className="flex flex-col flex-1 justify-center items-start min-w-full lg:min-w-[500px] pr-8">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant text-5xl">Photo Gallery</h1>
        <p className='p__opensans mt-8 !text-cgrey'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button !mt-4 xl:!mt-8">View More</button>
      </div>

      <div className="flex flex-1 flex-row max-w-full my-20 mx-0 lg:m-0 lg:max-w-[50%] relative">
        <div className="flex flex-row w-max overflow-x-scroll hide-scrollbar" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04,].map((img, idx) => (
            <div className="relative min-w-60 h-80 lg:min-w-[300px] lg:h-[447px] mr-8 flex justify-center items-center" key={idx}>
              <img src={img} alt="gallery_image" className='w-full h-full object-cover opacity-100 transition duration-500 hover:opacity-35 cursor-pointer' />
              <BsInstagram className='absolute text-cwhite text-[2rem] opacity-100 transition-opacity duration-500 cursor-pointer' />
            </div>
          ))}
        </div>
        <div className="w-full flex justify-between items-center px-4 absolute bottom-[5%]">
          <BsArrowLeftShort className='text-cgolden text-[2rem] cursor-pointer bg-cblack rounded-md hover:text-cwhite' onClick={() => scroll('left')} />
          <BsArrowRightShort className='text-cgolden text-[2rem] cursor-pointer bg-cblack rounded-md hover:text-cwhite' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
}

export default Gallery