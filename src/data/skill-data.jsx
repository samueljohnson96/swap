import {
  StarIcon,
  ArrowPathIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/solid";

import {GrInternetExplorer} from "react-icons/gr";
import {FiSettings} from "react-icons/fi";
import {FiCloud} from "react-icons/fi";


export const SkillData = [
  {
    color: "blue",
    skill: "Web Development",
    icon: GrInternetExplorer,
    description:
      "React/Vue + RTK/Recoil + Next/Nuxt + LAMP + Node/Django/Ruby on Rails + GAE + MySQL/MongoDB/ DataStore/DynamoDB"
  },
  {
    color: "red",
    skill: "Cloud Service",
    icon: FiCloud,
    description:
      "AWS | Azure | Google Blockchain",
  },
  {
    color: "teal",
    skill: "Machine Design",
    icon: FiSettings,
    description:
      "Mechatronics, Industry/Medical machines + Static/Dynamic stress simulation + Conduction/Convection/Radiation Computation",
  },
];

export default SkillData;
