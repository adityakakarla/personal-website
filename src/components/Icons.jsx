import LinkedIn from "../images/linkedin.png";
import Github from "../images/github.png";
import Email from "../images/email.png";
import Icon from "./Icon.jsx";

const Icons = () => {
  return (
    <div className="flex justify-center mb-4">
      <Icon
        link="https://www.linkedin.com/in/aditya-kakarla/"
        src={LinkedIn}
        alt="LinkedIn icon"
      />
      <Icon
        link="https://github.com/adityakakarla"
        src={Github}
        alt="Github icon"
      />
      <Icon link="mailto:adi@adikakarla.com" src={Email} alt="Email icon" />
    </div>
  );
};

export default Icons;
