import { images } from "../constants";

const SubHeading = ({ title }) => (
  <div className="mb-4">
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} className="w-11 md:w-20" alt="spoon" />
  </div>
);

export default SubHeading;
