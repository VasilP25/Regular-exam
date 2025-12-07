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

    console.log(trainings);
  }, []);

  return (
    <>
      <div class="container-catalog">
        {trainings.length > 0 ? (
          trainings.map((training) => (
            <SingleTraining
              key={training._id}
              training={training}
            ></SingleTraining>
          ))
        ) : (
          <div class="empty-catalog">
            <h3>Каталогът е празен</h3>

            <Link to="/create" class="btn">
              Добави
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
