import { useEffect } from "react";
import TopNavBar from "../../components/TopNavBar";
import Footer from "../../components/Footer";
import sealingSheetMaterial from "../../assets/images/sealing-sheet-material.jpg";
import stretchFilmApplication from "../../assets/images/stretch-film-application.jpg";

export default function SealingPage() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      const setupTimeout = setTimeout(() => {
        document.querySelectorAll(".scroll-reveal").forEach((el) => {
          observer.observe(el);
        });
      }, 50);

      return () => {
        clearTimeout(setupTimeout);
        observer.disconnect();
      };
    } else {
      document
        .querySelectorAll(".scroll-reveal")
        .forEach((el) => el.classList.add("is-visible"));
    }
  }, []);

  return (
    <div className="bg-background text-on-background font-body antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col pt-20">
      <TopNavBar activePage="sealing" />

      {/* Main Content Canvas */}
      <main className="w-full max-w-screen-2xl mx-auto pb-24 flex-grow">
        {/* Hero Section */}
        <header className="relative pt-24 pb-32 px-8 lg:px-16 overflow-hidden scroll-reveal">
          {/* Background Texture */}
          <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative z-10 max-w-4xl">
            <p className="font-label text-primary tracking-widest uppercase text-sm mb-4">Industrial Protection Solutions</p>
            <h1 className="font-display text-5xl lg:text-7xl leading-[1.1] mb-8 text-on-surface">
              Engineered Integrity.<br />
              <span className="text-primary">Sealing & Packaging</span>
            </h1>
            <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              High-performance Sealing Sheets, precision TKT Sheets, and resilient Stretch Films designed to secure, protect, and isolate your architectural materials in transit and on-site.
            </p>
          </div>
        </header>

        {/* Product Bento Grid */}
        <section className="px-8 lg:px-16 mb-32 scroll-reveal">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[minmax(180px,_auto)]">
            {/* Featured: Sealing Sheets */}
            <article className="md:col-span-8 bg-surface-container-low rounded-xl p-8 lg:p-12 relative overflow-hidden group shadow-[0_2px_16px_rgba(58,48,42,0.04)] border border-outline-variant/60">
              <div className="relative z-10 w-full md:w-3/5 h-full flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 bg-surface px-3 py-1 rounded-full border border-outline-variant/40 text-xs font-label text-secondary mb-6">
                    <span className="material-symbols-outlined text-[16px]">water_drop</span>
                    Moisture Barrier
                  </span>
                  <h2 className="font-display text-3xl lg:text-4xl mb-4 text-on-surface group-hover:text-primary transition-colors">Sealing Sheets</h2>
                  <p className="font-body text-on-surface-variant mb-8 leading-relaxed">
                    Industrial-grade moisture and vapor barriers. Engineered to prevent ambient degradation of sensitive core materials like WPC and Fluted panels during prolonged storage.
                  </p>
                </div>
                <a className="inline-flex items-center gap-2 font-label text-primary hover:text-on-primary-fixed-variant transition-colors underline decoration-outline-variant/60 hover:decoration-primary underline-offset-4" href="#specs-sealing">
                  View Technical Data <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </a>
              </div>
              {/* Image */}
              <div className="absolute right-0 top-0 bottom-0 w-2/5 hidden md:block">
                <img 
                  alt="Sealing Sheet Material" 
                  className="w-full h-full object-cover opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
                  src={sealingSheetMaterial}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low to-transparent"></div>
              </div>
            </article>

            {/* TKT Sheets */}
            <article className="md:col-span-4 bg-surface rounded-xl p-8 flex flex-col justify-between border border-outline-variant/60 shadow-[0_2px_16px_rgba(58,48,42,0.04)] hover:border-primary/40 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined">layers</span>
                </div>
                <h2 className="font-display text-2xl mb-3 text-on-surface">TKT Sheets</h2>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6">
                  Thermo-Kinetic Transport sheets. Rigid interleaving layers providing extreme impact resistance and structural rigidity for stacked pallet loads.
                </p>
              </div>
              <ul className="space-y-2 font-label text-xs text-secondary">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> High Impact Resistance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Load Distribution
                </li>
              </ul>
            </article>

            {/* Stretch Film */}
            <article className="md:col-span-5 bg-surface-container flex flex-col rounded-xl overflow-hidden shadow-[0_2px_16px_rgba(58,48,42,0.04)] border border-outline-variant/60">
              <div className="h-48 relative overflow-hidden bg-secondary-container">
                <img 
                  alt="Stretch Film Application" 
                  className="w-full h-full object-cover opacity-70" 
                  src={stretchFilmApplication}
                />
              </div>
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h2 className="font-display text-2xl mb-3 text-on-surface">Stretch Film</h2>
                  <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6">
                    Multi-layered cast film with exceptional yield and memory retention. Secures loads tightly while preventing surface abrasion.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-auto border-t border-outline-variant/40 pt-4">
                  <span className="font-label text-xs text-secondary uppercase tracking-wider">Gauge: 12-30µm</span>
                  <span className="material-symbols-outlined text-primary">settings_overscan</span>
                </div>
              </div>
            </article>

            {/* Performance Metrics */}
            <article className="md:col-span-7 bg-surface rounded-xl p-8 lg:p-12 border border-outline-variant/60 shadow-[0_2px_16px_rgba(58,48,42,0.04)] flex flex-col justify-center">
              <h3 className="font-display text-2xl text-on-surface mb-8 border-b border-outline-variant/40 pb-4">Material Synergy Matrix</h3>
              <div className="space-y-6">
                {/* Metric 1 */}
                <div>
                  <div className="flex justify-between font-label text-sm mb-2 text-on-surface">
                    <span>Moisture Isolation (Sealing)</span>
                    <span>99.8%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "99.8%" }}></div>
                  </div>
                </div>
                {/* Metric 2 */}
                <div>
                  <div className="flex justify-between font-label text-sm mb-2 text-on-surface">
                    <span>Puncture Resistance (TKT)</span>
                    <span>94.5%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary rounded-full" style={{ width: "94.5%" }}></div>
                  </div>
                </div>
                {/* Metric 3 */}
                <div>
                  <div className="flex justify-between font-label text-sm mb-2 text-on-surface">
                    <span>Load Retention (Stretch)</span>
                    <span>91.0%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-[#8a4518] rounded-full" style={{ width: "91%" }}></div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
