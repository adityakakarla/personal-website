import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import Academics from "./pages/Academics";

const App = () => {
  return (
    <div className="font-apple text-sky-950">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />}/>
          <Route path="/experience" element={<Experiences />}/>
          <Route path="/academics" element={<Academics/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
