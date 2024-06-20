import { useEffect, useRef } from "react";
import "../styles/timeline.css";

function Timeline() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.8 }
    );

    if (timelineRef.current) {
      const timelineElements =
        timelineRef.current.querySelectorAll(".timeline-content");
      timelineElements.forEach((element) => {
        observer.observe(element);
      });
    }
  }, []);

  return (
    <div className="timeline" ref={timelineRef}>
      <div className="timeline-block timeline-block-right">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>Under Exploring...</h3>
          <span>Present---</span>
          <p>
            Currently, I am exploring the latest trends in software development,
            including full-stack development with a focus on modern JavaScript
            frameworks and cloud integration. I am honing my skills in
            developing scalable applications.In general , I prioritize a
            balanced routine that blends work, study, and personal activities,
            ensuring both productivity and personal fulfillment. :)
          </p>
        </div>
      </div>

      <div className="timeline-block timeline-block-left">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>Final Year at RCOEM</h3>
          <span>2021-2025</span>
          <p>
            I am currently in my final year of pursuing a degree in Computer
            Science engineering at Shri ramdeobaba College of engineering
          </p>
        </div>
      </div>

      <div className="timeline-block timeline-block-right">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>Fullstack Intern</h3>
          <span>Jun 24-Present</span>
          <p>
            Hawlt<br></br>
            Developed and implemented backend APIs using Node.js, ensuring
            seamless data retrieval and manipulation. Created and maintained
            frontend components using React, enhancing user interface and
            experience and also Collaborated with the backend team to design and
            optimize server-side logic for improved performance.
          </p>
        </div>
      </div>
      <div className="timeline-block timeline-block-left">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>Fullstack Intern </h3>
          <span>May 24-Jun 24</span>
          <p>
            Diggaj Coder<br></br>
            Collaborared with the design and product teams to implement
            user-friendly interfaces and implemented backend APIs using Node.js,
          </p>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
