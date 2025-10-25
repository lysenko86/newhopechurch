import { useLang } from "@hooks/index";
import { dataServicesPage } from "@data/index";

export const ServicesPage = () => {
  const lang = useLang();

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 text-black-100">
      <h2 className="text-450 md:text-500 font-bold">
        {dataServicesPage[lang].content[0]}
      </h2>
      <p className="mt-4">{dataServicesPage[lang].content[1]}</p>
      <p className="mt-4 font-semibold">{dataServicesPage[lang].content[2]}</p>
      <p>{dataServicesPage[lang].content[3]}</p>
      <p className="mt-4 font-semibold">{dataServicesPage[lang].content[4]}</p>
      <p>{dataServicesPage[lang].content[5]}</p>
      <p className="mt-4 font-semibold">{dataServicesPage[lang].content[6]}</p>
      <p>{dataServicesPage[lang].content[7]}</p>
      <p className="mt-4 font-semibold">{dataServicesPage[lang].content[8]}</p>
      <p>{dataServicesPage[lang].content[9]}</p>
      <p className="mt-4 font-semibold">{dataServicesPage[lang].content[10]}</p>
      <p>{dataServicesPage[lang].content[11]}</p>
    </div>
  );
};
