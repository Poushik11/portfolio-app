import "../styles/Info.css";
import { Link } from "react-scroll";
function About() {
  return (
    <div className="aboutinfo">
      <div className="transW">
        <p className="trans">ABOUT</p>
      </div>

      <section id="about" className="main-section">
        <div className="wrapper">
          <p className="about__intro">
            Hi, Im Poushik Yelne, an aspiring web developer with an interest in
            UX/UI design. <br />
            Im pursuing the degree in computer science . <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eos,
            officia nulla non dignissimos cum praesentium soluta consectetur
            eligendi odit necessitatibus! Sapiente illum nemo aut dolorem?
            Repellendus quo reiciendis vel?
          </p>
          <Link
            activeClass="active"
            to="skills-section"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <a className="arrow-wrap" href="#content">
              <span className="arrow"></span>
              {/*<span className="hint">scroll</span>*/}
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
