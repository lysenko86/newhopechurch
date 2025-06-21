import { Link } from "react-router-dom";

import {
  FacebookSvg,
  InstagramSvg,
  YoutubeSvg,
  TelegramSvg,
} from "@components/index";

export const Footer = () => {
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
    <div className="h-20 flex flex-col md:flex-row justify-between items-center mt-10 md:mt-0 px-4 bg-white-100 text-100">
      <div>New Hope Church Żory 2025</div>
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
