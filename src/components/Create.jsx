import { useContext, useState } from "react";
import UserContext from "../context/contexts";
import TrainingContext from "../context/trainingContext";
import { useNavigate } from "react-router";

export default function Create() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [timeToComplete, setTimeToComplete] = useState(0);

  const { user } = useContext(UserContext);
  const { createTraining } = useContext(TrainingContext);
  const navigate = useNavigate();

  const titleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const typeOnChange = (e) => {
    setType(e.target.value);
  };

  const descriptionOnChange = (e) => {
    setDescription(e.target.value);
  };

  const timeOnChange = (e) => {
    setTimeToComplete(e.target.value);
  };

  const createHandler = async () => {
    if (!user._id) {
      alert("You cannot create training!");
      return null;
    }

    try {
      await createTraining(
        {
          title,
          type,
          description,
          timeToComplete,
          likes: [],
        },
        user.accessToken
      );

      navigate("/catalog");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="centering">
        {/* <p className="error-message">{{ msg }}</p> */}

        <form action={createHandler}>
          <div className="container-create">
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
              value={title}
              onChange={titleOnChange}
            />
            {/* <p className="error">Title is required.</p> */}
            {/* <p className="error">Title must be at least 6 characters long.</p> */}

            <label htmlFor="typeTraining">
              <b>Type</b>
            </label>
            <select
              name="typeTraining"
              id="typeTraining"
              value={type}
              onChange={typeOnChange}
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
              value={description}
              onChange={descriptionOnChange}
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
              value={timeToComplete}
              onChange={timeOnChange}
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
