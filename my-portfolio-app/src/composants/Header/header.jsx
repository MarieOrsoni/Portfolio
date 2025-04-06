import { useEffect, useState } from "react";
import useLanguage from "../../context/language/use-LanguageHook";
import translations from "../../../public/dev-portfolio.json";
import NavBar from "../nav-bar/navBar";

import "../../index.css";

function IntroHeader() {
  const { language } = useLanguage();
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const text = translations[language]?.info?.title || "Développeuse web";
    setLetters(text.split(""));
  }, [language]);
  console.log("Current language:", language);
  console.log("Header text:", translations[language]?.info?.title);

  return (
    <header className="Header-container">
      <NavBar />
      <h1 className="header-job">
        {letters.map((char, index) => (
          <span
            key={index}
            style={{ animationDelay: `${1.25 + index * 0.02}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </header>
  );
}
export default IntroHeader;
