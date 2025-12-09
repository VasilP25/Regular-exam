import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import UserContext from "../context/contexts";
import TrainingContext from "../context/trainingContext";

export default function Details() {
  const { _id } = useParams();
  const { user } = useContext(UserContext);
  const { getOne } = useContext(TrainingContext);
  const [training, setTraining] = useState({});
  const fetchTraining = async () => {
    const result = await getOne(_id);
    setTraining(result);
  };

  useEffect(() => {
    fetchTraining();
    if (training._id) {
      console.log(training);
    }
  }, []);

  return (
    <>
      <div className="container-card">
        <div className="card-details">
          <div className="card-header">
            <h2>{training.title}</h2>
            <span className="type">{training.type}</span>
          </div>
          <div className="card-body">
            <h3>Описание</h3>
            <p>{training.description}</p>
          </div>
          <div className="card-body">
            <h3>Време[мин]:</h3>
            <p>{training.timeToComplete}</p>
          </div>
          {/* <div className="card-body">
            <h3>Likes: {training.likes?.length}</h3>
          </div> */}
          {training._ownerId === user._id ? (
            <>
              <div className="card-footer">
                <Link
                  className="btn edit"
                  to={`/catalog/details/${training._id}/edit`}
                >
                  Edit
                </Link>

                {training && (
                  <Link
                    className="btn delete"
                    to={`/catalog/details/${training._id}/delete`}
                  >
                    Delete
                  </Link>
                )}
              </div>
            </>
          ) : (
            <></>
          )}
          {/* {user._id &&
          training._ownerId !== user._id &&
          !training.likes?.includes(user._id) ? (
            <>
              <div className="card-footer">
                <Link
                  className="btn edit"
                  to={`/like/${training._id}`}
                  state={{ id: training._id }}
                >
                  Like
                </Link>
              </div>
            </>
          ) : (
            <></>
          )} */}

          <div className="card-footer">
            {/* <div className="card-body">
            <h3>Thank you for your Like!</h3>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
