import PropTypes from "prop-types";
import Apartment from "../Apartment/Apartment";

const Apartments = ({ estates }) => {
  // console.log(estates);
  return (
    <div  className="my-20 lg:my-32 max-w-screen-xl mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-2">Our Deals</h2>
        <p className="w-11/12 lg:w-1/2 text-center">
          We offer more comfortable and privileges in our deals.Here you can get premium, luxurious as well as affordable package with your comfort. 
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-6 mt-12 lg:mt-20">
          {estates.map((apartment) => (
            <Apartment key={apartment.id} apartment={apartment}></Apartment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apartments;

Apartments.propTypes = {
  estates: PropTypes.array,
};
