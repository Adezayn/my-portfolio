import { motion } from "framer-motion";
import { FC } from "react"
import { Card } from "./Card";
import { Link } from "react-router-dom";

const Project:FC<Project> = ({ name, description, demoLink, githubLink }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Card>
    <div className="p-4">
      <h3 className="text-xl font-medium mb-2">{name}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-2">{description}</p>
       <div className="flex flex-col md:flex-row gap-4 ml-6 md:ml-0 mt-4 ">
          <Link to={demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">🔗 Live Demo</Link>
          {githubLink && <Link to={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">🐙 GitHub</Link>}
          {/* <Link to={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">📊 App Insights</Link> */}
       </div>
    </div>
    </Card>
  </motion.div>
  );
}

export default Project;