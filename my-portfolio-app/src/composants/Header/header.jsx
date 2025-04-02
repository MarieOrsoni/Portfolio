import { useEffect, useState } from "react";
import useLanguage from "../../context/language/use-LanguageHook";
import description_header from "../../../public/dev-portfolio.json";
import NavBar from "../nav-bar/navBar";

import "../../index.css";

function IntroHeader() {
  const { language } = useLanguage();
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const text = description_header[language]?.header || "Developper Web";
    setLetters(text.split(""));
  }, [language]);

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
