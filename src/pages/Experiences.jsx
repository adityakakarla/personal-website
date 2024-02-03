import Experience from "../components/Experience";
import experiences from "../json/experiences.json";
import { Link } from "react-router-dom";

const Experiences = () => {
  return (
    <div className="px-3 min-h-screen bg-gradient-to-b from-blue-50 via-sky-200 to-red-200 flex flex-col items-center pt-10">
      <h1 className="text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mt-24 mb-12">Experiences</h1>
      <button className="hover:text-red-400 hover:scale-110 duration-500 ease-in-out text-2xl font-semibold">
        <Link to="/">Home 🏠</Link>
      </button>
      <div className="text-center">
        {Object.keys(experiences).map((experience, index) => (
          <div key={index} className="m-10">
            <Experience experience={experiences[experience]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
