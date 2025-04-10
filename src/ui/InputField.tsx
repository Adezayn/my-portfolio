import { FC } from "react";

interface Input {
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};
const InputField:FC<Input> = ({inputHandler, value}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={inputHandler}
    />
  );
}

export default InputField