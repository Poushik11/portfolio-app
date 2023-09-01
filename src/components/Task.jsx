import "../styles/Task.css";
function Task() {
  return (
    <div className="task">
      <div className="header">
        <h1 className="logo">
          <a href="#">
            <img
              className="portfolio"
              src="https://cdn-icons-gif.flaticon.com/8362/8362299.gif"
              alt="Portfolio"
            />
          </a>
        </h1>
        <ul className="main-nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Task;
