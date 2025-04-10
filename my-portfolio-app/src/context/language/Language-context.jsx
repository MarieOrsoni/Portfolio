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

  const toggleLanguage = () => {
    const newLang = language === "fr" ? "en" : "fr";
    setLanguage(newLang);
    localStorage.setItem("lang", newLang);
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
    <LanguageContext.Provider value={{ language, toggleLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
};
LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LanguageContext };
