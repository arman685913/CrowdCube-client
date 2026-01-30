import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProveder";

const Footer = () => {

  const { user } = useContext(AuthContext)

  return (
    <footer className="bg-neutral text-neutral-content mt-16">
      <div className="px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand Info */}
        <div>
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold tracking-wide text-green-600"
          >
            Crowd<span className="text-red-600">Cube</span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed">
            CrowdCube is a crowdfunding platform where people can raise funds
            for startups, creative ideas, and personal causes with transparency
            and trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/campaigns" className="hover:text-primary">All Campaign</Link></li>

              {
                user && <>
                  <li><Link to="/addCampaign" className="hover:text-primary">Add Campaign</Link></li>
                  <li><Link to="/myCampaign" className="hover:text-primary">My Campaign</Link></li>
                </>
              }
            </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li className="hover:text-primary cursor-pointer">Help Center</li>
            <li className="hover:text-primary cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-primary cursor-pointer">Privacy Policy</li>
            <li className="hover:text-primary cursor-pointer">Contact Support</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm">Email: support@crowdcube.com</p>
          <p className="text-sm mt-1">Phone: +880 1234 567890</p>

          <div className="flex gap-4 mt-4 text-lg">
            <a className="hover:text-primary" href="https://facebook.com"><FaFacebookF /></a>
            <a className="hover:text-primary" href="https://twitter.com"><FaTwitter /></a>
            <a className="hover:text-primary" href="https://www.linkedin.com/"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-base-300 text-base-content text-center py-4 text-sm">
        © {new Date().getFullYear()} CrowdCube — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
