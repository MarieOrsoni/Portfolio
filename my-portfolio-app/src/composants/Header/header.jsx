import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/language/Language-context";
import NavBar from "../nav-bar/navBar";

import "../../index.css";

function IntroHeader() {
  const { content } = useContext(LanguageContext);
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const text = content?.info?.title || "Développeuse web";
    setLetters(text.split(""));
  }, [content]);
  console.log("Full context value:", useContext(LanguageContext));

  console.log("Title used in header:", content?.info?.title);

  console.log("Current content:", content);
  console.log("Header text:", content?.info?.title);

  useEffect(() => {
    console.log("Updated content:", content);
  }, [content]);

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
