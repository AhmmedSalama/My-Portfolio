import { useState } from "react";
import { Mail, ArrowDown, ArrowUp, Facebook, Linkedin, Github, Phone,Calendar,MapPin } from "lucide-react";

function Profile() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="p-5 bg-[var(--color-card-bg)] border rounded-md border-[var(--color-border)] col-span-12 lg:col-span-12 xl:col-span-3 xl:sticky xl:top-5 self-start h-fit bg-[var(--color-background)]">
<div className="relative bottom-[19px] left-[-19px] xl:hidden">
  <div className="inline-flex items-center bg-[var(--color-accent-hover)] rounded-tl-md rounded-bl-md">
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
</div>
      <div className="flex flex-col items-center">
        <div className="rounded-lg w-24 sm:w-32 md:w-36 lg:w-40 bg-[var(--color-card-hover)]">
          <img src="/imgs/avatar.webp" alt="Profile Avatar" className="w-full" />
        </div>

        <div className="text-center mt-3">
          <h2 className="text-2xl font-bold text-[var(--color-text)]">Ahmed Salama</h2>
          <p className="bg-[var(--color-card-hover)] text-[var(--color-text)] lg:bg-transparent font-light px-2 py-1 rounded-md">
            Front End Developer
          </p>
          <p className="text-[var(--color-text-secondary)] text-sm mt-2">
            Specializing in React &amp; Modern Web Technologies
          </p>
        </div>

        <div
          className={`ProfileDeails border-t border-[var(--color-border)] overflow-hidden transition-all duration-500 w-full
            xl:mt-5 xl:opacity-100 xl:max-h-fit
            ${
              showDetails
                ? "mt-5 opacity-100 max-h-[1024px]"
                : "mt-0 opacity-0 max-h-0"
            }
          `}
        >
          <div className="Deails-item flex items-center gap-3 mt-4">
            <div className="bg-[var(--color-card-hover)] text-[var(--color-accent-hover)] p-3 rounded-full">
              <Mail size={20} />
            </div>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">EMAIL</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">A7medsamirr4@gmail.com</p>
            </div>
          </div>

          <div className="Deails-item flex items-center gap-3 mt-4">
            <div className="bg-[var(--color-card-hover)] text-[var(--color-accent-hover)] p-3 rounded-full">
              <Phone size={20} />
            </div>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">PHONE</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">+20 123456789</p>
            </div>
          </div>

          <div className="Deails-item flex items-center gap-3 mt-4">
            <div className="bg-[var(--color-card-hover)] text-[var(--color-accent-hover)] p-3 rounded-full">
              <Calendar size={20} />
            </div>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">BIRTHDAY</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">April 18</p>
            </div>
          </div>

          <div className="Deails-item flex items-center gap-3 mt-4">
            <div className="bg-[var(--color-card-hover)] text-[var(--color-accent-hover)] p-3 rounded-full">
              <MapPin size={20} />
            </div>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">LOCATION</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">Egypt, Cairo</p>
            </div>
          </div>

          {/* أيقونات السوشيال ميديا */}
          <ul className="flex justify-center gap-4 mt-6">
            <li className="border text-[var(--color-text-secondary)] p-3 rounded-md hover:bg-[var(--color-card-hover)] hover:text-[var(--color-accent-hover)] transition">
              <a href="https://www.facebook.com/AhmeedSallama2" className="block">
                <Facebook />
              </a>
            </li>
            <li className="border text-[var(--color-text-secondary)] p-3 rounded-md hover:bg-[var(--color-card-hover)] hover:text-[var(--color-accent-hover)] transition">
              <a href="https://www.linkedin.com/in/ahmeedsalama/" className="block">
                <Linkedin />
              </a>
            </li>
            <li className="border text-[var(--color-text-secondary)] p-3 rounded-md hover:bg-[var(--color-card-hover)] hover:text-[var(--color-accent-hover)] transition">
              <a href="#" className="block">
                <Github />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
