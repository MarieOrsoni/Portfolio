import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
import "../../index.css";

function BottomPage() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <footer className="footer">
      <div className="icons-container">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original-wordmark.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
      </div>
      <div className="light-dark-theme">
        <button className="darkTheme" onClick={toggleTheme}>
          Switch to {theme === "light" ? "dark" : "light"} mode
        </button>
      </div>
      <div className="legal-info">
        <p>Siret no. 94156730700017</p>
      </div>
    </footer>
  );
}

export default BottomPage;
