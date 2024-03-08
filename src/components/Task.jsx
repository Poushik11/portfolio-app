import "../styles/Task.css";
import { Link } from "react-scroll";
import Download from "./Download";
import { useEffect, useState } from "react";

function Task() {
  const defaultOffset = -850;

  const [scrollOffset, setScrollOffset] = useState(defaultOffset);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        // setScrollOffset(50);
      } else {
        setScrollOffset(defaultOffset);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="task">
      <div className="header">
        <h1 className="logo">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={scrollOffset}
            duration={500}
          >
            <a href="#">
              <img
                className="portfolio"
                src="https://cdn-icons-gif.flaticon.com/8362/8362299.gif"
                alt="Portfolio"
              />
            </a>
          </Link>
        </h1>
        <Download />

        <ul className="main-nav">
          <li className="home--name">
            <a>Home</a>
          </li>
          <li className="about--name">
            <Link
              activeClass="active"
              to="aboutinfo"
              spy={true}
              smooth={true}
              offset={3}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="project">
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="contact1">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={scrollOffset}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Task;
