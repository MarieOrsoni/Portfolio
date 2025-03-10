import { useEffect, useState } from "react";
import "../../index.css";

function IntroHeader() {
  const text = "Developper Web";
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    setLetters(text.split(""));
  }, []);

  return (
    <header className="Header-container">
      <h1 className="header-job">
        {letters.map((char, index) => (
          <span
            key={index}
            style={{ animationDelay: `${0.1 + index * 0.01}s` }}
          >
            {char}
          </span>
        ))}
      </h1>
    </header>
  );
}
export default IntroHeader;
