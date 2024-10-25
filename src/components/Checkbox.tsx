import { FC } from "react";
import tick from "../assets/tick.svg";

type Checkbox = {
  status: boolean
}
const Checkbox:FC<Checkbox> = ({status}) => {
  return (
    <div
      className={`checkbox ${
        status ? "checkbox__checked" : "checkbox__unchecked"
      }`}
    >
      {status && <img src={tick} />}
    </div>
  );
}

export default Checkbox