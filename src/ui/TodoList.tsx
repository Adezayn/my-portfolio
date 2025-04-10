import { initalTodoList } from "../data"
import Todo from "./Todo"


const TodoList = () => {
  return (
    <div>
      {initalTodoList.map((todo) => (
        <Todo {...todo} />
      ))}
    </div>
  );
}

export default TodoList