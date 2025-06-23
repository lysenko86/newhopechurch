import { LangType } from "@interfaces/index";

export const useLang = () => {
  const lang: LangType = (localStorage.getItem("lang") as LangType) || "EN";

  return lang;
};
