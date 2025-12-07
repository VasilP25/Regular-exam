import { useContext } from "react";
import { Link, useLocation } from "react-router";
import UserContext from "../context/contexts";

export default function Details() {
  const { state } = useLocation();
  console.log(state);
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="container-card">
        <div className="card-details">
          <div className="card-header">
            <h2>{state.title}</h2>
            <span className="type">{state.type}</span>
          </div>
          <div className="card-body">
            <h3>Описание</h3>
            <p>{state.description}</p>
          </div>
          <div className="card-body">
            <h3>Време[мин]:</h3>
            <p>{state.timeToComplete}</p>
          </div>
          <div className="card-body">
            <h3>Likes: {state.subscribers?.length}</h3>
          </div>
          {state._ownerId === user._id ? (
            <>
              <div className="card-footer">
                <Link className="btn edit">Edit</Link>
                <Link className="btn delete">Delete</Link>
              </div>
            </>
          ) : (
            <div className="card-footer">
              <Link className="btn edit">Like</Link>
            </div>
          )}

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
