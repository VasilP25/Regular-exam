import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import UserContext from "../context/contexts";

export default function Header() {
  const { isAuthenticated } = useContext(UserContext);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, [isAuthenticated]);

  return (
    <>
      <header>
        <nav className="navigation">
          <div className="container">
            <p className="title">Training Center</p>
            <ul className="navigation-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/catalog">Catalog</Link>
              </li>

              {logged ? (
                <>
                  <li>
                    <Link to="/mytrainings">My trainigs</Link>
                  </li>
                  <li>
                    <Link to="/create">Create training</Link>
                  </li>
                  <li>
                    <Link to="/logout">Logout</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}

              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
