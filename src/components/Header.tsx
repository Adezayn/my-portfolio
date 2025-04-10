


const Header = () => {
  return (
    <div>
      <p className="pt-10 block md:hidden">DOLAPO ADEBANJO</p>
      <div className="hidden md:flex pt-10 justify-between items-center">
      <div className="flex gap-20">
        <p>DOLAPO ADEBANJO</p>
        <nav className="hidden lg:flex gap-10">
            <p className="cursor-pointer hover:underline transition duration-300">ABOUT</p>
            <p className="cursor-pointer hover:underline transition duration-300">PROJECTS</p>
          </nav>
      </div>
      <div className="flex gap-10 items-center">
          <p>LET'S CONNECT 👉🏼</p>
          <div className="bg-white px-4 py-2 rounded-full">dolapomola@gmail.com </div>
      </div>
      </div>
    </div>
  );
}

export default Header