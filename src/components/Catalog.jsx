import { useContext, useEffect, useState } from "react";
import TrainingContext from "../context/trainingContext";

export default function Catalog() {
  const { getAll } = useContext(TrainingContext);
  const data = getAll();
  const [trainings, setTrainings] = useState([]);

  //   useEffect(() => {
  //     setTrainings(data);
  //   }, [data]);
  console.log(data);

  return <></>;
}
