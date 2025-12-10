import { useContext, useEffect } from "react";
import UserContext from "../context/contexts";
import { Outlet, useNavigate } from "react-router";

export default function LoggedGuard() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user._id) {
      navigate("/login");
    }
  }, []);

  if (user._id) {
    return <Outlet />;
  }
  return null;
}
