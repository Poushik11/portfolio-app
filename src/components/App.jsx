import "../styles/App.css";
import Footer from "./Footer/";
import Task from "./Task/";
import Content from "./Content/";
// import Skills from "./Skills/";
// import Project from "./Project/";

function App() {
  return (
    <div className="Container">
      <Task />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
