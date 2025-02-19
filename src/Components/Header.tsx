import { useEffect, useState } from "react";
import { NavItem } from "../Navigation/NavItem";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPrivacy, setisPrivacy] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setisPrivacy(location.pathname === "/Privacy");
  }, [location.pathname]);

  return (
    <header className="bg-gray-50 fixed w-full z-50 text-black shadow-lg">
      <div className="max-w-7xl mx-auto lg:px-8">
        <div className="flex md:justify-between items-center py-4 md:pr-8 lg:pr-0">
          <div className="flex items-center">
            <Link to="/">
              <p className="font-bold bg-gradient-to-r ml-4 from-blue-400 to-purple-600 text-2xl w-48 text-transparent bg-clip-text cursor-pointer">
                Rayden|Studio
              </p>
            </Link>
          </div>
          {isPrivacy ? (
            <ul className="flex space-x-4">
              <li className="mb-1 ml-2 rounded-xl cursor-pointer">
                <Link
                  to={"/"}
                  className={`flex mx-auto text-gray-600 items-center p-2 rounded hover:bg-gray-500/20 hover:text-gray-900`}
                >
                  <span className={`px-1 font-semibold`}>Startseite</span>
                </Link>
              </li>
            </ul>
          ) : (
            <nav className="hidden md:flex">
              <ul className="flex space-x-4">
                <NavItem
                  location={"HeroSection"}
                  locationTitle={"Startseite"}
                />
                <NavItem location={"Vorteile"} locationTitle={"Vorteile"} />
                <NavItem location={"Service"} locationTitle={"Service"} />
                <NavItem location={"contact"} locationTitle={"Contact"} />
                <li className="mb-1 ml-2 rounded-xl cursor-pointer">
                  <Link
                    to={"/Privacy"}
                    className={`flex mx-auto text-gray-600 items-center p-2 rounded hover:bg-gray-500/20 hover:text-gray-900`}
                  >
                    <span className={`px-1 font-semibold`}>Datenschutz</span>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
          <div className="md:hidden flex items-center ml-auto mr-8">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-4 bg-gray-50">
            <ul className="space-y-2">
              <NavItem location={""} locationTitle={"Home"} />
              <NavItem location={"About"} locationTitle={"About"} />
              <NavItem location={"Service"} locationTitle={"Service"} />
              <NavItem location={"Reviews"} locationTitle={"Reviews"} />
              <NavItem location={"contact"} locationTitle={"Contact"} />
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
