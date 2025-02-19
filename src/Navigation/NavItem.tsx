import { Link as ScrollLink } from "react-scroll";

type Props = {
  location: string;
  locationTitle: string;
};

export const NavItem = (props: Props) => {
  return (
    <li className="mb-1 ml-2 rounded-xl cursor-pointer">
      <ScrollLink
        to={props.location}
        smooth={true}
        duration={500}
        className={`flex mx-auto text-gray-600 items-center p-2 rounded hover:bg-gray-500/20 hover:text-gray-900`}
      >
        <span className={`px-1 font-semibold`}>{props.locationTitle}</span>
      </ScrollLink>
    </li>
  );
};
