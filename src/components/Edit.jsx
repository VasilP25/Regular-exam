import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import TrainingContext from "../context/trainingContext";

export default function Edit() {
  const { _id } = useParams();
  const { getOne } = useContext(TrainingContext);
  const [training, setTraining] = useState({});

  const fetchOne = async () => {
    const result = await getOne(_id);

    setTraining(result);
  };
  useEffect(() => {
    const result = fetchOne();

    setTraining(result);
  }, []);

  return (
    <>
      <div className="centering">
        <div className="container-edit">
          <form>
            <h1>Create training</h1>
            <hr />

            <label htmlFor="title">
              <b>Title</b>
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter Title"
              name="title"
            />

            <label htmlFor="typeTraining">
              <b>Type</b>
            </label>
            <select name="typeTraining" id="typeTraining">
              <option value=""></option>
              <option value="cardio">Cardio</option>
              <option value="strength">Strength</option>
            </select>

            <label htmlFor="description">
              <b>Description</b>
            </label>
            <textarea
              type="text"
              placeholder="Enter Description"
              name="description"
              id="description"
            ></textarea>

            <label htmlFor="timeToComplete">
              <b>Time to complete[min]</b>
            </label>
            <input
              type="number"
              placeholder="Time to complete"
              name="timeToComplete"
              id="timeToComplete"
            />
            <hr />
            <button type="submit" className="registerbtn">
              Edit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
