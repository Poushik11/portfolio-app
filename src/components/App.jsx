import "../styles/App.css";
import Footer from "./Footer/";
import Task from "./Task/";
import Content from "./Content/";

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
