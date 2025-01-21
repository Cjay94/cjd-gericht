import { images } from '../constants';
import { SubHeading } from '../components';



const Chef = () => (
  <div className="app__bg flex flex-col lg:flex-row justify-between items-center min-h-screen py-16 px-8 md:p-16 lg:px-24">
    <div className="flex flex-1 w-full justify-start items-center mb-20 mx-8 xl:m-0">
      <img src={images.chef} alt="chef" className='w-full xl:w-4/5' />
    </div>

    <div className="flex flex-1 w-full justify-center items-start flex-col">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant text-6xl">
        What we believe in
      </h1>

      <div className="flex flex-col w-full mt-10">
        <div className="flex justify-start items-end">

          <p className='p__opensans'>
            <span>
              <img src={images.quote} alt="quote" className='w-12 h-10 mb-4' />
            </span>
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
          </p>
        </div>
      </div>

      <div className="w-full mt-12">
        <p className='font-cormorant font-normal tracking-wider text-cgolden capitalize text-4xl'>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" className='w-64 mt-12' />
      </div>
    </div>
  </div>
);

export default Chef;
