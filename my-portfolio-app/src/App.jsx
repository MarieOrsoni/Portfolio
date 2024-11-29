import IntroHeader from "./composants/Header/header";
import MyProjects from "./composants/projects/project-card";
import AboutMe from "./composants/about-me/intro";
import BottomPage from "./composants/Footer/footer";

function App() {
  return (
    <>
      <header>
        <IntroHeader />
      </header>
      <main>
        <AboutMe />
        <MyProjects />
      </main>
      <footer>
        <BottomPage />
      </footer>
    </>
  );
}
export default App;
