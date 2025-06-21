import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";

import { QUERY_WIDTHS } from "@utils/index";
import { BurgerSvg, CrossSvg } from "@components/index";
import LogoImg from "@assets/images/logo.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/principals", label: "Principals" },
  { href: "/contacts", label: "Contacts" },
];

export const Header = () => {
  const isMobile = useMediaQuery({ query: QUERY_WIDTHS.md });

  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>
      <nav className="fixed w-full h-28 flex justify-between items-center bg-white-100">
        <Link to="/" className="shrink-0">
          <img src={LogoImg} alt="Logo" width={200} />
        </Link>
        {isMobile ? (
          <button
            role="button"
            className="p-4 hover:bg-gray-500 duration-300"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <BurgerSvg /> : <CrossSvg />}
          </button>
        ) : (
          <ul className="flex items-center gap-x-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  to={href}
                  className="flex items-center h-12 px-6 text-black-100 hover:text-primary-100"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
      {isMobile && (
        <div
          className={clsx(
            "fixed top-28 w-full overflow-hidden bg-gray-500 duration-300",
            isCollapsed ? "h-0" : "h-[calc(100dvh_-_112px)]",
          )}
        >
          <ul className="flex flex-col gap-y-4 p-10">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  to={href}
                  className="flex items-center h-12 px-6 text-black-100 hover:text-primary-100"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
