import Experience from "../components/Experience";
import experiences from "../json/experiences.json";

const Experiences = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-sky-200 to-red-200 flex flex-col items-center pt-10">
      <h1 className="text-center text-9xl font-bold my-24">Experiences</h1>

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
