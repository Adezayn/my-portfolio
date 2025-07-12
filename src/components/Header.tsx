
import { TbMailFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin,  FaGithubSquare } from "react-icons/fa";

const Header = () => {
  return (
    <div className="pt-10">
      <p className="block md:hidden font-bold">DOLAPO ADEBANJO</p>
      <div className="hidden md:flex justify-between items-center">
      <div className="flex gap-20 items-center">
        <p className="font-bold">DOLAPO ADEBANJO</p>
        <nav className="hidden lg:flex gap-10">
            {/* <p className="text-sm cursor-pointer hover:underline transition duration-300">ABOUT</p> */}
            <p className="text-sm cursor-pointer hover:underline transition duration-300" ><a href="#projects">PROJECTS</a></p>
            <a className="text-sm cursor-pointer hover:underline transition duration-300" href="https://drive.google.com/file/d/1PFH6z-kBYqfBfBOdjhx6eYhqqkoEcME4/view?usp=sharing" target="_blank" rel="noopener noreferrer">RESUME</a>
          </nav>
      </div>
      <div className="flex gap-5 items-center text-sm">
          <p>LET'S CONNECT 👉🏼</p>
          <div className="bg-white px-4 py-2 rounded-full flex items-end gap-4">
             <Link to="https://www.linkedin.com/in/dolapoadebanjo/">< FaLinkedin size={18}/></Link>
             <Link to="https://x.com/dolapo_adebanjo"><FaSquareXTwitter size={18}/></Link>
             <Link to="mailto:dolapomola@gmail.com"><TbMailFilled size={20}/></Link>
             <Link to="https://github.com/Adezayn"><FaGithubSquare size={20}/></Link>
          </div>
      </div>
      </div>
    </div>
  );
}

export default Header