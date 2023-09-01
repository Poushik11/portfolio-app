import "../styles/Home.css";
import boy from "../images/boy.jpg";
function Home() {
  return (
    <div>
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
    </div>
  );
}

export default Home;
