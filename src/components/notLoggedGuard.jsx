import { useContext, useEffect } from "react";
import UserContext from "../context/contexts";
import { Outlet, useNavigate } from "react-router";

export default function NotLoggedGuard() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user._id) {
      navigate("/");
    }
  }, []);

  if (!user._id) {
    return <Outlet />;
  }
  return null;
}
