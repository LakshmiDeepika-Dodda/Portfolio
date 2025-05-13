
import './App.css';
import ProjectsComponent from './components/ProjectsComponent';
import AboutComponent from './components/AboutComponent';
import SkillsComponent from './components/SkillsComponent';
import IntroComponent from './components/IntroComponent';
import ExperienceComponent from './components/ExperienceComponent';


function App() {
  return (
    <div className="bg-[#0a192f] text-[#ccd6f6] font-sans min-h-screen
    subpixel-antialiased tracking-wide w-full p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left fixed column */}
        <div className=" lg:sticky lg:top-10 h-fit md:p-5">
          <IntroComponent />
        </div>

        {/* Scrollable sections */}
        <div className="flex flex-col gap-16 m-2 md:p-6 lg:pr-10">
          <section id="about">
            <div className="sticky top-0 lg:hidden">
              <h2 className=" flex text-md  pt-10 uppercase
              font-semibold bg-[#0a192f] item-center p-5">About</h2>
            </div>
            <div>
              <AboutComponent />
            </div>

          </section>
          <section id="experience">
            <div className="sticky top-0 lg:hidden">
              <h2 className=" flex text-md pt-10 uppercase
              font-semibold bg-[#0a192f] item-center p-5">Experience</h2>
            </div>
            <div>
              <ExperienceComponent />
            </div></section>
          <section id="skills">
            <div className="sticky top-0 lg:hidden">
              <h2 className=" flex text-md  pt-10 uppercase
              font-semibold bg-[#0a192f] item-center p-5">Skills</h2>
            </div>
            <div>
              <SkillsComponent />
            </div></section>
          <section id="projects">
            <div className="sticky top-0 lg:hidden">
              <h2 className=" flex text-md pt-10 uppercase
              font-semibold bg-[#0a192f] item-center p-5">Projects</h2>
            </div>
            <div>
              <ProjectsComponent />
            </div>
          </section>
        </div>

      </div>
    </div>

  );
}


export default App;
