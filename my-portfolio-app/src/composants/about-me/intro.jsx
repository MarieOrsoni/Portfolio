import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import useLanguage from "../../context/language/use-LanguageHook";
import "../../index.css";

function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { language } = useLanguage();

  const paragraphsFR = [
    "Bonjour, je suis Marie — développeuse web freelance avec un esprit pratique et une touche de créativité.",
    "Je conçois des sites web et interfaces sur mesure, principalement avec React, Vite et MongoDB.",
    "J’aime transformer les idées en expériences digitales utiles, esthétiques, et bien construites.",
    "J’enseigne également l’anglais — une autre façon de rester à l’écoute et de communiquer clairement.",
    "Je développe encore mon portfolio, mais je suis motivée, fiable, et prête à collaborer sur des projets concrets.",
  ];

  const paragraphsEN = [
    "Hi, I'm Marie — a freelance web developer with a practical mindset and a creative touch.",
    "I design custom websites and interfaces, mainly using React, Vite, and MongoDB.",
    "I enjoy turning ideas into digital experiences that are useful, elegant, and well-built.",
    "I also teach English — another way to stay attentive and communicate clearly.",
    "My portfolio is still growing, but I’m motivated, reliable, and ready to collaborate on real projects.",
  ];
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
  const currentParagraphs = language === "fr" ? paragraphsFR : paragraphsEN;
  return (
    <section className="about-container" ref={ref}>
      <div className="message-info">
        <motion.h2
          className="message-header"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {language === "fr" ? "À propos de moi" : "About me"}
        </motion.h2>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          className="about-box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {currentParagraphs.map((text, index) => (
            <motion.p
              className="about-text"
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={variants}
              whileHover={{ scale: 1.02 }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default AboutMe;
