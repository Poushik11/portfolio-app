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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSent(true);
      axios
        .post("https://portfolio-backend-kigm.onrender.com/api/form", formData)
        .then((response) => {
          console.log(response.data);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setTimeout(() => {
            setIsSent(false);
          }, 3000);
        })
        .catch((error) => {
          console.error(error);
        });
    }
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
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="form-field">
                  <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-field">
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <p className="error">{errors.subject}</p>}
                </div>
                <div className="form-field">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && <p className="error">{errors.message}</p>}
                </div>
              </fieldset>
              <input
                id="form-btn"
                type="submit"
                value={isSent ? "Email Sent" : "Send"}
              />
            </form>
          </div>

          <div className="contact-info">
            <a id="logo5" href="#" className="effect5"></a>
            <a id="logo5" href="#" className="effect5"></a>
            <a id="logo5" href="#" className="effect5"></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Review;
