/* eslint-disable react/no-unescaped-entities */
import "../styles/Info.css";
import { Link } from "react-scroll";

function About() {
  return (
    <div className="aboutinfo">
      <div className="transW">
        {/* <p className="trans">ABOUT</p> */}

        <div className="aboutsec">
          <div id="word">
            Dive into
            <div id="flip">
              <div>
                <div>Exciting Project</div>
              </div>
              <div>
                <div>Our Story</div>
              </div>
              <div>
                <div>The PortFolio</div>
              </div>
            </div>
            and Explore The Story!
          </div>
        </div>
      </div>

      <section id="about" className="main-section">
        <div className="wrapper">
          <p
            className="about__intro"
            style={{
              marginTop: "50px",
              fontFamily: "Great Vibes, cursive",
            }}
          >
            <strong
              style={{
                fontSize: "16px",
                color: "#00698f",
                fontFamily: "Great Vibes, cursive",
              }}
            >
              Hi, I'm Poushik Yelne, an aspiring Full stack Web developer with a
              passion for UI/UX design. I'm currently pursuing a degree in
              Computer Science,
              {/* also diving deep into the world of algorithms */}
              {/* and data structures. */}
            </strong>
            <div
              style={{
                marginTop: "10px",
                fontSize: "18px",
                // color: "#00698f",
                fontFamily: "Great Vibes, cursive",
              }}
            >
              What I Can Do
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: "0",
                margin: "0",
              }}
            >
              <li
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  margin: "5px",
                }}
              >
                <strong
                  style={{
                    fontSize: "16px",
                    color: "#00698f",
                    fontFamily: "Great Vibes, cursive",
                  }}
                >
                  Full-Stack Developer: From front-end frameworks that
                  "simplify" development to back-end systems that "scale" (until
                  they don't).
                </strong>
              </li>
              <li
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  margin: "5px",
                }}
              >
                <strong
                  style={{
                    fontSize: "16px",
                    color: "#00698f",
                    fontFamily: "Great Vibes, cursive",
                  }}
                >
                  Competitive Coding: Solving problems for fun, and sometimes
                  creating new ones.
                </strong>
              </li>
              <li
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  margin: "5px",
                }}
              >
                <strong
                  style={{
                    fontSize: "16px",
                    color: "#00698f",
                    fontFamily: "Great Vibes, cursive",
                  }}
                >
                  Open Source Contributions: Fixing bugs, adding features, and
                  debating the best indentation styles.
                </strong>
              </li>
              <li
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  margin: "5px",
                }}
              >
                <strong
                  style={{
                    fontSize: "16px",
                    color: "#00698f",
                    fontFamily: "Great Vibes, cursive",
                  }}
                >
                  Eager Learner: Always up for a challenge, whether it's a new
                  JavaScript library or a programming language.
                </strong>
              </li>
            </ul>
            I love being helpful, whether it's debugging code or building new
            features. I'm passionate about creating impactful solutions and
            always ready to learn something new. If you're looking for a
            dedicated developer with a sense of humor, let's connect!
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
