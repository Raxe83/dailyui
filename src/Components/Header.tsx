import { NavItem } from "../Navigation/NavItem";

const Header = () => {
  return (
    <div className="bg-gray-50 fixed w-full z-50 text-black shadow-lg grid grid-cols-3">
      <div className="grid-start-1 grid-end-2 my-auto">
        <p className="font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-2xl ml-32 w-48 text-transparent bg-clip-text cursor-pointer">
          Rayden|Studio
        </p>
      </div>
      <div className="grid-start-2 grid-end-2"></div>
      <nav className="grid-start-3 grid-end-4  flex items-center justify-center">
        <ul className="flex-row flex py-2 px-8">
          <NavItem location={"Home"} locationTitle={"Home"} />
          <NavItem location={"About"} locationTitle={"About"} />
          <NavItem location={"Service"} locationTitle={"Service"} />
          <NavItem location={"Reviews"} locationTitle={"Reviews"} />
          <NavItem location={"contact"} locationTitle={"Contact"} />
        </ul>
      </nav>
      <div className="grid-start-3 grid-end-4 flex items-center"></div>
    </div>
  );
};

export default Header;
