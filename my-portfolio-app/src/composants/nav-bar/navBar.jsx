import { useContext } from "react";
import { LanguageContext } from "../../context/language/Language-context";
import "./../../index.css";

function NavBar() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <nav className="nav">
      <h1>{language === "fr" ? "Bienvenue" : "Welcome"}</h1>
      <button onClick={toggleLanguage}>
        {language === "en" ? "Switch to English" : "Passer en Francais"}
      </button>
    </nav>
  );
}
export default NavBar;
