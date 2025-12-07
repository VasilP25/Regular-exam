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
});

export function TrainingProvider({ children }) {
  const createTraining = async (data, accessToken) => {
    console.log(data, accessToken);

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

  const trainingContextData = {
    createTraining,
    getAll,
  };

  return (
    <>
      <TrainingContext value={trainingContextData}>{children}</TrainingContext>
    </>
  );
}

export default TrainingContext;
