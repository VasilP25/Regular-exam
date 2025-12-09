import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import TrainingContext from "../context/trainingContext";
import SingleTraining from "./singleTraining";

export default function Search() {
  const [trainigs, setTrainings] = useState([]);
  const [searchWord, setSearchword] = useState("");
  const searchOnChange = (e) => {
    setSearchword(e.target.value);
  };

  const { getAll } = useContext(TrainingContext);
  const fetchGetAll = async () => {
    const result = await getAll();

    setTrainings(result.filter((x) => x.title.includes(searchWord)));
  };
  useEffect(() => {
    fetchGetAll();
  }, [searchWord]);
  return (
    <>
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Търси транировки..."
          value={searchWord}
          onChange={searchOnChange}
        />

        <div className="container-catalog">
          {/* <div className="container"> */}
          {/* <app-single-training-component></app-single-training-component> */}
          {trainigs.length > 0 ? (
            trainigs.map((training) => (
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
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
