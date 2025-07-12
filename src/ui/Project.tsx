import { motion } from "framer-motion";
import { FC } from "react"
import { Card } from "./Card";
import { Link } from "react-router-dom";

const Project:FC<Project> = ({ name, description, demoLink, githubLink, techStack, thumbnail }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Card>
    <div className="p-8">
      <h3 className="text-xl font-medium mb-2">{name}</h3>
      <p className={`text-gray-700 dark:text-gray-300 mb-2`}>{description}</p>
      <img src={thumbnail} alt={name} className="rounded-2xl"/>
      <div className="mt-5">
           <div className="flex gap-2 items-end flex-wrap">
            {techStack.map(tech => <p className="text-sm last:border-r-0 border-r pr-2 font-semibold" key={tech}>{tech}</p>)}
          </div>
      </div>
       <div className="flex flex-col md:flex-row gap-4 ml-6 md:ml-0 mt-4 ">
          <Link to={demoLink} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">🔗 Live Demo</Link>
          {githubLink && <Link to={githubLink} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">🐙 GitHub</Link>}
          {/* <Link to={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">📊 App Insights</Link> */}
       </div>
    </div>
    </Card>
  </motion.div>
  );
}

export default Project;