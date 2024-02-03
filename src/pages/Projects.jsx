import { Link } from "react-router-dom";
import Project from "../components/Project";
import projects from "../json/projects.json";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-sky-200 to-red-200 flex flex-col items-center pt-10">
      <h1 className="text-center text-9xl font-bold mt-24 mb-12">Projects</h1>
      <button className="hover:text-red-400 hover:scale-110 duration-500 ease-in-out text-2xl font-semibold">
        <Link to="/">Home 🏠</Link>
      </button>
      <div className="text-center">
        {Object.keys(projects).map((project, index) => (
          <div key={index} className="m-10">
            <Project project={projects[project]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
