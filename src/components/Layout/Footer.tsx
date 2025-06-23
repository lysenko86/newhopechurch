import { Link } from "react-router-dom";

import { useLang } from "@hooks/index";
import {
  FacebookSvg,
  InstagramSvg,
  YoutubeSvg,
  TelegramSvg,
} from "@components/index";
import { dataFooter } from "@data/index";

export const Footer = () => {
  const lang = useLang();

  const links = [
    { href: "https://www.facebook.com/zorychristians", icon: <FacebookSvg /> },
    {
      href: "https://www.instagram.com/newhopechurch.zory/",
      icon: <InstagramSvg />,
    },
    {
      href: "https://www.youtube.com/@NewHopeChurch_Zory",
      icon: <YoutubeSvg />,
    },
    { href: "https://t.me/+mXpqN8f1IpZhNDli", icon: <TelegramSvg /> },
  ];

  return (
    <div className="h-20 flex flex-col md:flex-row justify-between items-center mt-10 md:mt-0 px-12 mb-5 md:mb-0 bg-white-100 text-100">
      <div>{dataFooter[lang].copy}</div>
      <ul className="flex items-center gap-x-10">
        {links.map(({ href, icon }) => (
          <li key={href} className="hover:-mt-2 duration-300">
            <Link to={href} target="_blank">
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
