import { useContext } from "react";
import { LanguageContext } from "../../context/language/Language-context";
import britFlag from "./../../assets/brit-flag-round.png";
import frenchFlag from "./../../assets/french_flag.png";

import "./../../index.css";

function NavBar() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <nav className="nav">
      <div className="language-selection">
        <p className="lang-label">
          {language === "fr" ? "Choisissez une langue" : "Choose a language"}
        </p>
      </div>
      <div className="lang-btn">
        <button
          className={`flags-btn ${language === "en" ? "active" : ""}`}
          onClick={() => setLanguage("en")}
        >
          <img className="flags" src={britFlag} alt="English" />
        </button>
        <button
          className={`flags-btn ${language === "fr" ? "active" : ""}`}
          onClick={() => setLanguage("fr")}
        >
          <img className="flags" src={frenchFlag} alt="Français" />
        </button>
      </div>
    </nav>
  );
}
export default NavBar;
