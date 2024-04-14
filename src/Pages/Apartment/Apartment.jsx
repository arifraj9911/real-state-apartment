import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Apartment = ({ apartment }) => {
  const { estate_title, price, status, area, id, location, estate_image } =
    apartment;
  const navigate = useNavigate();
  return (
    <div className="shadow-xl relative flex flex-col">
      <div className="h-1/2 w-full">
        <img className="h-full w-full" src={estate_image} alt="" />
      </div>
      <div className="p-6 flex-grow">
        <span className="text-[#00aeff]  text-2xl font-light">{price}</span>
        <h2 className="text-xl  font-semibold mt-2 text-[#1a1a1a]">
          {estate_title}
        </h2>
        <div className="flex flex-col gap-2 mt-4">
          <span className="flex items-center justify-between gap-4 text-[#919191]">
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
        <button
          onClick={() => navigate(`/apartment/${id}`)}
          className="bg-[#0075FF] hover:bg-[#2264b0] text-white py-3 px-6 w-full rounded-md text-lg font-semibold "
        >
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
