import "../styles/Project.css";
import Skills from "./Skills/";
import Project from "./Project/";
import Home from "./Home/";
import Info from "./Info/";
function Content() {
  return (
    <div>
      <Home />
      <Info />
      <Skills />
      <div className="main">
        <Project />
      </div>
    </div>
  );
}

export default Content;
