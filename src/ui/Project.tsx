import { motion } from "framer-motion";
import { FC } from "react"
import { Card } from "./Card";

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
      <a href={demoLink} className="text-blue-500 hover:underline mr-4">Live Demo</a>
      <a href={githubLink} className="text-blue-500 hover:underline">GitHub</a>
    </div>
    </Card>
  </motion.div>
  );
}

export default Project;