import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);
  const menu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/update">Update</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  sticky top-0 z-10  backdrop-filter backdrop-blur-lg bg-opacity-0 ">
      <div className="navbar-start">
        <div className="dropdown z-10">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">City Residence</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <span className="flex items-center gap-4">
            {" "}
            {user?.emailVerified ? (
              <div className="avatar tooltip" data-tip={user?.displayName}>
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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
              className="btn btn-outline"
            >
              Sign Out
            </button>
          </span>
        ) : (
          <Link className="btn btn-outline" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
