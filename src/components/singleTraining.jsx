import { Link } from "react-router";

export default function SingleTraining({ training }) {
  return (
    <>
      <div class="card">
        <h2>{training.title}</h2>
        <p className="type">{training.type}</p>
        <Link
          to={`details/${training._id}`}
          state={training}
          class="details-link"
        >
          Details
        </Link>
      </div>
    </>
  );
}
