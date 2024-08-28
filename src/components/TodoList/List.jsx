import { useDispatch, useSelector } from "react-redux";
import {
  selectSortedTodos,
  // selectTodos,
  selectUncompletedTodosMemo,
} from "../../redux/todos/selectors";
// import { deleteTodo } from "../../redux/todos/slice";
import { selectFilter } from "../../redux/filter/selectors";
import { deleteTodoThunk, toggleTodoThunk } from "../../redux/todos/operations";

export const List = () => {
  const todos = useSelector(selectSortedTodos);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const filteredData = todos.filter((item) =>
    item.todo.toLowerCase().includes(filter.toLowerCase())
  );

  const uncompletedTodos = useSelector(selectUncompletedTodosMemo);
  return (
    <div>
      <h1>Uncompleted: {uncompletedTodos}</h1>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => dispatch(toggleTodoThunk(item))}
            />
            <p>{item.todo}</p>
            <button onClick={() => dispatch(deleteTodoThunk(item.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
