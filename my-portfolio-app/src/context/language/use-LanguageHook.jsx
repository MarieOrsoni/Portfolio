import { useContext } from "react";
import { LanguageContext } from "./Language-context";

const useLanguage = () => {
  return useContext(LanguageContext);
};
export default useLanguage;
