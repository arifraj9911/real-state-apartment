/* eslint-disable react/prop-types */
import { useLoaderData, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaChartArea,
  FaHouseUser,
  FaCar,
  FaBath,
  FaCheck,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { IoPricetags, IoBedSharp } from "react-icons/io5";
import { TbProgressAlert } from "react-icons/tb";
import GoogleMapReact from "google-map-react";
import { googleApiKey } from "../../GoogleApiKey/GoogleApiKey";
import saleBanner from "../../assets/Images/sale_banner.jpg";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const ApartmentDetails = () => {
  const estates = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const estate = estates.find((e) => e.id === intId);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  //   console.log(estate);
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
    facilities,
    agent_name,
    agent_img,
    phone,
    email,
  } = estate;
  return (
    <div className="bg-[#f8fafe] py-16">
      <div className="max-w-screen-xl mx-auto ">
        <div className="flex justify-between w-2/3">
          <div>
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold">{estate_title}</h2>
              <span className="bg-[#77c720] px-6  py-1 text-white rounded-3xl">
                {status}
              </span>
            </div>
            <div className="flex items-center text-lg gap-2 mt-3">
              <FaLocationDot /> {location}
            </div>
          </div>
          <div>
            <h3 className="text-3xl text-[#00aeff] mb-1">{price}</h3>
            <span className="flex items-center gap-2  text-lg">
              <FaChartArea />
              {area}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6 my-10 ">
          <div className="col-span-2">
            <div className="">
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
                      <span className="font-semibold text-lg">
                        Apartment ID
                      </span>
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
              <div className="bg-white px-8 py-12 border-b ">
                <h2 className="text-3xl font-bold mb-10">
                  Features & Amenities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {facilities.map((facility, idx) => (
                    <span className="flex items-center gap-2" key={idx}>
                      <span className="bg-[#77c720] text-white p-1 text-xs rounded-full">
                        <FaCheck />
                      </span>
                      <span className="text-lg">{facility}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white px-8 py-12">
                <h2 className="text-3xl font-bold mb-10">Map Location</h2>
                <div style={{ height: "100vh", width: "100%" }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: googleApiKey }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                  >
                    <AnyReactComponent
                      lat={59.955413}
                      lng={30.337844}
                      text="My Marker"
                    />
                  </GoogleMapReact>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-8">
              <h2 className="text-2xl font-bold">Agent Information</h2>
              <hr className="my-10" />
              <div className="flex items-center gap-6">
                <div className="avatar">
                  <div className="w-20 rounded-full">
                    <img src={agent_img} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-semibold">{agent_name}</span>
                  <span className="text-sm font-light">
                    Owner of the property
                  </span>
                </div>
              </div>
              <div className="mt-12 flex flex-col gap-4">
                <div className="flex items-center gap-8">
                  <span className=" text-xl text-[#20c7b6]">
                    <FaLocationDot />
                  </span>
                  <span className="text-lg font-normal">{location}</span>
                </div>
                <div className="flex items-center gap-8">
                  <span className=" text-xl text-[#20c7b6]">
                    <FaPhoneAlt />
                  </span>
                  <span className="text-lg font-normal">{phone}</span>
                </div>
                <div className="flex items-center gap-8">
                  <span className=" text-xl text-[#20c7b6]">
                    <MdMarkEmailRead />
                  </span>
                  <span className="text-lg font-normal">{email}</span>
                </div>
              </div>
              <hr className="my-10" />
              <div>
                <h2 className="text-lg font-semibold">Message me</h2>
                <div className="flex flex-col gap-4 mt-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border border-x-gray-300 p-3 rounded-lg outline-none w-full  "
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="border border-x-gray-300 p-3 rounded-lg outline-none w-full"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="border border-x-gray-300 p-3 rounded-lg outline-none w-full"
                  />
                  <textarea
                    name=""
                    id=""
                    cols="20"
                    placeholder="Message"
                    className="border rounded-lg p-3 border-gray-300 outline-none"
                    rows="5"
                  ></textarea>
                </div>
                <div className="mt-8">
                  <button className="btn w-full  btn-outline">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 mt-8">
              <h2 className="text-2xl font-bold">Special of the day</h2>
              <hr className="my-8" />
              <div className="mt-6">
                <img src={saleBanner} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;
