import { Github, ExternalLink } from "lucide-react";

function Card({ type, title, description, image, codeLink, demoLink }) {
  return (
    <div
      data-type={type}
      className="group Card block relative bg-card-bg border border-[var(--color-border)] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[var(--color-accent-hover)] max-w-sm mx-auto"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={`${title} Screenshot`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-0 p-2 left-0 w-full -translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 flex items-start">
          <span className="px-3 py-1 text-xs rounded-full bg-amber-600 text-white z-10">
            {type}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-2xl font-bold text-[var(--color-text)] mb-2">{title}</h3>
        <p className="text-[var(--color-text-secondary)] text-sm line-clamp-3">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between p-4">
        {/* ✅ رابط الكود بدون a داخل a */}
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 rounded-full text-[var(--color-text)] flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] transition-colors duration-300"
          title="View Code"
        >
          Code
          <Github />
        </a>

        {/* ✅ رابط الديمو بدون a داخل a */}
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 border text-[var(--color-text)] border-[var(--color-border)] rounded-full flex items-center gap-2 bg-[var(--color-card-bg)] hover:bg-[var(--color-accent-hover)] hover:text-white transition-colors duration-300"
          title="Live Demo"
        >
          Demo
          <ExternalLink />
        </a>
      </div>
    </div>
  );
}

export default Card;
