import Project from "../components/Project";
import projects from "../json/projects.json";

const Projects = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-sky-200 to-red-200 flex flex-col items-center pt-10">
      <h1 className="text-center text-9xl font-bold my-24">Projects</h1>
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
