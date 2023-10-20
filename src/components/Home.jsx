import "../styles/Home.css";
import boy from "../images/boy.jpg";
import { Link } from "react-scroll";
import { useEffect } from "react";
function Home() {
  // const defaultOffset = -850;

  // const [scrollOffset, setScrollOffset] = useState(defaultOffset);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        // setScrollOffset(50);
      } else {
        // setScrollOffset(defaultOffset);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div>
      <div className="left"></div>
      <div className="containers">
        <div className="container__item landing-page-container">
          <div className="content__wrapper">
            <div className="ellipses-container">
              <div className="greeting">
                <img src={boy} alt="" />
              </div>

              <div className="ellipses ellipses__outer--thin">
                <div className="ellipses ellipses__orbit"></div>
              </div>

              <div className="ellipses ellipses__outer--thick"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="iconbutton">
        <Link
          activeClass="active"
          to="task"
          spy={true}
          smooth={true}
          offset={0}
          duration={900}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            width="63px"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Home;
