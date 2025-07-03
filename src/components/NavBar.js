import { useState } from "react";
import { Phone, Briefcase, Wrench, User, Moon, Menu, X, ArrowDown, ArrowUp } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false); // ✅ مضافة هنا

  return (
    <nav className="flex border-b pb-3 border-[var(--color-border)] flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0 w-full transition-all duration-300">
      <div className="w-full flex justify-between items-center lg:block">
        <a>
          <img
            src="imgs/logo.webp"
            className="h-10"
            alt="Ahmed logo"
            loading="lazy"
          />
        </a>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="p-1"
          aria-label={showDetails ? "Hide details" : "Show details"}
          title={showDetails ? "Hide details" : "Show details"}
        >
          {showDetails ? (
            <ArrowUp size={20} className="text-white" />
          ) : (
            <ArrowDown size={20} className="text-white" />
          )}
        </button>
      </div>

      <ul
        className={`flex w-full lg:w-auto flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-4 
        overflow-hidden transition-all duration-500 ease-in-out origin-top
        ${menuOpen ? "max-h-[500px] opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0"}
        lg:max-h-full lg:opacity-100 lg:scale-y-100 lg:overflow-visible`}
      >
        <li className="w-full lg:w-auto">
          <a
            href="#"
            className="relative flex w-full lg:w-auto items-center gap-2 transition-all duration-300 hover:text-[var(--color-accent)]
            before:content-[''] before:absolute before:left-0 before:bottom-[-4px]
            before:w-0 before:h-[2px] before:bg-[var(--color-accent)]
            hover:before:w-full before:transition-all before:duration-300
            text-[var(--color-text-secondary)] hover:bg-[var(--color-card-hover)] lg:hover:bg-transparent rounded-md px-2 py-1"
          >
            <User size={20} />
            About
          </a>
        </li>

        <li className="w-full lg:w-auto">
          <a
            href="#Skills"
            className="relative flex w-full lg:w-auto items-center gap-2 transition-all duration-300 hover:text-[var(--color-accent)]
            before:content-[''] before:absolute before:left-0 before:bottom-[-4px]
            before:w-0 before:h-[2px] before:bg-[var(--color-accent)]
            hover:before:w-full before:transition-all before:duration-300
            text-[var(--color-text-secondary)] hover:bg-[var(--color-card-hover)] lg:hover:bg-transparent rounded-md px-2 py-1"
          >
            <Wrench size={20} />
            Skills
          </a>
        </li>

        <li className="w-full lg:w-auto">
          <a
            href="#Portfolio"
            className="relative flex w-full lg:w-auto items-center gap-2 transition-all duration-300 hover:text-[var(--color-accent)]
            before:content-[''] before:absolute before:left-0 before:bottom-[-4px]
            before:w-0 before:h-[2px] before:bg-[var(--color-accent)]
            hover:before:w-full before:transition-all before:duration-300
            text-[var(--color-text-secondary)] hover:bg-[var(--color-card-hover)] lg:hover:bg-transparent rounded-md px-2 py-1"
          >
            <Briefcase size={20} />
            Portfolio
          </a>
        </li>

        <li className="w-full lg:w-auto">
          <a
            href="#Contact"
            className="relative flex w-full lg:w-auto items-center gap-2 transition-all duration-300 hover:text-[var(--color-accent)]
            before:content-[''] before:absolute before:left-0 before:bottom-[-4px]
            before:w-0 before:h-[2px] before:bg-[var(--color-accent)]
            hover:before:w-full before:transition-all before:duration-300
            text-[var(--color-text-secondary)] hover:bg-[var(--color-card-hover)] lg:hover:bg-transparent rounded-md px-2 py-1"
          >
            <Phone size={20} />
            Contact
          </a>
        </li>

        <li className="w-full lg:w-auto">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
