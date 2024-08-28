import { useDispatch } from "react-redux";
import { changeSortType } from "../../redux/todos/slice";

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(changeSortType("all"))}>All</button>
      <button onClick={() => dispatch(changeSortType("completed"))}>
        Completed
      </button>
      <button onClick={() => dispatch(changeSortType("active"))}>Active</button>
    </div>
  );
};

export default Filter;
