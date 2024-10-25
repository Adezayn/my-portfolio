import { FC, ReactElement } from "react"

interface Header{
  children: ReactElement | string
}
const Header: FC<Header> = ({children}) => {
  return (
    <div className="header">{children}</div>
  )
}

export default Header