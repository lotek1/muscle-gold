import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }
    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <div className="workout-info">{workout.info}</div>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Number of reps or minutes: </strong>
        {workout.reps}
      </p>
      <p>
        {workout.createdAt}
        {/* {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })} */}
      </p>
      <span onClick={handleClick}>
        <DeleteForeverOutlinedIcon fontSize="medium" aria-label="Delete" />
      </span>
    </div>
  );
};

export default WorkoutDetails;
