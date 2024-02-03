import { Link } from "react-router-dom";

const Academics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-sky-200 to-red-200 flex flex-col items-center pt-10">
      <h1 className="text-center text-9xl font-bold mt-24 mb-12">Academics</h1>
      <button className="hover:text-red-400 hover:scale-110 duration-500 ease-in-out text-2xl font-semibold">
        <Link to="/">Home 🏠</Link>
      </button>
      <div className="text-lg">
        <p className="mb-4 mt-10">
          I am a data science major at UCSD's{" "}
          <b>Halicioglu Data Science Institute.</b>
        </p>
        <p className="mt-4">Relevant courses I have taken include:</p>
        <ol className="list-disc">
          <li>DSC 10: Introduction to Data Science</li>
          <li>DSC 20: Introduction to Programming</li>
          <li>DSC 40A: Theoretical Foundations of Data Science</li>
          <li>MATH 18: Linear Algebra</li>
          <li>MATH 20A: Calculus for Science and Engineering</li>
          <li>MATH 20B: Calculus for Science and Engineering</li>
          <li>
            MATH 20C: Calculus and Analytical Geometry for Science and
            Engineering
          </li>
          <li>MATH 20D: Introduction to Differential Equations</li>
          <li>MATH 20E: Vector Calculus</li>
        </ol>
        <p className="my-4">
          I have chosen to concentrate in artificial intelligence and machine
          learning.
        </p>
        <p className="my-4">
          As of the Winter 2024 academic quarter, I have a 4.00 GPA.
        </p>
      </div>
    </div>
  );
};

export default Academics;
