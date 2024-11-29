import NavBar from "../nav-bar/navBar";

import "../../index.css";

function IntroHeader() {
  return (
    <header className="Header-container">
      <NavBar />
      <h1 className="header-title">Orsoni Marie</h1>
      <h2 className="header-job">Freelance</h2>
      <h3 className="header-job">Développeuse Front End</h3>
    </header>
  );
}
export default IntroHeader;
