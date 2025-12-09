import { useEffect, useState } from "react";

export default function LoginFetch(email, password) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("http://localhost:3030/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setData(result);
        // navigate("/");
      });
  }, [email, password]);
  return data;
}
