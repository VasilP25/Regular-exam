import { useContext, useEffect, useState } from "react";
import TrainingContext from "../context/trainingContext";
import UserContext from "../context/contexts";
import { Link } from "react-router";
import SingleTraining from "./singleTraining";

export default function Mytrainings() {
  const { getAll } = useContext(TrainingContext);
  const { user } = useContext(UserContext);
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAll();

      if (result) {
        setTrainings(
          result.filter((training) => training._ownerId === user._id)
        );
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="container-catalog">
        {trainings.length > 0 ? (
          trainings.map((training) => (
            <SingleTraining
              key={training._id}
              training={training}
            ></SingleTraining>
          ))
        ) : (
          <div className="empty-catalog">
            <h3>Каталогът е празен</h3>

            <Link to="/create" className="btn">
              Добави
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
