import { useContext, useEffect } from "react";
import UserContext from "../context/contexts";
import { Outlet, useNavigate } from "react-router";

export default function NotLoggedGuard() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("_id");

  useEffect(() => {
    if (userId) {
      navigate("/");
    }
  }, []);

  if (!userId) {
    return <Outlet />;
  }
  return null;
}
