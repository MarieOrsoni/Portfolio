import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fr");
  const [content, setContent] = useState({});

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) setLanguage(storedLang);
  }, []);

  const handleSetLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch("./dev-portfolio.json");
        if (!response.ok) throw new Error("Failed to fetch translation file");

        const data = await response.json();
        console.log("Fetched data:", data);
        setContent(data.languages[language]);
      } catch (error) {
        console.error("Language fetch error:", error);
        setContent({});
      }
    };
    fetchContent();
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, content }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LanguageContext };
