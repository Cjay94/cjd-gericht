import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../constants'
import { FooterOverlay, Newsletter } from '../components';

const Footer = () => {
  return (
    <footer className="bg-black relative w-full z-10 flex flex-col justify-start items-center py-16 px-8 md:p-16 lg:px-24 lg:pt-0" id='login'>
      <FooterOverlay />
      <Newsletter />

      <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start lg:mt-20 lg:px-8">

        <div className="flex-1 my-8 mx-0 lg:m-4 text-center">
          <h1 className='font-cormorant text-white font-normal tracking-wider capitalize mb-4 text-[2rem] leading-[40px]'>
            Contact Us
          </h1>
          <p className="p__opensans mb-4">53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans !text-cgolden mb-4">+1 212-344-1230</p>
          <p className="p__opensans !text-cgolden">+1 212-555-1230</p>
        </div>

        <div className="flex-1 my-8 mx-0 lg:m-4 text-center">
          <img src={images.gericht} alt="footer_logo" className='w-52 mb-3 mx-auto' />
          <p className="p__opensans">
            &quot;The best way to find yourself is to lose yourself in the service of others.&quot;
          </p>
          <img src={images.spoon} alt="spoon" className='mt-4 mx-auto w-12' />
          <div className="flex justify-center items-center gap-5 mt-6">
            <FiFacebook className='text-cwhite text-[24px] cursor-pointer hover:text-cgolden' />
            <FiTwitter className='text-cwhite text-[24px] cursor-pointer hover:text-cgolden' />
            <FiInstagram className='text-cwhite text-[24px] cursor-pointer hover:text-cgolden' />
          </div>
        </div>

        <div className="flex-1 my-8 mx-0 lg:m-4 text-center">
          <h1 className='font-cormorant text-white font-normal tracking-wider capitalize mb-4 text-[2rem] leading-[40px]'>
            Working Hours
          </h1>
          <p className="p__opensans !text-cgolden mb-4">Monday-Friday:</p>
          <p className="p__opensans">08:00 am - 12:00 am</p>
          <br />
          <p className="p__opensans !text-cgolden mb-4">Saturday-Sunday:</p>
          <p className="p__opensans">07:00 am - 11:00 pm</p>
        </div>
      </div>
      <div className="mt-6 lg:mt-12">
        <p className="p__opensans">&copy; {(new Date().getFullYear())} Gericht | {`</CJD>`}. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer