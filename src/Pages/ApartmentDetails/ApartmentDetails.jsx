import { useLoaderData, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaChartArea, FaHouseUser, FaCar, FaBath,FaCheck  } from "react-icons/fa";
import { IoPricetags, IoBedSharp } from "react-icons/io5";
import { TbProgressAlert } from "react-icons/tb";
const ApartmentDetails = () => {
  const estates = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const estate = estates.find((e) => e.id === intId);
  console.log(estate);
  const {
    estate_title,
    price,
    status,
    area,
    location,
    estate_image,
    apartment_id,
    bed,
    bath,
    description,
    facilities
  } = estate;
  return (
    <div className="bg-[#f8fafe] py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto ">
        <div className="col-span-2">
          <div className="flex justify-between">
            <div>
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold">{estate_title}</h2>
                <span className="bg-[#77c720] px-6  py-1 text-white rounded-3xl">
                  {status}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <FaLocationDot /> {location}
              </div>
            </div>
            <div>
              <h3 className="text-2xl text-[#00aeff] mb-1">{price}</h3>
              <span className="flex items-center gap-2 text-lg">
                <FaChartArea />
                {area}
              </span>
            </div>
          </div>
          <div className="my-10">
            <img src={estate_image} alt="" />
          </div>
          <div>
            <div className="bg-white px-8 py-12 border-b">
              <h2 className="text-3xl font-bold mb-10">Overview</h2>
              <div className="grid grid-cols-4 gap-6">
                <span className="flex items-center gap-3">
                  <span className=" p-4 shadow-md text-xl rounded-lg text-[#20c7b6]">
                    <IoPricetags />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-semibold text-lg">Apartment ID</span>
                    <span>{apartment_id}</span>
                  </span>
                </span>
                <span className="flex items-center gap-3">
                  <span className=" p-4 shadow-md text-xl rounded-lg text-[#20c7b6]">
                    <FaHouseUser />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-semibold text-lg">Type</span>
                    <span>Apartment</span>
                  </span>
                </span>
                <span className="flex items-center gap-3">
                  <span className=" p-4 shadow-md text-xl rounded-lg text-[#20c7b6]">
                    <FaCar />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-semibold text-lg">Parking</span>
                    <span>Yes</span>
                  </span>
                </span>
                <span className="flex items-center gap-3">
                  <span className=" p-4 shadow-md text-xl rounded-lg text-[#20c7b6]">
                    <IoBedSharp />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-semibold text-lg">Bedroom</span>
                    <span>{bed}</span>
                  </span>
                </span>
                <span className="flex items-center gap-3">
                  <span className=" p-4 shadow-md text-xl rounded-lg text-[#20c7b6]">
                    <FaBath />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-semibold text-lg">Bath</span>
                    <span>{bath}</span>
                  </span>
                </span>
                <span className="flex items-center gap-3">
                  <span className=" p-4 shadow-md text-xl rounded-lg text-[#20c7b6]">
                    <FaChartArea />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-semibold text-lg">Area</span>
                    <span>{area}</span>
                  </span>
                </span>
                <span className="flex items-center gap-3">
                  <span className=" p-4 shadow-md text-xl rounded-lg text-[#20c7b6]">
                    <TbProgressAlert />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-semibold text-lg">Status</span>
                    <span>{status}</span>
                  </span>
                </span>
              </div>
            </div>
            <div className="bg-white px-8 py-12 border-b ">
            <h2 className="text-3xl font-bold mb-10">Description</h2>
            <p>{description}</p>
            </div>
            <div className="bg-white px-8 py-12 ">
            <h2 className="text-3xl font-bold mb-10">Features & Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    facilities.map((facility,idx)=> <span className="flex items-center gap-2" key={idx}>
                        <span className="bg-[#77c720] text-white p-1 text-xs rounded-full"><FaCheck/></span>
                        <span className="text-lg">{facility}</span>
                    </span> )
                }
            </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default ApartmentDetails;
