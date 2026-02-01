import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from 'react-tooltip'
import { AuthContext } from "../Firebase/AuthProvider";
import { toast } from "react-toastify";
import ThemeToggle from "./ToggleTheme";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {

  const { user, logOut } = useContext(AuthContext)


  const navItemClass = ({ isActive }) =>
    isActive
      ? "text-green-600 font-semibold border-b-2 border-green-600"
      : "hover:text-green-600 transition";

  const links = (
    <>
      <NavLink to="/" className={navItemClass}>Home</NavLink>
      <NavLink to="/campaigns" className={navItemClass}>All Campaign</NavLink>

      {
        user && <>
          <NavLink to="/addCampaign" className={navItemClass}>Add Campaign</NavLink>
          <NavLink to="/myCampaign" className={navItemClass}>My Campaign</NavLink>
          <NavLink to="/myDonations" className={navItemClass}>My Donations</NavLink>
        </>
      }
    </>
  );


  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.info('Sign-out successful.')
      }).catch((error) => {
        // An error happened.
        toast.error(error.message)
      });
  }

  return (
    <header className="sticky top-0 z-50 bg-base-100 shadow-md border-green-200 border-b rounded-b-xl py-2">
      <div className="navbar px-4">

        {/* Left: Logo */}
        <div className="navbar-start">
          <div className="dropdown" data-tooltip-id="theme-tooltipLight"
            data-tooltip-content="Menu">
            <Tooltip id="theme-tooltipLight" place="bottom" />

            <label tabIndex={0} className="btn text-red-600 btn-ghost pr-2 pl-0 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>

            {/* Mobile Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-36 space-y-2 dark:bg-black dark:text-white"
            >
              {links}
            </ul>
          </div>

          <Link
            to="/"
            className="text-xl md:text-2xl font-bold tracking-wide text-green-600"
          >
            Crowd<span className="text-red-600 ">Cube<Typewriter
              words={['']}
              loop={0} // 0 = infinite
              cursor
              cursorStyle="..."
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            /></span>
          </Link>
        </div>

        {/* Center: Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 text-base">
            {links}
          </ul>
        </div>

        {/* Right: Auth Buttons */}
        <div className="navbar-end gap-2 ">

          {/* dark to light */}

          <ThemeToggle />




          {
            user ? <div><img
              data-tooltip-id="user-tooltip"
              data-tooltip-content={user.displayName}
              className="md:w-10 md:h-10 h-7 w-7 rounded-full cursor-pointer"
              src={user.photoURL}
              alt={user.displayName}
            />

              <Tooltip id="user-tooltip" place="bottom" />
            </div> :
              <Link
                to="/login"
                className="btn btn-xs md:btn-sm lg:btn-md text-green-600  btn-outline"
              >
                Login
              </Link>
          }
          {
            user ? <button
              className="btn btn-xs md:btn-sm lg:btn-md text-white hover:bg-green-500 bg-green-600" onClick={handleLogout}
            >
              Log out
            </button> :
              <Link
                to="/register"
                className="btn btn-xs md:btn-sm lg:btn-md text-white hover:bg-green-500 bg-green-600"
              >
                Register
              </Link>
          }

        </div>

      </div>
    </header>
  );
};

export default Header;
