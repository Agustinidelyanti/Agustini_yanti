import { AiFillGithub } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";
import { IconType } from "react-icons/lib";

export interface homeTypes {
  resume: string;
  iconsLink: Array<{
    icon: IconType;
    iconName: string;
    directLink: string; 
    title: string;
    color: string;
  }>;
}

export const homeConfig: homeTypes = {
  resume:
    "https://drive.google.com/file/d/1HhfsMcf29xi7sBbmZb3zSY2Ixph1gqaK/view?usp=sharing",

  iconsLink: [
    {
      icon: FiFigma,
      iconName: "FIgma",
      title: "@Agustini",
      color: "text-orange-600",
      directLink: "https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1235922763035669382",
    },
    {
      icon: AiFillGithub,
      iconName: "GitHub",
      title: "Agustinidelyanti",
      color: "text-white",
      directLink: "https://github.com/Agustinidelyanti",
    },
  ],
};
