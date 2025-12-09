import { createContext, useState } from "react";
import { useNavigate } from "react-router";

const UserContext = createContext({
  user: {
    email: "",
    username: "",
    _id: "",
    accessToken: "",
  },
  loginHandler() {},
  registerHandler() {},
  logout() {},
});

export function UserProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    username: "",
    _id: "",
    accessToken: "",
  });

  const loginHandler = async (data) => {
    try {
      const response = await fetch("http://localhost:3030/users/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      });
      const result = await response.json();
      if (!response.ok) {
        alert(result.message);
        return null;
      }

      setUser(result);
      localStorage.setItem("_id", result._id);
      localStorage.setItem("at", result.accessToken);
      navigate("/");
      return result;
    } catch (error) {
      alert(error.message);
      return null;
    }
  };

  const registerHandler = async (data) => {
    try {
      const response = await fetch("http://localhost:3030/users/register", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) {
        alert(result.message);
        return null;
      }

      setUser(result);
      localStorage.setItem("_id", result._id);
      localStorage.setItem("at", result.accessToken);
      navigate("/");

      return result;
    } catch (error) {
      alert(error.message);
      return null;
    }
  };

  const logout = async () => {
    try {
      await fetch("http://localhost:3030/users/logout");

      localStorage.removeItem("_id");
      localStorage.removeItem("at");
      setUser(null);
      navigate("/");
    } catch (error) {
      alert(error.message);
      return null;
    }
  };
  const userContextData = {
    user,
    isAuthenticated: !!user?.accessToken,
    loginHandler,
    registerHandler,
    logout,
  };

  return (
    <UserContext.Provider value={userContextData}>
      {children}
    </UserContext.Provider>
  );
}

// export function useData() {
//   const contextData = useContext(UserContext);

//   return contextData;
// }

export default UserContext;
