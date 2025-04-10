

export const Card = ({ title, description, demoLink, githubLink }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-800 dark:text-white">
      <div className="p-4">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-2">{description}</p>
        <a href={demoLink} className="text-blue-500 hover:underline mr-4">Live Demo</a>
        <a href={githubLink} className="text-blue-500 hover:underline">GitHub</a>
      </div>
    </div>
  );
};

export const CardContent = ({ title, description, demoLink, githubLink }) => {
  return (
    <div className="p-4">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-2">{description}</p>
      <a href={demoLink} className="text-blue-500 hover:underline mr-4">Live Demo</a>
      <a href={githubLink} className="text-blue-500 hover:underline">GitHub</a>
    </div>
  );
};
