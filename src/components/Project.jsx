const Project = ({ project }) => {
  return (
    <div className="max-w-3xl bg-white rounded overflow-hidden shadow-lg text-left ease-in-out duration-500 hover:drop-shadow-2xl hover:scale-105">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <h1 className="ease-in-out duration-300 hover:text-red-400">
            <a href={project.link}>{project.name}</a>
          </h1>
        </div>
        {project.details.map((point, index) => (
          <li key={index} className="text-gray-700 text-base">
            {point}
          </li>
        ))}
      </div>
      <div className="px-6 pt-4 pb-2">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Project;
