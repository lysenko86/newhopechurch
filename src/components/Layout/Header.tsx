import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";

import { LangType } from "@interfaces/index";
import { useLang } from "@hooks/index";
import { QUERY_WIDTHS } from "@utils/index";
import { BurgerSvg, CrossSvg } from "@components/index";
import { dataHeader } from "@data/index";
import LogoImg from "@assets/images/logo.png";

const langs: LangType[] = ["EN", "UA", "PL"];

export const Header = () => {
  const isMobile = useMediaQuery({ query: QUERY_WIDTHS.lg });
  const lang = useLang();

  const links = [
    { href: "/", label: dataHeader[lang].menu[0] },
    { href: "/doctrine", label: dataHeader[lang].menu[1] },
    { href: "/services", label: dataHeader[lang].menu[2] },
    { href: "/videos", label: dataHeader[lang].menu[3] },
    { href: "/contacts", label: dataHeader[lang].menu[4] },
  ];

  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleChangeLang = (value: LangType) => {
    localStorage.setItem("lang", value);
    window.location.reload();
  };

  return (
    <>
      <nav className="fixed w-full h-28 flex justify-between items-center px-6 md:px-12 bg-white-100 text-black-100">
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
                  className="flex items-center h-12 px-6 hover:text-primary-100"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="flex gap-x-1">
              {langs.map((value, index) => (
                <Fragment key={value}>
                  <button
                    role="button"
                    className={clsx(
                      "px-1 pt-1 border hover:border-primary-100 hover:text-primary-100",
                      lang !== value
                        ? "border-white-100"
                        : "border-primary-100 text-primary-100",
                    )}
                    onClick={() => handleChangeLang(value)}
                  >
                    {value}
                  </button>
                  {index + 1 < langs.length && <div className="pt-1">|</div>}
                </Fragment>
              ))}
            </li>
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
          <ul
            className="flex flex-col gap-y-4 p-10"
            onClick={() => setIsCollapsed(true)}
          >
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  to={href}
                  className="flex items-center h-12 px-6 hover:text-primary-100"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="flex gap-x-1 pl-6">
              {langs.map((value, index) => (
                <Fragment key={value}>
                  <button
                    role="button"
                    className={clsx(
                      "px-1 pt-1 border hover:border-primary-100 hover:text-primary-100",
                      lang !== value
                        ? "border-gray-500"
                        : "border-primary-100 text-primary-100",
                    )}
                    onClick={() => handleChangeLang(value)}
                  >
                    {value}
                  </button>
                  {index + 1 < langs.length && <div className="pt-1">|</div>}
                </Fragment>
              ))}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
