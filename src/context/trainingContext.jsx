import { createContext } from "react";

const TrainingContext = createContext({
  training: {
    title: "",
    type: "",
    description: "",
    timeToComplete: 0,
  },
  createTraining() {},
  getAll() {},
  getOne() {},
  deleteOne() {},
  updateOne() {},
});

export function TrainingProvider({ children }) {
  const createTraining = async (data, accessToken) => {
    try {
      const response = await fetch("http://localhost:3030/data/trainings", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "X-Authorization": accessToken,
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      alert(error.message);
      return null;
    }
  };
  const getAll = async () => {
    try {
      const response = await fetch("http://localhost:3030/data/trainings");

      const result = await response.json();

      return result;
    } catch (error) {
      alert(error.message);
      return null;
    }
  };
  const getOne = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3030/data/trainings/${id}`
      );

      const result = await response.json();

      return result;
    } catch (error) {
      alert(error.message);
    }
  };
  const deleteOne = async (id, accessToken) => {
    try {
      const response = await fetch(
        `http://localhost:3030/data/trainings/${id}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            "X-Authorization": accessToken,
          },
        }
      );
      if (!response.ok) {
        alert("Something hets wrong!");
        return null;
      }
      const result = response.json();
      return result;
    } catch (error) {
      alert(error.message);
      return null;
    }
  };

  const updateOne = async (id, accessToken, data) => {
    try {
      const response = await fetch(
        `http://localhost:3030/data/trainings/${id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            "X-Authorization": accessToken,
          },
          body: JSON.stringify(data),
        }
      );
      const result = response.json();

      return result;
    } catch (error) {
      alert(error.message);
    }
  };

  const trainingContextData = {
    createTraining,
    getAll,
    getOne,
    deleteOne,
    updateOne,
  };

  return (
    <>
      <TrainingContext value={trainingContextData}>{children}</TrainingContext>
    </>
  );
}

export default TrainingContext;
