import { Link } from "react-router-dom";

export const NotFoundPage = () => (
  <div className="pt-30 md:pt-40 px-4 flex flex-col items-center">
    <h1 className="text-[128px]/[148px] md:text-[196px]/[196px] text-primary-100 font-bold">
      404
    </h1>
    <div className="pt-2 font-bold text-black-100">Page not found</div>
    <div className="max-w-[403px] pt-2 text-center">
      Sorry, the page you are looking for does not exist or may have been moved.
    </div>
    <Link
      to="/"
      className="mt-6 rounded-lg flex justify-center items-center hover:opacity-80 transition-opacity duration-300 gap-x-2 bg-primary-100 text-white-100 h-14 px-8"
    >
      Back to Home page
    </Link>
  </div>
);
