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
      if (!response.ok) {
        alert(result.message);
        return null;
      }
      return result;
    } catch (error) {
      alert(error.message);
    }
  };
  const getAll = async () => {
    try {
      const response = await fetch("http://localhost:3030/data/trainings");

      const result = await response.json();

      return result;
    } catch (error) {
      alert(error.message);
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
    const response = await fetch(`http://localhost:3030/data/trainings/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "X-Authorization": accessToken,
      },
    });
    if (!response.ok) {
      alert("Something hets wrong!");
      return null;
    }
    const result = response.json();
    return result;
  };

  const updateOne = async (id, accessToken, data) => {
    const response = await fetch(`http://localhost:3030/trainings/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        "X-Authorization": accessToken,
      },
      body: JSON.stringify(data),
    });
    const result = response.json();

    return result;
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
