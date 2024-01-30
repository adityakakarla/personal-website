import Intro from "../components/Intro";
import Icons from "../components/Icons";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="bg-gradient-to-b h-screen from-blue-50 via-sky-200 to-red-200 flex flex-col justify-between items-center pt-10">
      <div className="mt-48 max-w-3xl">
        <Intro />
        <div className="text-4xl my-8 font-bold text-center">
          <div className="my-4">
            <Link to="/projects">Projects</Link>
          </div>
          <div className="my-4">
            <Link to="/experience">Experience</Link>
          </div>
          <div className="my-4">
            <Link to="/academics">Academics</Link>
          </div>
        </div>
      </div>
      <Icons />
    </div>
  );
};

export default AboutMe;
