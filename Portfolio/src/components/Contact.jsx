import "../styles/contact.css";

function Contact() {
  return (
    <div className="contact">
      <ul className="outer">
        <li className="social">
          <a className="facebook" href="https://github.com/Poushik11">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img
              className="simag"
              src="https://cdn-icons-png.flaticon.com/128/733/733553.png"
              alt=""
            />
          </a>
        </li>
        <li className="social">
          <a
            className="twitter"
            href="https://www.linkedin.com/in/poushik-yelne-b846a7228/"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img
              className="simag"
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
              alt=""
            />
          </a>
        </li>
        <li className="social">
          <a className="instagram" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img
              className="simag"
              src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png"
              alt=""
            />
          </a>
        </li>
        <li className="social">
          <a className="google" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img
              className="simag"
              src="https://about.twitter.com/content/dam/about-twitter/x/large-x-logo.png.twimg.1920.png"
              alt=""
            />
          </a>
        </li>
      </ul>
      <p className="rights">All Rights Reserved By Poushik Yelne</p>
    </div>
  );
}

export default Contact;
