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
          <h3>First Year</h3>
          <span>Some work experience</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate.
          </p>
        </div>
      </div>

      <div className="timeline-block timeline-block-left">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>Second Year</h3>
          <span>Some work experience</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate.
          </p>
        </div>
      </div>

      <div className="timeline-block timeline-block-right">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>First Year</h3>
          <span>Some work experience</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate.
          </p>
        </div>
      </div>
      <div className="timeline-block timeline-block-left">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>Second Year</h3>
          <span>Some work experience</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
