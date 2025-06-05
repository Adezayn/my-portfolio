

import { IoCopyOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="pt-10">
      <p className="block md:hidden font-bold">DOLAPO ADEBANJO</p>
      <div className="hidden md:flex justify-between items-center">
      <div className="flex gap-20 items-center">
        <p className="font-bold">DOLAPO ADEBANJO</p>
        <nav className="hidden lg:flex gap-10">
            <p className="text-sm cursor-pointer hover:underline transition duration-300">ABOUT</p>
            <p className="text-sm cursor-pointer hover:underline transition duration-300" ><a href="#projects">PROJECTS</a></p>
            <p className="text-sm cursor-pointer hover:underline transition duration-300">RESUME</p>
          </nav>
      </div>
      <div className="flex gap-5 items-center text-sm">
          <p>LET'S CONNECT 👉🏼</p>
          <div className="bg-white px-4 py-2 rounded-full flex items-center gap-2"><p>dolapomola@gmail.com</p><IoCopyOutline /></div>
      </div>
      </div>
    </div>
  );
}

export default Header