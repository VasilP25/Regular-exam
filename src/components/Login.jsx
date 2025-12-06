import { useContext, useState } from "react";
import { Link } from "react-router";
import LoginFetch from "../utils/loginUtil";
import UserContext from "../context/contexts";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let { user, loginHandler } = useContext(UserContext);

  const emailChangeHandler = (e) => {
    console.log(e.target.value);
    console.log(user);

    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    console.log(e.target.value);

    setPassword(e.target.value);
  };

  const submitEvent = async () => {
    if (!email || !password) {
      return alert("Email and password are required!");
    }
    try {
      await loginHandler({ email, password });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <div className="centering">
        <div className="main">
          {/* <p className="error-message">{{ msg }}</p> */}

          <h1>Login</h1>

          <form action={submitEvent}>
            <label htmlFor="email"> Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your Email"
              value={email}
              onChange={emailChangeHandler}
            />

            {/* <p className="error">Email is required!</p> */}
            {/* <p className="error">Email must be at least 3 characters!</p> */}

            {/* <p className="error">Email must be like: example@example.com</p> */}

            <label htmlFor="password"> Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              value={password}
              onChange={passwordChangeHandler}
            />

            {/* <p className="error">Password is required!</p> */}
            {/* <p className="error">Password must be at least 6 characters!</p> */}

            <div className="wrap">
              <button type="submit">Submit</button>
            </div>
          </form>

          <p>
            Not registered?
            <br></br>
            <Link to="/register">Create an account</Link>
          </p>
        </div>
      </div>
    </>
  );
}
