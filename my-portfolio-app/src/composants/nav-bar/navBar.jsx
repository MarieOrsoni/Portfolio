import { useContext } from "react";
import { LanguageContext } from "../../context/language/Language-context";
import britFlag from "./../../assets/brit_flag.png";
import frenchFlag from "./../../assets/french_flag.png";

import "./../../index.css";

function NavBar() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <nav className="nav">
      <p>{language === "fr" ? "Bienvenue" : "Welcome"}</p>
      <button className="btn_flags" onClick={toggleLanguage}>
        <img
          className="flags"
          src={language === "en" ? frenchFlag : britFlag}
          alt={language === "en" ? "Français" : "English"}
        />
      </button>
    </nav>
  );
}
export default NavBar;
