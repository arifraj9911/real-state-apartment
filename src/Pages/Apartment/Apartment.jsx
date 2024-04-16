import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { FaBath, FaChartArea } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoBedSharp } from "react-icons/io5";

const Apartment = ({ apartment }) => {
  const {
    estate_title,
    price,
    status,
    area,
    id,
    location,
    estate_image,
    bath,
    bed,
    segment_name,
  } = apartment;
  const navigate = useNavigate();
  return (
    <div data-aos="zoom-in" className="shadow-xl  relative flex flex-col">
      <div className="h-[300px] w-full">
        <img className="h-full w-full" src={estate_image} alt="" />
      </div>
      <div className="p-5 flex-grow">
        <div>
          <div className="flex justify-between">
            <span className="text-[#77c720]  text-2xl font-bold">{price}</span>
            <span className="flex items-center gap-1">
              <FaLocationDot /> {location}
            </span>
          </div>
          <h2 className="text-[22px] lg:text-2xl  font-semibold mt-3 text-[#1a1a1a]">
            {estate_title}
          </h2>
        </div>
        <hr className="my-6 " />
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex justify-between gap-4 items-center text-[#919191]">
            <span className="flex items-center gap-2">
              <FaChartArea /> {area}
            </span>
            <span className="flex items-center gap-2">
              <FaBath /> {bath} Bath
            </span>
            <span className="flex items-center gap-2">
              <IoBedSharp /> {bed} Bed
            </span>
          </div>
        </div>
        <span className="text-white absolute top-4 right-4 bg-[#77c720] px-4 py-1">
          {status}
        </span>
        <span className="text-white absolute top-4 left-4 bg-[#DC143C] px-4 py-1">
          {segment_name}
        </span>
      </div>
      <div className="p-4 w-full">
        <button
          onClick={() => navigate(`/apartment/${id}`)}
          className="bg-[#0075FF] hover:bg-[#2264b0] text-white py-3 px-6 w-full  text-lg font-semibold "
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
