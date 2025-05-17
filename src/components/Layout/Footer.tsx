import { Link } from "react-router-dom";

export const Footer = () => (
  <div className="h-20 px-4 md:px-8 flex justify-between">
    <div className="flex items-center">
      <ul>
        <li>
          <Link
            to="/link1"
            className="h-12 px-6 flex items-center gap-x-3 font-bold text-black-100 *:text-black-54 hover:underline"
          >
            Some link 1
          </Link>
        </li>
        <li>
          <Link
            to="/link2"
            className="h-12 px-6 flex items-center gap-x-3 font-bold text-black-100 *:text-black-54 hover:underline"
          >
            Some link 2
          </Link>
        </li>
        <li>
          <Link
            to="/link25"
            className="h-12 px-6 flex items-center gap-x-3 font-bold text-black-100 *:text-black-54 hover:underline"
          >
            Some link 25
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link
            to="/link3"
            className="h-12 px-6 flex items-center gap-x-3 font-bold text-black-100 *:text-black-54 hover:underline"
          >
            Some link 3
          </Link>
        </li>
        <li>
          <Link
            to="/link4"
            className="h-12 px-6 flex items-center gap-x-3 font-bold text-black-100 *:text-black-54 hover:underline"
          >
            Some link 4
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link
            to="/link5"
            className="h-12 px-6 flex items-center gap-x-3 font-bold text-black-100 *:text-black-54 hover:underline"
          >
            Some link 5
          </Link>
        </li>
      </ul>
    </div>
  </div>
);
