import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function TopNavBar({ activePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const location = useLocation();
  const hasAnimated = useRef(false);

  const navLinks = [
    { label: "Solutions", to: "/", key: "solutions" },
    { label: "Industrial PVC", to: "/industrial-pvc", key: "pvc" },
    { label: "Fluted Panels", to: "/fluted-panels", key: "panels" },
    { label: "Rubber Systems", to: "/rubber-systems", key: "rubber" },
    { label: "Sealing Sheets", to: "/sealing-sheets", key: "sealing" },
    { label: "About", to: "/about", key: "about" },
  ];

  const currentActive = activePage || (() => {
    const match = navLinks.find((l) => l.to === location.pathname);
    return match ? match.key : "";
  })();

  useLayoutEffect(() => {
    const nav = navRef.current;
    const indicator = indicatorRef.current;
    if (!nav || !indicator) return;

    const activeEl = nav.querySelector(`[data-nav-key="${currentActive}"]`);
    if (!activeEl) {
      indicator.style.width = "0px";
      return;
    }

    const navRect = nav.getBoundingClientRect();
    const elRect = activeEl.getBoundingClientRect();
    const newLeft = elRect.left - navRect.left;
    const newWidth = elRect.width;

    if (!hasAnimated.current) {
      // First mount: read saved position, set it without transition, then animate to new
      const saved = sessionStorage.getItem("nav-indicator");
      if (saved) {
        const prev = JSON.parse(saved);
        indicator.style.transition = "none";
        indicator.style.left = prev.left + "px";
        indicator.style.width = prev.width + "px";
        // Force reflow
        indicator.offsetHeight;
      }
      hasAnimated.current = true;
    }

    // Animate to new position
    requestAnimationFrame(() => {
      indicator.style.transition = "left 0.4s cubic-bezier(0.4, 0, 0.2, 1), width 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
      indicator.style.left = newLeft + "px";
      indicator.style.width = newWidth + "px";
    });

    // Save for next page
    sessionStorage.setItem("nav-indicator", JSON.stringify({ left: newLeft, width: newWidth }));
  }, [currentActive]);

  return (
    <>
      <header className="bg-surface/85 backdrop-blur-xl fixed top-0 w-full z-50 shadow-sm border-b border-surface-container-lowest/10">
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-12 py-3 max-w-[1920px] mx-auto">
          <Link
            className="flex items-center space-x-2 sm:space-x-3 hover:opacity-90 transition-opacity"
            to="/"
          >
            <img
              src="/logo.png"
              alt="Global Care Logo"
              className="h-9 sm:h-11 w-auto object-contain rounded"
            />
            <span className="font-headline text-xl sm:text-2xl font-bold text-primary tracking-tight">
              Global Care
            </span>
          </Link>
          <nav ref={navRef} className="hidden lg:flex space-x-5 xl:space-x-7 relative">
            {navLinks.map((link) => {
              const isActive = currentActive === link.key;
              return (
                <Link
                  key={link.key}
                  data-nav-key={link.key}
                  className={`font-headline text-[17px] tracking-tight transition-colors duration-300 pb-1 nav-link-click ${
                    isActive
                      ? "text-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                  to={link.to}
                >
                  {link.label}
                </Link>
              );
            })}
            {/* Sliding indicator */}
            <span
              ref={indicatorRef}
              className="absolute bottom-0 h-[2px] bg-primary rounded-full"
              style={{ left: 0, width: 0 }}
            />
          </nav>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Link
              className="hidden sm:inline-flex items-center justify-center px-5 sm:px-6 py-2 bg-primary text-on-primary font-label font-medium rounded hover:bg-on-primary-fixed-variant transition-colors duration-300 text-sm sm:text-base"
              to="/enquiry"
            >
              Enquiry
            </Link>
            <button
              className="lg:hidden text-on-surface"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] lg:hidden">
          <div
            className="absolute inset-0 bg-inverse-surface/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="absolute top-0 right-0 w-72 sm:w-80 max-w-[85vw] h-full bg-surface shadow-2xl border-l border-outline-variant/30 flex flex-col animate-slide-in-right">
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-outline-variant/30">
              <span className="font-headline text-xl font-bold text-primary">
                Global Care
              </span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <span className="material-symbols-outlined text-on-surface-variant text-2xl hover:text-primary transition-colors">
                  close
                </span>
              </button>
            </div>
            <nav className="flex-grow py-4 sm:py-6 px-4 sm:px-6 space-y-1 overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = currentActive === link.key;
                return (
                  <Link
                    key={link.key}
                    className={`block py-3 px-4 rounded-lg font-headline text-base sm:text-lg transition-colors duration-200 ${
                      isActive
                        ? "bg-primary-fixed text-primary font-medium"
                        : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
                    }`}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="p-4 sm:p-6 border-t border-outline-variant/30 space-y-3">
              <Link
                className="block w-full text-center py-3 bg-primary text-on-primary font-label font-medium rounded-lg hover:bg-on-primary-fixed-variant transition-colors"
                to="/enquiry"
                onClick={() => setMobileMenuOpen(false)}
              >
                Enquiry
              </Link>
              <Link
                className="block w-full text-center py-3 border border-outline-variant text-on-surface font-label font-medium rounded-lg hover:border-primary hover:text-primary transition-colors"
                to="/inquiry"
                onClick={() => setMobileMenuOpen(false)}
              >
                Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
