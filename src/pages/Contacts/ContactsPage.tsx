import { useLang } from "@hooks/index";
import { dataContactsPage } from "@data/index";

export const ContactsPage = () => {
  const lang = useLang();

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 text-black-100">
      <h2 className="text-450 md:text-500 font-bold">
        {dataContactsPage[lang].content[0]}
      </h2>
      <p className="mt-4">{dataContactsPage[lang].content[1]}</p>
      <div className="w-full h-[300px] md:h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d320.3821700105848!2d18.690977!3d50.029021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716b2d3ad79c92d%3A0x511bed34011620d!2s%C5%BBorskie%20Centrum%20Organizacji%20Pozarz%C4%85dowych!5e0!3m2!1suk!2spl!4v1761350912977!5m2!1suk!2spl"
          width="100%"
          height="100%"
          loading="lazy"
          className="mt-4 shadow-sm"
        />
      </div>
      <p className="mt-8">{dataContactsPage[lang].content[2]}</p>
      <h2 className="mt-14 text-450 md:text-500 font-bold">
        {dataContactsPage[lang].content[3]}
      </h2>
      <p className="mt-4 font-semibold">{dataContactsPage[lang].content[4]}</p>
      <p>{dataContactsPage[lang].content[5]}</p>
      <p>{dataContactsPage[lang].content[6]}</p>
      <p className="mt-4 font-semibold">{dataContactsPage[lang].content[7]}</p>
      <p>{dataContactsPage[lang].content[8]}</p>
      <p>{dataContactsPage[lang].content[9]}</p>
      <p className="mt-4 font-semibold">{dataContactsPage[lang].content[10]}</p>
      <p>{dataContactsPage[lang].content[11]}</p>
      <p>{dataContactsPage[lang].content[12]}</p>
    </div>
  );
};
