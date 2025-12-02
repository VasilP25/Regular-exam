import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <div className="container">
        <section className="hero">
          <div className="overlay"></div>
          <div className="content">
            <h1>Your transformation starts here!</h1>
            <p>
              Every day is a new chance to become stronger, faster, and
              healthier. Begin your workout journey with us and unlock the best
              version of yourself. Together, we take every step forward!
            </p>
            <Link to="/register" className="cta-btn">
              Start Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
