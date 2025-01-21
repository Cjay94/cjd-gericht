import { SubHeading } from "../components"
import { images } from "../constants"

const FindUs = () => {
  return (
    <div className="app__bg flex flex-col lg:flex-row justify-between items-center min-h-screen py-16 px-8 md:p-16 lg:px-24" id="contact">
      <div className="flex flex-1 w-full justify-center items-start flex-col">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant text-5xl mb-12">Find Us</h1>
        <div className="">
          <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, CW9 75G</p>
          <p className="p__cormorant !text-cgolden my-8 mx-0">Opening Hours</p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button className="custom__button !mt-8">Visit Us</button>
      </div>

      <div className="flex flex-1 justify-center items-center w-full mt-10 lg:ml-8">
        <img src={images.findus} alt="find us" className="w-full xl:w-4/5" />
      </div>
    </div>
  )
}

export default FindUs