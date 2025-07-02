import { useEffect } from "react";
import { CircleArrowUp } from "lucide-react";

function ScrollToTopButton() {
  useEffect(() => {
    const scrollButton = document.getElementById("ScrollToTopButton");

    window.onscroll = function () {
      if (window.scrollY > 100) {
        scrollButton.style.display = "flex";
      } else {
        scrollButton.style.display = "none";
      }
    };
    scrollButton.style.display = "none";


    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <a
      href="#"
      id="ScrollToTopButton"
      className="fixed right-3 bottom-2 items-center justify-center text-white bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-hover)] w-10 h-10 rounded-md border-[var(--color-border)] hover:scale-105 duration-200 hover:from-[var(--color-accent-hover)] hover:to-[var(--color-accent)]"
    >
      <CircleArrowUp size={24} />
    </a>
  );
}

export default ScrollToTopButton;
