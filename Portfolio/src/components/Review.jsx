import "../styles/review.css";
function Review() {
  return (
    <div>
      <section className="contact">
        <div className="contact-header">
          <h3 id="co-title">Contact Me</h3>
          <h1 id="co-text">Reach out for a new project or to say hello</h1>
        </div>

        <div className="contact-content">
          <div className="contact-form">
            <h3 id="form-title">Send me a message</h3>
            <form action="mailto:poushikyelne750@gmail.com" method="post">
              <fieldset>
                <div className="form-field">
                  <input
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Your Name"
                  ></input>
                </div>
                <div className="form-field">
                  <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Your Email"
                  ></input>
                </div>
                <div className="form-field">
                  <input
                    name="Subject"
                    type="text"
                    id="subject"
                    placeholder="Subject"
                  ></input>
                </div>
                <div className="form-field">
                  <textarea
                    name="message"
                    type="text"
                    id="message"
                    placeholder="Your Message"
                  ></textarea>
                </div>
              </fieldset>
              <input id="form-btn" type="submit" value="send" />
            </form>
          </div>

          <div className="contact-info">
            <h3 className="contact-into-h3">
              {" "}
              <span>
                <img
                  className="hands-down"
                  src="https://cdn-icons-png.flaticon.com/128/4151/4151471.png"
                  alt=""
                />
              </span>
              Email Me At{" "}
            </h3>
            <a href="mailto:poushikyelne750@gmail.com">
              <p className="emailto">poushikyelne750@gmail.com</p>
            </a>
            <div className="photo-contact">
              <img
                src="https://cdn-icons-png.flaticon.com/128/8657/8657231.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Review;
