import PropTypes from "prop-types";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Agent = ({ agent }) => {
  const {
    agent_name,
    agent_img,
    phone,
    email,
    agent_rating,
    office,
    fax,
    location,
  } = agent;
  return (
    <div className="flex flex-col  md:flex-row gap-12 lg:w-3/4 bg-white p-6  mx-auto">
      <div className="w-full  md:w-1/3 h-[300px] flex-grow">
        <img className="w-full h-full" src={agent_img} alt="" />
      </div>
      <div className="md:w-1/2 lg:w-3/5">
        <div className="flex items-center justify-between gap-6 mb-2">
          <div className="text-2xl">{agent_name}</div>
          <div className="flex items-center justify-center gap-1 ">
            <span>{agent_rating} </span>
            <span className=" mb-1 text-yellow-400">
              <FaStar />
            </span>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <FaLocationDot />
          <span className="text-gray-500">{location}</span>
        </div>
        <div className="my-8">
          <div className="flex justify-between">
            <span className="font-semibold">Office</span>
            <span className="font-light">{office}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between">
            <span className="font-semibold">Mobile</span>
            <span className="font-light">{phone}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between">
            <span className="font-semibold">Email</span>
            <span className="font-light">{email}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between">
            <span className="font-semibold">Fax</span>
            <span className="font-light">{fax}</span>
          </div>
        </div>
        <div className="flex  justify-between">
          <div>
            <span className="text-lg font-light">Connect With</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">
              <FaFacebook className="text-[#1877F2]" />
            </span>
            <span className="text-2xl">
              <FaTwitter className="text-[#1DA1F2]" />
            </span>
            <span className="text-2xl">
              <FaInstagram className="text-[#833AB4]" />
            </span>
            <span className="text-2xl">
              <FaGithub />
            </span>
            <span className="text-2xl">
              <FaLinkedin className="text-[#0077B5]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agent;

Agent.propTypes = {
  agent: PropTypes.object,
};
