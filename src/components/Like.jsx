import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import TrainingContext from "../context/trainingContext";
import UserContext from "../context/contexts";

export default function Like() {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const { createLike } = useContext(TrainingContext);
  const navigate = useNavigate();

  const fetchLike = async () => {
    await createLike({ id: id, userId: user._id }, user.accessToken);
  };

  useEffect(() => {
    fetchLike();
    navigate("/catalog");
  });
  console.log(id);

  return <></>;
}
