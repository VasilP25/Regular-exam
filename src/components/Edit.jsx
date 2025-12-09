import { useNavigate, useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import TrainingContext from "../context/trainingContext";
import UserContext from "../context/contexts";

export default function Edit() {
  const { _id } = useParams();
  const { getOne, updateOne } = useContext(TrainingContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [trainings, setTrainings] = useState({});

  // const [title, setTitle] = useState("");
  // const [type, setType] = useState("");
  // const [description, setDescription] = useState("");
  // const [timeToComplete, setTimeToComplete] = useState(0);

  const fetchUpdate = async () => {
    try {
      await updateOne(_id, user.accessToken, trainings);

      navigate("/catalog");
    } catch (error) {
      alert(error.message);
    }
  };

  const onChange = (e) => {
    if (e.target.name === "timeToComplete") {
      setTrainings((state) => ({
        ...state,
        [e.target.name]: +e.target.value,
      }));
    } else {
      setTrainings((state) => ({
        ...state,
        [e.target.name]: e.target.value,
      }));
    }
  };

  // const typeOnChange = (e) => {
  //   setType(e.target.value);
  // };

  // const descriptionOnChange = (e) => {
  //   setDescription(e.target.value);
  // };

  // const timeOnChange = (e) => {
  //   setTimeToComplete(e.target.value);
  // };

  useEffect(() => {
    getOne(_id).then((result) => {
      setTrainings(result);
    });
  }, []);

  return (
    <>
      <div className="centering">
        {/* <p className="error-message">{{ msg }}</p> */}

        <form action={fetchUpdate}>
          <div className="container-create">
            <h1>Edit training</h1>
            <hr />

            <label htmlFor="title">
              <b>Title</b>
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter Title"
              name="title"
              value={trainings?.title}
              onChange={onChange}
            />
            {/* <p className="error">Title is required.</p> */}
            {/* <p className="error">Title must be at least 6 characters long.</p> */}

            <label htmlFor="typeTraining">
              <b>Type</b>
            </label>
            <select
              name="typeTraining"
              id="typeTraining"
              value={trainings?.type}
              onChange={onChange}
            >
              <option value=""></option>
              <option value="cardio">Cardio</option>
              <option value="strength">Strength</option>
            </select>
            {/* <p className="error">Type is required.</p> */}

            <label htmlFor="description">
              <b>Description</b>
            </label>
            <textarea
              type="text"
              placeholder="Enter Description"
              name="description"
              id="description"
              value={trainings?.description}
              onChange={onChange}
            ></textarea>
            {/* <p className="error">Description is required.</p> */}
            {/* <p className="error">Description must be at least 10 characters long.</p> */}
            {/* <p className="error">Description must be most 100 characters long.</p> */}

            <label htmlFor="timeToComplete">
              <b>Time to complete[min]</b>
            </label>
            <input
              type="number"
              placeholder="Time to complete"
              name="timeToComplete"
              id="timeToComplete"
              value={trainings?.timeToComplete}
              onChange={onChange}
            />
            {/* <p className="error">Time to complete is required.</p> */}
            {/* <p className="error">Time to complete must be greater than 0.</p> */}
            <hr />
            <button type="submit" className="registerbtn">
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
