import { NavLink } from "react-router-dom";

type Props = {
  location: string;
  locationTitle: string;
};

export const NavItem = (props: Props) => {
  return (
    <li className="mb-1 ml-2 border rounded-xl bg-slate-100">
      <NavLink
        to={props.location}
        className={`flex mx-auto items-center hover:bg-gray-200 dark:hover:bg-darkmode-400 p-2 rounded`}
      >
        <span className={`ml-2`}>{props.locationTitle}</span>
      </NavLink>
    </li>
  );
};
