import { FC } from "react"
import Checkbox from "./Checkbox"
import Button from "./Button"


const Todo:FC<Todo> = ({todoName, status}) => {
  return (
    <div className="todo">
      <div className="todo__subcontent">
        <Checkbox status={status} />
        <p className={`${status ? "strike-through": ""}`}>{todoName}</p>
      </div>
      <Button title="Edit" />
    </div>
  );
}

export default Todo