import { useEffect } from "react";
import UserContext from "../context/contexts";
import { Outlet, useNavigate } from "react-router";

export default function LoggedGuard() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("_id");

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }
  }, []);

  if (userId) {
    return <Outlet />;
  }
  return null;
}
