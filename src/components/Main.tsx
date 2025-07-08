
import { motion } from "framer-motion";
import Project from "../ui/Project";
import { projects } from "../data";

 const Main = () => {
  return (
    <main className="min-h-screen text-gray-900 px-4 pt-10 font-sans">
      {/* Header */}
      <section className="mb-16 flex flex-col items-center gap-6" id="about">
       <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
       </motion.div>
        <motion.img
          src="/dolapo.webp" // Replace with your image path
          alt="Your profile"
          className=" h-72 rounded-[2vw] object-contain shadow-lg mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />
          <h1 className="text-6xl font-bold mb-2 text-center">FRONTEND ENGINEER</h1>
          <p className="text-sm text-gray-600 text-center w-full md:w:1/2 mx-auto">
         I build secure, accessible, and high-performance web apps for fintech, SaaS, healthtech, and mission-driven organizations.
         {/* with a strong focus on fintech solutions, SaaS products, healthtech platforms, and mission-driven organizations. */}
          </p>
        {/* <p>Open to remote work in Africa, UAE, Europe, USA</p> */}
         <p className="cursor-pointer hover:underline transition duration-300 md:hidden block">RESUME</p>
      </section>

      {/* Projects Section */}
      <motion.section
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        id="projects"
      >
       <div className="flex justify-between items-end mb-4">
         <h2 className="text-2xl font-semibold">Selected Projects</h2>
         {/* <Link to="/" className="text-sm hover:text-blue-500">View All</Link> */}
       </div>
        <div className="flex flex-col overflow-y-scroll gap-6 md:grid md:grid-cols-2">
         {projects.map(project => <Project {...project} key={project.id}/>)}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Dolapo Adebanjo. All rights reserved.
      </footer>
    </main>
  );
};

export default Main;
