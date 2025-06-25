import { useLang } from "@hooks/index";
import { dataHomePage } from "@data/index";
import homeBg from "@assets/images/home_bg.jpg";

export const HomePage = () => {
  const lang = useLang();

  return (
    <div className="text-black-100">
      <img src={homeBg} width="100%" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24">
        <h2 className="text-450 md:text-500 font-bold">
          {dataHomePage[lang].content[0]}
        </h2>
        <p className="mt-4">{dataHomePage[lang].content[1]}</p>
        <h3 className="pt-8 text-350 md:text-400 font-normal md:font-semibold">
          {dataHomePage[lang].content[2]}
        </h3>
        <p className="mt-4">{dataHomePage[lang].content[3]}</p>
        <h3 className="pt-8 text-350 md:text-400 font-normal md:font-semibold">
          {dataHomePage[lang].content[4]}
        </h3>
        <p className="mt-4">{dataHomePage[lang].content[5]}</p>
        <h3 className="pt-8 text-350 md:text-400 font-normal md:font-semibold">
          {dataHomePage[lang].content[6]}
        </h3>
        <p className="mt-4">{dataHomePage[lang].content[7]}</p>
        <h3 className="pt-8 text-350 md:text-400 font-normal md:font-semibold">
          {dataHomePage[lang].content[8]}
        </h3>
        <p className="mt-4">{dataHomePage[lang].content[9]}</p>
        <p className="mt-4">{dataHomePage[lang].content[10]}</p>
      </div>
    </div>
  );
};
