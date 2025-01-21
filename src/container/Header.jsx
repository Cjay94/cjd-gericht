import { images } from "../constants";
import { SubHeading } from "../components"

const Header = () => (
  <section id="home" className="bg-cblack py-16 px-8 md:p-16 lg:px-20 flex flex-col lg:flex-row justify-between items-center min-h-screen">
    <div className="flex flex-col flex-1 justify-center items-start w-full">
      <SubHeading title="Chase the new flavour" />
      <h1 className="font-cormorant text-cgolden font-bold tracking-wider capitalize text-6xl md:text-[6rem] lg:text-[4rem] xl:text-8xl leading-[85px] md:leading-none xl:leading-tight">
        The Key To Fine Dining
      </h1>
      <p className="p__opensans my-8 mx-0 ">
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
      </p>
      <button className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="flex flex-1 justify-center items-center w-full lg:ml-8">
      <img src={images.welcome} alt="header" className="w-4/5" />
    </div>
  </section>
);

export default Header;
