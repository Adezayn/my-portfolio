import { FC } from "react"
interface Button {
  title?: string;
  style?: string
}
const Button:FC<Button> = ({title, style}) => {
  return (
    <div className={`btn ${style}`}>{title}</div>
  )
}

export default Button