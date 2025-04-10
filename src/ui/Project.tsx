import { motion } from "framer-motion";
import { FC } from "react"
import { Card, CardContent } from "./Card";

const Project:FC = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Card>
      <CardContent className="p-4">
        <h3 className="text-xl font-medium mb-2">Vendor Review App</h3>
        <p className="text-gray-700 mb-2">
          A simple app to check Instagram vendors' authenticity. Users can browse vendor profiles,
          read reviews, and leave feedback.
        </p>
        <a href="#" className="text-blue-500 hover:underline mr-4">Live Demo</a>
        <a href="#" className="text-blue-500 hover:underline">GitHub</a>
      </CardContent>
    </Card>
  </motion.div>
  );
}

export default Project;