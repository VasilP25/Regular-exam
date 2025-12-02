import { Link } from "react-router";

export default function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-card">
          <h1>About Us</h1>
          <h3>Our Mission</h3>
          <p>
            We aim to provide the best workout tracking experience for everyone.
            Our platform helps you monitor your progress, set goals, and stay
            motivated.
          </p>

          <h3>Our Vision</h3>
          <p>
            To create a supportive community of fitness enthusiasts who inspire
            each other to achieve their personal best.
          </p>

          <h3>Contact</h3>
          <p>
            Email:{" "}
            <Link to="mailto:vasil.penev25@gmail.com">
              vasil.penev25@gmail.com
            </Link>
            <br />
            Phone: +359898703478
          </p>
        </div>
      </div>
    </>
  );
}
