import SectionTitle from "./SectionTitle";

function Skills() {
  return (
    <div id="Skills" className="mt-10">
      <SectionTitle line1="Things I’m" line2="Great At" />
      <div className="grid grid-cols-2 mt-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

        {/* HTML */}
        <div className="flex flex-col items-center w-full lg:w-auto p-4 bg-card-bg border border-[var(--color-border)] rounded-lg hover:shadow-lg transition-shadow opacity-100">
          <div className="text-[var(--color-accent)] mb-2 w-10 h-10 flex items-center justify-center">
            <img
              src="/imgs/icons/html.png"
              loading="lazy"
              alt="HTML Icon"
              className="object-contain max-w-full max-h-full"
              width={40}
              height={40}
            />
          </div>
          <h4 className="text-[var(--color-text)] text-xl font-semibold text-center">HTML</h4>
          <p className="text-[var(--color-text-secondary)] text-sm text-center mt-1">Markup Language</p>
        </div>

        {/* CSS */}
        <div className="flex flex-col items-center w-full lg:w-auto p-4 bg-card-bg border border-[var(--color-border)] rounded-lg hover:shadow-lg transition-shadow opacity-100">
          <div className="text-[var(--color-accent)] mb-2 w-10 h-10 flex items-center justify-center">
            <img
              src="/imgs/icons/css-3.png"
              loading="lazy"
              alt="CSS Icon"
              className="object-contain max-w-full max-h-full"
              width={40}
              height={40}
            />
          </div>
          <h4 className="text-[var(--color-text)] text-xl font-semibold text-center">CSS</h4>
          <p className="text-[var(--color-text-secondary)] text-sm text-center mt-1">Styling Language</p>
        </div>

        {/* JavaScript */}
        <div className="flex flex-col items-center w-full lg:w-auto p-4 bg-card-bg border border-[var(--color-border)] rounded-lg hover:shadow-lg transition-shadow opacity-100">
          <div className="text-[var(--color-accent)] mb-2 w-10 h-10 flex items-center justify-center">
            <img
              src="/imgs/icons/javascript.png"
              loading="lazy"
              alt="JavaScript Icon"
              className="object-contain max-w-full max-h-full"
              width={40}
              height={40}
            />
          </div>
          <h4 className="text-[var(--color-text)] text-xl font-semibold text-center">JavaScript</h4>
          <p className="text-[var(--color-text-secondary)] text-sm text-center mt-1">Dynamic Web</p>
        </div>

        {/* React */}
        <div className="flex flex-col items-center w-full lg:w-auto p-4 bg-card-bg border border-[var(--color-border)] rounded-lg hover:shadow-lg transition-shadow opacity-100">
          <div className="text-[var(--color-accent)] mb-2 w-10 h-10 flex items-center justify-center">
            <img
              src="/imgs/icons/react.png"
              loading="lazy"
              alt="React Icon"
              className="object-contain max-w-full max-h-full"
              width={40}
              height={40}
            />
          </div>
          <h4 className="text-[var(--color-text)] text-xl font-semibold text-center">React</h4>
          <p className="text-[var(--color-text-secondary)] text-sm text-center mt-1">Frontend Library</p>
        </div>

        {/* Tailwind */}
        <div className="flex flex-col items-center w-full lg:w-auto p-4 bg-card-bg border border-[var(--color-border)] rounded-lg hover:shadow-lg transition-shadow opacity-100">
          <div className="text-[var(--color-accent)] mb-2 w-10 h-10 flex items-center justify-center">
            <img
              src="/imgs/icons/Tailwind).png"
              loading="lazy"
              alt="Tailwind CSS Icon"
              className="object-contain max-w-full max-h-full"
              width={40}
              height={40}
            />
          </div>
          <h4 className="text-[var(--color-text)] text-xl font-semibold text-center">Tailwind CSS</h4>
          <p className="text-[var(--color-text-secondary)] text-sm text-center mt-1">Utility-First CSS</p>
        </div>

        {/* Bootstrap */}
        <div className="flex flex-col items-center w-full lg:w-auto p-4 bg-card-bg border border-[var(--color-border)] rounded-lg hover:shadow-lg transition-shadow opacity-100">
          <div className="text-[var(--color-accent)] mb-2 w-10 h-10 flex items-center justify-center">
            <img
              src="/imgs/icons/bootstrap.png"
              loading="lazy"
              alt="Bootstrap Icon"
              className="object-contain max-w-full max-h-full"
              width={40}
              height={40}
            />
          </div>
          <h4 className="text-[var(--color-text)] text-xl font-semibold text-center">Bootstrap</h4>
          <p className="text-[var(--color-text-secondary)] text-sm text-center mt-1">CSS Framework</p>
        </div>

        {/* Redux */}
        <div className="flex flex-col items-center w-full lg:w-auto p-4 bg-card-bg border border-[var(--color-border)] rounded-lg hover:shadow-lg transition-shadow opacity-100">
          <div className="text-[var(--color-accent)] mb-2 w-10 h-10 flex items-center justify-center">
            <img
              src="/imgs/icons/Redux.png"
              loading="lazy"
              alt="Redux Icon"
              className="object-contain max-w-full max-h-full"
              width={40}
              height={40}
            />
          </div>
          <h4 className="text-[var(--color-text)] text-xl font-semibold text-center">Redux</h4>
          <p className="text-[var(--color-text-secondary)] text-sm text-center mt-1">State Management</p>
        </div>

        {/* Git */}
        <div className="flex flex-col items-center w-full lg:w-auto p-4 bg-card-bg border border-[var(--color-border)] rounded-lg hover:shadow-lg transition-shadow opacity-100">
          <div className="text-[var(--color-accent)] mb-2 w-10 h-10 flex items-center justify-center">
            <img
              src="/imgs/icons/Git.png"
              loading="lazy"
              alt="Git Icon"
              className="object-contain max-w-full max-h-full"
              width={40}
              height={40}
            />
          </div>
          <h4 className="text-[var(--color-text)] text-xl font-semibold text-center">Git</h4>
          <p className="text-[var(--color-text-secondary)] text-sm text-center mt-1">Version Control</p>
        </div>

        {/* GitHub */}
        <div className="flex flex-col items-center w-full lg:w-auto p-4 bg-card-bg border border-[var(--color-border)] rounded-lg hover:shadow-lg transition-shadow opacity-100">
          <div className="text-[var(--color-accent)] mb-2 w-10 h-10 flex items-center justify-center">
            <img
              src="/imgs/icons/github.png"
              loading="lazy"
              alt="GitHub Icon"
              className="object-contain max-w-full max-h-full"
              width={40}
              height={40}
            />
          </div>
          <h4 className="text-[var(--color-text)] text-xl font-semibold text-center">GitHub</h4>
          <p className="text-[var(--color-text-secondary)] text-sm text-center mt-1">Code Hosting</p>
        </div>

        {/* API */}
        <div className="flex flex-col items-center w-full lg:w-auto p-4 bg-card-bg border border-[var(--color-border)] rounded-lg hover:shadow-lg transition-shadow opacity-100">
          <div className="text-[var(--color-accent)] mb-2 w-10 h-10 flex items-center justify-center">
            <img
              src="/imgs/icons/api.png"
              loading="lazy"
              alt="API Icon"
              className="object-contain max-w-full max-h-full"
              width={40}
              height={40}
            />
          </div>
          <h4 className="text-[var(--color-text)] text-xl font-semibold text-center">API</h4>
          <p className="text-[var(--color-text-secondary)] text-sm text-center mt-1">Data Interface</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
