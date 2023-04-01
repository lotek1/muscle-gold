import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

import { formatDistance } from "date-fns";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const WorkoutDetails = ({ workout }) => {
  const time = formatDistance(new Date(), new Date(workout.createdAt));

  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };
  console.log("workout", workout);
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <div className="workout-info" textarea>
        {workout.info}
      </div>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Number of reps or minutes: </strong>
        {workout.reps}
      </p>
      <p>{time} ago</p>
      <span onClick={handleClick}>
        <DeleteForeverOutlinedIcon fontSize="medium" aria-label="Delete" />
      </span>
    </div>
  );
};

export default WorkoutDetails;
