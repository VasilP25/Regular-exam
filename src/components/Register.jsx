import { useContext, useState } from "react";
import { Link } from "react-router";
import UserContext from "../context/contexts";

export default function Register() {
  const { registerHandler } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const emailChangeHandler = (e) => {
    console.log("yes");

    setEmail(e.target.value);
  };

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const rePasswordChangeHandler = (e) => {
    setRePassword(e.target.value);
  };

  const emailChecker = (e) => {
    console.log(e.target.value);

    if (reg.test(email)) {
      setEmailCheck(true);
    } else {
      setEmailCheck(false);
    }
  };

  const register = () => {
    if (!email || !username || !password || !rePassword) {
      alert("All inputs are required");
      return null;
    }

    if (password !== rePassword) {
      alert("Password must be equal!");
      return null;
    }
    return registerHandler({ email, password });
  };

  return (
    <>
      <div className="centering">
        <form action={register}>
          <div className="containerRegister">
            <h1>Register</h1>
            <p>Please fill in this htmlForm to create an account.</p>

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                emailChangeHandler(e);
                emailChecker(e);
              }}
            />

            {/* <p className="error">Email is required!</p> */}

            {/* <p className="error">Email must be at least 3 characters!</p> */}

            {emailCheck || (
              <p className="error">Email must be like: example@example.com</p>
            )}

            <label htmlFor="username">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              id="username"
              value={username}
              onChange={usernameChangeHandler}
            />

            {/* <p className="error">Username is required!</p> */}
            {/* <p className="error">Username must be at least 5 characters!</p> */}

            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              id="password"
              value={password}
              onChange={passwordChangeHandler}
            />

            {/* <p className="error">Password is required!</p> */}
            {/* <p className="error">Password must be at least 7 characters!</p> */}

            {/* <p className="error">Password must be only alphabetical characters!</p> */}

            <label htmlFor="repeatPassword">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="repeatPassword"
              id="repeatPassword"
              value={rePassword}
              onChange={rePasswordChangeHandler}
            />

            {/* <p className="error">Repeat password is required!</p> */}
            {/* <p className="error">Repeat password must be at least 7 characters!</p> */}

            {/* <p className="error">Passwords mismatch!</p> */}

            <button type="submit" className="registerbtn">
              Register
            </button>
            <div>
              <p>
                Already have an account? <Link to="/login">Sign in</Link>.
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
