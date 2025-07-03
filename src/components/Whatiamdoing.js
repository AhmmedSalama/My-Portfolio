import { Globe, Code, Paintbrush, MonitorSmartphone } from "lucide-react";
import SectionTitle from "./SectionTitle";

function Whatiamdoing() {
  return (
    <div className="mt-5">
      <SectionTitle line1="what i'am" line2="doing" />

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex gap-3 bg-card-bg border border-[var(--color-border)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-[var(--color-accent)] text-4xl mb-4">
            <Globe />
          </div>
          <div>
            <h4 className="text-2xl text-[var(--color-text)] font-semibold mb-1">
              Web Design
            </h4>
            <p className="text-[var(--color-text-secondary)]">
              The most modern and high-quality design made at a professional level.
            </p>
          </div>
        </div>

        <div className="flex gap-3 bg-card-bg border border-[var(--color-border)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-[var(--color-accent)] text-4xl mb-4">
            <Code />
          </div>
          <div>
            <h4 className="text-2xl text-[var(--color-text)] font-semibold mb-1">
              Frontend Development
            </h4>
            <p className="text-[var(--color-text-secondary)]">
              Building responsive, fast and accessible websites using modern technologies.
            </p>
          </div>
        </div>

        <div className="flex gap-3 bg-card-bg border border-[var(--color-border)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-[var(--color-accent)] text-4xl mb-4">
            <Paintbrush />
          </div>
          <div>
            <h4 className="text-2xl text-[var(--color-text)] font-semibold mb-1">
              UI/UX Design
            </h4>
            <p className="text-[var(--color-text-secondary)]">
              Designing user interfaces that are intuitive, beautiful, and user-centered.
            </p>
          </div>
        </div>

        <div className="flex gap-3 bg-card-bg border border-[var(--color-border)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-[var(--color-accent)] text-4xl mb-4">
            <MonitorSmartphone />
          </div>
          <div>
            <h4 className="text-2xl text-[var(--color-text)] font-semibold mb-1">
              Responsive Design
            </h4>
            <p className="text-[var(--color-text-secondary)]">
              Ensuring your website looks great on all devices, from mobile to desktop.
            </p>
          </div>
        </div>
      </div>

      <a
        href="/resume.pdf"
        download
        type="application/pdf"
        className="inline-flex items-center justify-center mt-4 text-white bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-hover)] w-32 h-10 rounded-md border border-[var(--color-border)] hover:scale-105 duration-200 hover:from-[var(--color-accent-hover)] hover:to-[var(--color-accent)]"
      >
        My Resume
      </a>
    </div>
  );
}

export default Whatiamdoing;
