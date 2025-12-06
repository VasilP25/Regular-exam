import { Link } from "react-router";
import UserContext from "../context/contexts";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { isAuthenticated } = useContext(UserContext);
  const [isLogged, SetIsLogged] = useState(false);
  useEffect(() => {
    if (isAuthenticated) {
      SetIsLogged(true);
    } else {
      SetIsLogged(false);
    }
  }, [isAuthenticated]);
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
            {!isLogged ? (
              <Link to="/register" className="cta-btn">
                Start Now
              </Link>
            ) : (
              <></>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
