import { Link } from "react-router-dom";

import LogoImg from "@assets/images/logo.png";

export const Header = () => (
  <nav className="h-20 px-4 md:px-8 flex justify-between">
    <Link to="/" className="shrink-0">
      <img src={LogoImg} alt="Logo" width={200} className="relative -left-6" />
    </Link>
    <div className="flex items-center gap-x-4 md:gap-x-5">
      <ul>
        <li>
          <Link
            to="/"
            className="h-12 px-6 flex items-center gap-x-3 font-bold text-black-100 *:text-black-54 hover:underline"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="logout"
            className="h-12 px-6 flex items-center gap-x-3 font-bold text-red-100 hover:underline"
          >
            Principals
          </Link>
        </li>
        <li>
          <Link
            to="logout"
            className="h-12 px-6 flex items-center gap-x-3 font-bold text-red-100 hover:underline"
          >
            Contacts
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
