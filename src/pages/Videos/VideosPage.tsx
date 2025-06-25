import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import { useMediaQuery } from "react-responsive";

import { QUERY_WIDTHS } from "@utils/index";
import { VideoModel } from "@interfaces/index";

const videos: VideoModel[] = [
  {
    videoId: "9VZZfl4pVoc",
    title: "Жертва Ісуса все змінює",
    author: "Олександр Лисенко",
    date: "06.04.2025",
    link: "https://youtu.be/9VZZfl4pVoc?si=WAPWpIDV6gxG28tv",
  },
  {
    videoId: "K7TuRWccsU8",
    title: "Ідеальна жертва",
    author: "Bartosz Szymczyk",
    date: "09.03.2025",
    link: "https://youtu.be/K7TuRWccsU8?si=VFe_AI2xDPHoD0Lb",
  },
  {
    videoId: "1uFkVcr8CHI",
    title: "Духовний стан",
    author: "Włodek Filipski",
    date: "02.03.2025",
    link: "https://youtu.be/1uFkVcr8CHI?si=3G97VGDFasIVRcW3",
  },
  {
    videoId: "7hXw12aMHkk",
    title: "Особистий священник",
    author: "Артем Терпелюк",
    date: "23.02.2025",
    link: "https://youtu.be/7hXw12aMHkk?si=JZxY2ZWg4J6U6gs9",
  },
  {
    videoId: "HXcGQEoh14o",
    title: "Велике спасіння",
    author: "Bartosz Szymczyk",
    date: "16.02.2025",
    link: "https://youtu.be/HXcGQEoh14o?si=VpJMLsxquDjs34iI",
  },
];

export const VideosPage = () => {
  const isMobile = useMediaQuery({ query: QUERY_WIDTHS.md });

  return (
    <div className="max-w-[1680px] mx-auto px-6 md:px-12 py-12 md:py-24 flex flex-wrap justify-around gap-10 text-black-100">
      {videos.map(({ videoId, title, author, date, link }) => (
        <div key={videoId} className="flex flex-col items-center">
          <YouTube
            videoId={videoId}
            opts={{
              width: !isMobile ? "500" : "300",
              height: !isMobile ? "280" : "168",
            }}
          />
          <Link
            to={link}
            target="_blank"
            className="inline-block pt-4 md:pt-8 text-350 md:text-400 font-semibold hover:text-primary-100"
          >
            {title}
          </Link>
          <div className="text-black-54">
            {author} | {date}
          </div>
        </div>
      ))}
    </div>
  );
};
