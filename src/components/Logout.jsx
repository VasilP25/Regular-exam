import { useContext, useEffect } from "react";
import UserContext from "../context/contexts";
import { useNavigate } from "react-router";

export default function Logout() {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const doLogout = async () => {
      await logout();
      navigate("/");
    };
    doLogout();
  });

  return null;
}
