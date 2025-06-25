import { useLang } from "@hooks/index";
import { dataDoctrinePage } from "@data/index";

export const DoctrinePage = () => {
  const lang = useLang();

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 text-black-100">
      <h2 className="text-450 md:text-500 font-bold">
        {dataDoctrinePage[lang].content[0]}
      </h2>
      <p className="mt-4">{dataDoctrinePage[lang].content[1]}</p>
      <ul className="mt-4">
        <li className="mt-2">{dataDoctrinePage[lang].content[2]}</li>
        <li className="mt-2">{dataDoctrinePage[lang].content[3]}</li>
        <li className="mt-2">{dataDoctrinePage[lang].content[4]}</li>
        <li className="mt-2">{dataDoctrinePage[lang].content[5]}</li>
        <li className="mt-2">{dataDoctrinePage[lang].content[6]}</li>
        <li className="mt-2">{dataDoctrinePage[lang].content[7]}</li>
        <li className="mt-2">{dataDoctrinePage[lang].content[8]}</li>
        <li className="mt-2">{dataDoctrinePage[lang].content[9]}</li>
        <li className="mt-2">{dataDoctrinePage[lang].content[10]}</li>
        <li className="mt-2">{dataDoctrinePage[lang].content[11]}</li>
      </ul>
    </div>
  );
};
