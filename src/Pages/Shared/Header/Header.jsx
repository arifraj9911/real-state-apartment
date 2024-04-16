import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { CgProfile } from "react-icons/cg";
import coolBackground from "../../../assets/Images/cool7.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(user);
  const menu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/update">Update_Profile</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div
      style={{
        backgroundImage: `url(${coolBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="navbar  sticky top-0  z-10 pt-4 pb-3 backdrop-filter backdrop-blur-lg bg-opacity-100 "
    >
      <div className="navbar-start">
        <div className="dropdown z-10">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden p-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[16px] font-semibold"
          >
            {menu}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl pr-0 gap-0 pl-1 lg:pl-4 lg:text-3xl font-bold">
          City<span className="text-[#77c720]">Residence</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[16px] font-semibold">
          {menu}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <span className="flex items-center gap-3 lg:gap-4">
            {" "}
            {user?.photoURL ? (
              <div className="avatar tooltip" data-tip={user?.displayName}>
                <div className="w-8 lg:w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} />
                </div>
              </div>
            ) : (
              <div className="tooltip" data-tip={user?.displayName}>
                <CgProfile className="text-4xl" />
              </div>
            )}{" "}
            <button
              onClick={() => {
                logOut();
                navigate("/login");
              }}
              className="bg-[#0075FF] hover:bg-[#2264b0] text-white py-2 lg:py-3 px-4 lg:px-6 rounded-md text-[16px] font-bold"
            >
              Sign Out
            </button>
          </span>
        ) : (
          <Link
            className="bg-[#0075FF] hover:bg-[#2264b0] text-white py-2 lg:py-3 px-4 lg:px-6 rounded-md text-[16px] font-bold"
            to="/login"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
