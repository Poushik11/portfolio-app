import "../styles/review.css";
import { useState } from "react";
import axios from "axios";

function Review() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("https://portfolio-backend-kigm.onrender.com/api/form", formData)
      .then((response) => {
        console.log(response.data);
        setIsSent(true); // Set state to true upon successful form submission
        setFormData({
          // Clear form data upon successful submission
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => {
          setIsSent(false); // Hide the popup after 3 seconds
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
            <form onSubmit={handleSubmit} method="post">
              <fieldset>
                <div className="form-field">
                  <input
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="form-field">
                  <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="form-field">
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="form-field">
                  <textarea
                    name="message"
                    type="text"
                    id="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </fieldset>
              <input id="form-btn" type="submit" value="send" />
            </form>
          </div>

          <div className="contact-info">
            <a id="logo5" href="#" className="effect5"></a>
            <a id="logo5" href="#" className="effect5"></a>
            <a id="logo5" href="#" className="effect5"></a>
          </div>
        </div>
      </section>

      {/* Popup message component */}
      {isSent && (
        <div className="popup">
          <p>Message sent successfully!</p>
        </div>
      )}
    </div>
  );
}

export default Review;
