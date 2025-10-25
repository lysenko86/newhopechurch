import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import { useMediaQuery } from "react-responsive";

import { QUERY_WIDTHS } from "@utils/index";
import { dataVideosPage } from "@data/index";
import { useLang } from "@hooks/index";

export const VideosPage = () => {
  const isMobile = useMediaQuery({ query: QUERY_WIDTHS.md });
  const lang = useLang();

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 text-black-100">
      <h2 className="text-450 md:text-500 font-bold">
        {dataVideosPage[lang].content[0]}
      </h2>
      <div className="mt-12 flex flex-wrap justify-around gap-10">
        {dataVideosPage[lang].videos.map(
          ({ videoId, title, author, date, link }) => (
            <div
              key={videoId}
              className="flex flex-col items-center max-w-[500px]"
            >
              <YouTube
                videoId={videoId}
                opts={{
                  width: !isMobile ? "500" : "300",
                  height: !isMobile ? "280" : "168",
                }}
              />
              <div className="w-full pt-4 md:pt-8">
                <Link
                  to={link}
                  target="_blank"
                  className="text-200 md:text-400 font-semibold hover:text-primary-100"
                >
                  {title}
                </Link>
              </div>
              <div className="w-full text-100 md:text-200 text-black-54">
                {author} | {date}
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};
