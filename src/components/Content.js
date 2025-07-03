import NavBar from "./NavBar";
import Skills from "./Skills";
import Projects from "./Projects";
import Whatiamdoing from "./Whatiamdoing";
import SectionTitle from "./SectionTitle";
import Contact from "./Contact";

function Content() {
  return (
    <div className="border bg-[var(--color-card-bg)] border-[var(--color-border)] p-4 rounded-md col-span-12 lg:col-span-12 xl:col-span-9">
      <NavBar />
      <div className="py-10">
        <SectionTitle line1="Front End" line2="Developer"/>
          <p className=" w-full md:w-[500px] break-words text-base sm:text-lg text-[var(--color-text-secondary)]">
            I am a skilled Front-End Developer with 1 year of experience. I specialize in creating intuitive and engaging user experiences, transforming innovative ideas into beautifully crafted and functional products. My passion lies in delivering cutting-edge solutions that align with user needs and industry standards.
          </p>
        <div className="flex gap-5 md:gap-10 mt-16">
  <div className="text-[var(--color-text)] text-center">
    <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[var(--color-text)]">+1</h2>
    <p className="text-[var(--color-text-secondary)] uppercase text-sm sm:text-lg break-words">
      Years of <br /> Experience
    </p>
  </div>

  <div className="text-[var(--color-text)] text-center">
    <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[var(--color-text)]">+20</h2>
    <p className="text-[var(--color-text-secondary)] uppercase text-sm sm:text-lg break-words">
      Projects <br /> Completed
    </p>
  </div>

  <div className="text-[var(--color-text)] text-center">
    <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[var(--color-text)]">+10</h2>
    <p className="text-[var(--color-text-secondary)] uppercase text-sm sm:text-lg break-words">
      Worldwide <br /> Clients
    </p>
  </div>
        </div>
      <Whatiamdoing/>
      <Skills/>
      <Projects/>
      <Contact />
      
      </div>

      
    </div>
  );
}

export default Content;
