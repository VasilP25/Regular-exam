import { useContext, useEffect, useState } from "react";
import TrainingContext from "../context/trainingContext";
import { Link } from "react-router";
import SingleTraining from "./singleTraining";

export default function Catalog() {
  const { getAll } = useContext(TrainingContext);
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAll();

      setTrainings(result);
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
