import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { events } from "./Events";

const gridEvents = events.filter((e) => e.cardTitle);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    let lastScroll = 0;

    const onScroll = () => {
      const current = window.scrollY;
      if (current <= 10) {
        setVisible(true);
      } else {
        setVisible(current < lastScroll);
      }
      lastScroll = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = (path) =>
    `text-[11px] tracking-[0.25em] font-mono uppercase transition-colors duration-300 ${
      location.pathname === path
        ? "text-red-500"
        : "text-white/80 hover:text-red-500"
    }`;

  return (
    <>
      <div
        className={`fixed top-3 md:top-4 left-1/2 -translate-x-1/2 z-[9998] overflow-visible transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100 scale-100" : "translate-y-[-120%] opacity-0 scale-95"}`}
      >
        <nav className="flex items-center bg-black/85 backdrop-blur-xl border border-red-500/20 rounded-full overflow-visible shadow-[0_0_40px_rgba(239,68,68,0.08)]">
          <Link
            to="/"
            className="flex items-center gap-1.5 md:gap-2 pl-3 md:pl-4 pr-2 md:pr-3 py-1.5 md:py-2"
          >
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500 animate-pulse" />
            <span
              className="text-red-500 text-sm md:text-lg font-black uppercase tracking-[-0.03em] leading-none"
              style={{
                fontFamily:
                  'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
              }}
            >
              ABHYUDAY
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1 px-1 py-1.5">
            <Link
              to="/"
              className={`${navLinkClass("/")} px-2.5 py-1 rounded-full hover:bg-white/5`}
            >
              Home
            </Link>
            <a
              href="#about"
              className={`${navLinkClass("#about")} px-2.5 py-1 rounded-full hover:bg-white/5`}
            >
              About
            </a>
            <a
              href="#contact"
              className={`${navLinkClass("#contact")} px-2.5 py-1 rounded-full hover:bg-white/5`}
            >
              Contact
            </a>

            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`${navLinkClass("/events")} px-2.5 py-1 rounded-full hover:bg-white/5 flex items-center gap-1`}
              >
                Events
                <svg
                  className={`w-2.5 h-2.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-200 ${
                  dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="py-2">
                  {gridEvents.map((event) => (
                    <Link
                      key={event.id}
                      to={`/event/${event.id}`}
                      className="block px-4 py-2 text-[11px] tracking-[0.2em] font-mono uppercase text-white/70 hover:text-red-500 hover:bg-white/5 transition-colors duration-200"
                    >
                      <span className="text-red-500/60 mr-2">
                        {String(event.id).padStart(2, "0")}
                      </span>
                      {event.cardTitle}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center w-8 h-8 mr-2 text-red-400 hover:text-red-500 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-[9997] bg-black/90 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-24 pb-10 px-6">
          <div className="flex flex-col gap-1 border-l border-red-500/30 pl-4">
            <Link
              to="/"
              className="py-2.5 text-sm tracking-[0.35em] font-mono uppercase text-white/90 hover:text-red-500 transition-colors"
            >
              Home
            </Link>
            <a
              href="#about"
              className="py-2.5 text-sm tracking-[0.35em] font-mono uppercase text-white/90 hover:text-red-500 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="py-2.5 text-sm tracking-[0.35em] font-mono uppercase text-white/90 hover:text-red-500 transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="mt-8 pl-4">
            <p className="text-[10px] tracking-[0.4em] font-mono text-red-500 uppercase mb-3">
              Events
            </p>
            <div className="flex flex-col gap-0.5">
              {gridEvents.map((event) => (
                <Link
                  key={event.id}
                  to={`/event/${event.id}`}
                  className="py-2 text-xs tracking-[0.3em] font-mono uppercase text-white/70 hover:text-red-500 transition-colors"
                >
                  {String(event.id).padStart(2, "0")} — {event.cardTitle}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
