import { Link } from "react-router-dom";
import Icons from "./Icons";

const Intro = () => {
  return (
    <>
      <div className="mb-5 text-5xl font-bold">
        <h1 className="text-center">My name is Aditya Kakarla</h1>
      </div>
      <div className="text-lg text-center mt-3 mb-36">
        <p className="my-4">
          I am a student at the <b>University of California, San Diego.</b>
        </p>
        <p className="my-4">
          I am a second-year data science major at the Halicioglu Data Science
          Institute.
        </p>
        <p className="my-4">
          I am interested in software engineering, data analytics, and data
          science. In particular, I enjoy creating interactive artificial
          intelligence and machine learning tools.
        </p>
      </div>
    </>
  );
};

export default Intro;
