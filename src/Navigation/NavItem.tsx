import { NavLink } from "react-router-dom";

type Props = {
  location: string;
  locationTitle: string;
};

export const NavItem = (props: Props) => {
  return (
    <li className="mb-1 ml-2 rounded-xl">
      <NavLink
        to={props.location}
        className={`flex mx-auto text-gray-600 items-center p-2 rounded hover:bg-gray-500/20 hover:text-gray-900`}
      >
        <span className={`px-1 font-semibold`}>{props.locationTitle}</span>
      </NavLink>
    </li>
  );
};
