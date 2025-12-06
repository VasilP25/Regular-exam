import { createContext, useState } from "react";

const UserContext = createContext({
  user: {
    email: "",
    username: "",
    _id: "",
    accessToken: "",
  },
  loginHandler() {},
});

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const loginHandler = async (email, password) => {
    const response = await fetch("http://localhost:3030/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "content-type": "application/json",
      },
    });

    if (!response.ok) {
      alert(response.statusText);
      return null;
    }
    const result = await response.json();
    setUser(result);

    return result;
  };
  const userContextData = {
    user,
    loginHandler,
  };

  return (
    <UserContext.Provider value={userContextData}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
