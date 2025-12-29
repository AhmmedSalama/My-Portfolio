import SectionTitle from "./SectionTitle";
import Card from "./Card";

function Projects() {
  const filterCards = (btnText) => {
    const btns = document.querySelectorAll("button");
    const cards = document.querySelectorAll(".Card");

    // شيل كلاس التفعيل من كل الأزرار
    btns.forEach((b) => b.classList.remove("activeBtnFilter"));

    // فعّل الزرار اللي اتضغط عليه
    btns.forEach((b) => {
      if (b.textContent === btnText) {
        b.classList.add("activeBtnFilter");
      }
    });

    // فلترة الكروت
    cards.forEach((card) => {
      const type = card.getAttribute("data-type");
      if (btnText === "All" || type === btnText) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  };

  return (
    <div id="Portfolio" className="mt-8">
      <SectionTitle line1="Recent" line2="Projects" />

      <div className="flex flex-wrap gap-2 sm:gap-4 mt-8 justify-center sm:justify-start">
        <button
          onClick={() => filterCards("All")}
          className="text-[var(--color-text-secondary)] activeBtnFilter hover:text-[var(--color-accent)] transition-colors duration-300 whitespace-nowrap py-2 px-3 text-sm sm:text-base"
        >
          All
        </button>
        <button
          onClick={() => filterCards("Dashboard")}
          className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300 whitespace-nowrap py-2 px-3 text-sm sm:text-base"
        >
          Dashboard
        </button>
        <button
          onClick={() => filterCards("Landing Pages")}
          className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300 whitespace-nowrap py-2 px-3 text-sm sm:text-base"
        >
          Landing Pages
        </button>
        <button
          onClick={() => filterCards("E-commerce")}
          className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300 whitespace-nowrap py-2 px-3 text-sm sm:text-base"
        >
          E-commerce
        </button>
          <button
          onClick={() => filterCards("Web Apps")}
          className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300 whitespace-nowrap py-2 px-3 text-sm sm:text-base"
        >
          Web Apps
        </button>
      </div>

      <div className="Card-container mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          type="Dashboard"
          className="Card block"
          title="Dashboard Project"
          description="Project description"
          image="./imgs/Projects-img/dashboard.webp"
          demoLink="https://flourishing-syrniki-221e65.netlify.app/"
          codeLink=""
        />
        <Card
          type="Landing Pages"
          className="Card block"
          title="Landing Page"
          description="Project description"
          image="./imgs/Projects-img/landpage.webp"
          demoLink="https://glittery-florentine-72fa78.netlify.app/"
          codeLink=""
        />
        <Card
          type="E-commerce"
          className="Card block"
          title="E-commerce Site"
          description="Project description"
          image="./imgs/Projects-img/Basket-shop.png"
          demoLink="https://ahmmedsalama.github.io/Basket-shop"
          codeLink=""
        />
          <Card
          type="Web Apps"
          className="Card block"
          title="Weather App"
          description="Project description"
          image="./imgs/Projects-img/WeatherApp.webp"
          demoLink="https://ahmeedsalama.github.io/WeatherApp"
          codeLink=""
        />
          <Card
          type="Web Apps"
          className="Card block"
          title="Notes App"
          description="Project description"
          image="./imgs/Projects-img/NotesApp.webp"
          demoLink="https://moonlit-sprinkles-7a503f.netlify.app/"
          codeLink=""
        />
          <Card
          type="Web Apps"
          className="Card block"
          title="Personal Portfolio Website"
          description="Project description"
          image="./imgs/Projects-img/Portfolio.webp"
          demoLink="https://ahmeedsalama.github.io/JohnDoePort/"
          codeLink=""
        />
         <Card
          type="Web Apps"
          className="Card block"
          title="PRODCT MANGEMNT SYSTEM"
          description="Project description"
          image="./imgs/Projects-img/PRODCTMANGEMNTSYSTEM.webp"
          demoLink="https://steady-sunburst-ca492f.netlify.app/"
          codeLink=""
        />
          <Card
          type="E-commerce"
          className="Card block"
          title="E-commerce Site"
          description="E-commerce Site"
          image="./imgs/Projects-img/style-loom.webp"
          demoLink="https://style-loom-psi.vercel.app"
          codeLink="https://github.com/AhmmedSalama/Style.Loom"
        />
          <Card
            type="Web Apps"
            className="Card block"
            title="Anime world (React & API)"
            description="Explore the world of anime — a lightweight React app that fetches, previews, and searches anime via an API with a fast, responsive interface."
            image="./imgs/Projects-img/animeworld.webp"
            demoLink="https://anime-world-six.vercel.app"
            codeLink="https://github.com/AhmmedSalama/Anime-World"
          />    
          <Card
          type="Web Apps"
          className="Card block"
          title="Product Dashboard(React & api)"
          description="Project description"
          image="./imgs/Projects-img/ProductDashboard.webp"
          demoLink="https://sunny-fenglisu-f525c6.netlify.app/"
          codeLink=""
        />
          <Card
          type="Web Apps"
          className="Card block"
          title="Movies App"
          description="Project description"
          image="./imgs/Projects-img/moviesapp.png"
          demoLink="https://ahmmedsalama.github.io/Movies_App-master/"
          codeLink="https://github.com/AhmmedSalama/Movies_App-master"
        />   
          <Card
          type="Web Apps"
          className="Card block"
          title="Zekr"
          description="Islamic Platform"
          image="./imgs/Projects-img/zekr.png"
          demoLink="https://zekr-beta.vercel.app/"
          codeLink="https://github.com/AhmmedSalama/zekr"
        />  
      </div>
    </div>
  );
}

export default Projects;




