import { Link, NavLink } from "react-router-dom";

const Header = () => {

  const navItemClass = ({ isActive }) =>
    isActive
      ? "text-green-600 font-semibold border-b-3 border-green-600"
      : "hover:text-green-600 transition";

  const links = (
    <>
      <NavLink to="/" className={navItemClass}>Home</NavLink>
      <NavLink to="/campaigns" className={navItemClass}>All Campaign</NavLink>
      <NavLink to="/addCampaign" className={navItemClass}>Add Campaign</NavLink>
      <NavLink to="/myCampaign" className={navItemClass}>My Campaign</NavLink>
      <NavLink to="/donation" className={navItemClass}>Donation</NavLink>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md ">
      <div className="navbar px-4">

        {/* Left: Logo */}
        <div className="navbar-start">
          <div className="dropdown">
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
              className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-36 space-y-2"
            >
              {links}
            </ul>
          </div>

          <Link
            to="/"
            className="text-xl md:text-2xl font-bold tracking-wide text-green-600"
          >
            Crowd<span className="text-red-600">Cube</span>
          </Link>
        </div>

        {/* Center: Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 text-base">
            {links}
          </ul>
        </div>

        {/* Right: Auth Buttons */}
        <div className="navbar-end gap-2">
          <Link
            to="/login"
            className="btn btn-sm md:btn-md btn-outline"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="btn btn-sm md:btn-md text-white hover:bg-green-500 bg-green-600"
          >
            Register
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
