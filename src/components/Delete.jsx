import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import TrainingContext from "../context/trainingContext";
import UserContext from "../context/contexts";

export default function Delete() {
  const navigate = useNavigate();
  const { _id } = useParams();
  const { deleteOne } = useContext(TrainingContext);
  const { user } = useContext(UserContext);
  console.log(_id);
  const deletefetch = async () => {
    await deleteOne(_id, user.accessToken);

    navigate("/catalog");
  };
  deletefetch();

  navigate("/catalog");

  return <></>;
}
