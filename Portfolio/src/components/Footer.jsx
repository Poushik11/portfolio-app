import "../styles/App.css";
import Contact from "./Contact/";
import Review from "./Review/";

function Footer() {
  return (
    <div className="footer">
      <Review />
      <Contact />
    </div>
  );
}

export default Footer;
