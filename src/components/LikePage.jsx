import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import UserContext from "../context/contexts";
import TrainingContext from "../context/trainingContext";

export default function Like() {
  const navigate = useNavigate();
  const state = useLocation();
  const { user } = useContext(UserContext);
  const { getOne, updateOne } = useContext(TrainingContext);
  const [training, setTraining] = useState({});
  const fetchGetoOne = async () => {
    const result = await getOne(state.state.id);
    setTraining(() => ({
      ...result,
      likes: [...result.likes, user._id],
    }));
  };
  const update = async () => {
    try {
      await updateOne(state.state.id, user.accessToken, training);
      navigate("/catalog");
    } catch (error) {
      alert(error.message);
      return navigate("/catalog");
    }
  };

  useEffect(() => {
    fetchGetoOne();
  }, []);

  useEffect(() => {
    if (training.likes) {
      update();
    }
  });

  return <></>;
}
