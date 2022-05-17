import { FiHome, FiSettings, FiBook } from "react-icons/fi";
import { MdOutlineTableChart, MdHistory } from "react-icons/md";
import { RiHeartPulseLine, RiAppsLine } from "react-icons/ri";
import { AiOutlinePieChart } from "react-icons/ai";
import { FC } from "react";
import { GetAsideButtonIconProps } from "../../../types";

const GetAsideButtonIcon: FC<GetAsideButtonIconProps> = ({ name }) => {
  switch (name) {
    case "Home":
      return <FiHome />;
    case "Workspace":
      return <MdOutlineTableChart />;
    case "MARPOL":
      return <FiBook />;
    case "OH&S":
      return <RiHeartPulseLine />;
    case "Insights":
      return <AiOutlinePieChart />;
    case "History":
      return <MdHistory />;
    case "Apps":
      return <RiAppsLine />;
    default:
      return <FiSettings />;
  }
};

export default GetAsideButtonIcon;
