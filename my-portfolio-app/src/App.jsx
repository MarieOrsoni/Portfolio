import IntroHeader from "./composants/Header/header";
import MyProjects from "./composants/projects/project-card";
import AboutMe from "./composants/about-me/intro";

function App() {
  return (
    <>
      <header className="page">
        <IntroHeader />
      </header>
      <main>
        <AboutMe />
        
          <MyProjects />
        
      </main>
    </>
  );
}
export default App;
