import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa";

const Apartment = ({ apartment }) => {
  const { estate_title, price, status, area, location, estate_image } =
    apartment;
  return (
    <div className="shadow-xl relative flex flex-col">
      <div>
        <img src={estate_image} alt="" />
      </div>
      <div className="p-6 flex-grow">
        <h2 className="text-lg font-bold text-[#636363]">{estate_title}</h2>
        <div className="flex justify-between mt-4">
          <span className="text-[#00aeff] text-xl font-light">{price}</span>
          <span className="flex items-center gap-6 text-[#636363]">
            <span className="flex items-center gap-1">
              <FaLocationDot /> {location}
            </span>
            <span className="flex items-center gap-1">
              <FaChartArea /> {area}
            </span>
          </span>
        </div>
        <span className="text-white absolute top-4 right-4 bg-[#77c720] px-4 py-1">
          {status}
        </span>
      </div>
      <div className="p-4 w-full">
        <button className="btn w-full rounded-none text-lg font-semibold btn-outline">
          View Property
        </button>
      </div>
    </div>
  );
};

export default Apartment;

Apartment.propTypes = {
  apartment: PropTypes.object,
};
