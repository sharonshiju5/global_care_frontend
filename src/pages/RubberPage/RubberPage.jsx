import { useEffect } from "react";
import TopNavBar from "../../components/TopNavBar";
import Footer from "../../components/Footer";
import tvsRubberBleeding from "../../assets/images/tvs-rubber-bleeding.jpg";
import pvcRubberBleeding from "../../assets/images/pvc-rubber-bleeding.jpg";
import weatherStrips from "../../assets/images/weather-strips.jpg";
import ordinaryRubberBleeding from "../../assets/images/ordinary-rubber-bleeding.jpg";

export default function RubberPage() {
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
      <TopNavBar activePage="rubber" />

      {/* Main Content */}
      <main className="flex-grow w-full max-w-screen-2xl mx-auto px-6 md:px-12 py-16 md:py-24 space-y-32">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center space-y-8 scroll-reveal">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface leading-tight">
            Precision-Engineered <br />
            <span className="text-primary italic font-normal">Rubber Systems</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Industrial-grade sealing solutions designed for uncompromising durability and performance. Expertly formulated bleeding and weather strips for architectural applications.
          </p>
        </section>

        {/* Bento Grid Catalog */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 scroll-reveal">
          {/* Product 1: Large Feature (Spans 8 cols) */}
          <article className="md:col-span-8 bg-surface-container-low rounded-xl p-8 md:p-12 shadow-[0_2px_16px_rgba(58,48,42,0.04)] border border-outline-variant/40 flex flex-col md:flex-row gap-12 group hover:-translate-y-1 transition-transform duration-500">
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
              <div className="flex items-center space-x-3 text-tertiary">
                <span className="material-symbols-outlined fill-1">shield</span>
                <span className="font-label text-sm font-semibold tracking-wider uppercase">Premium Grade</span>
              </div>
              <h2 className="font-headline text-4xl text-on-surface font-semibold">TVS Rubber Bleeding</h2>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Engineered for extreme temperature variations and high-compression environments. Offers superior elasticity recovery and long-term structural integrity for demanding architectural joints.
              </p>
              <div className="pt-4">
                <a className="inline-flex items-center text-primary font-label font-medium border-b border-primary/30 pb-0.5 hover:border-primary transition-colors" href="#consultation">
                  View Technical Specs <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 rounded-lg overflow-hidden bg-surface-container relative min-h-[300px]">
              <img 
                alt="TVS Rubber Bleeding" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700" 
                src={tvsRubberBleeding}
              />
            </div>
          </article>

          {/* Product 2: Vertical Card (Spans 4 cols) */}
          <article className="md:col-span-4 bg-surface-container-low rounded-xl p-8 shadow-[0_2px_16px_rgba(58,48,42,0.04)] border border-outline-variant/40 flex flex-col group hover:-translate-y-1 transition-transform duration-500">
            <div className="rounded-lg overflow-hidden bg-surface-container relative h-64 mb-8">
              <img 
                alt="PVC Rubber Bleeding" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700" 
                src={pvcRubberBleeding}
              />
            </div>
            <div className="space-y-4 flex-grow flex flex-col">
              <h2 className="font-headline text-3xl text-on-surface font-semibold">PVC Rubber Bleeding</h2>
              <p className="font-body text-on-surface-variant flex-grow">
                Versatile synthetic compound balancing flexibility with chemical resistance. Ideal for standard commercial framing and moisture barriers.
              </p>
              <a className="inline-flex items-center text-primary font-label font-medium hover:underline pt-4" href="#consultation">
                Details <span className="material-symbols-outlined ml-2 text-sm">arrow_right_alt</span>
              </a>
            </div>
          </article>

          {/* Product 3: Horizontal Half (Spans 6 cols) */}
          <article className="md:col-span-6 bg-surface-container-low rounded-xl p-8 shadow-[0_2px_16px_rgba(58,48,42,0.04)] border border-outline-variant/40 flex flex-col sm:flex-row gap-8 group hover:-translate-y-1 transition-transform duration-500">
            <div className="w-full sm:w-2/5 rounded-lg overflow-hidden bg-surface-container relative h-48 sm:h-auto">
              <img 
                alt="Weather Strips" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700" 
                src={weatherStrips}
              />
            </div>
            <div className="w-full sm:w-3/5 space-y-4 flex flex-col justify-center">
              <h2 className="font-headline text-2xl text-on-surface font-semibold">Weather Strips</h2>
              <p className="font-body text-on-surface-variant text-sm">
                Acoustic and thermal insulation profiles. Precision-extruded to eliminate drafts and structural vibration in modern façade systems.
              </p>
              <a className="inline-flex items-center text-primary font-label text-sm font-medium hover:underline pt-2" href="#consultation">
                View Configurations
              </a>
            </div>
          </article>

          {/* Product 4: Horizontal Half (Spans 6 cols) */}
          <article className="md:col-span-6 bg-surface-container-low rounded-xl p-8 shadow-[0_2px_16px_rgba(58,48,42,0.04)] border border-outline-variant/40 flex flex-col sm:flex-row gap-8 group hover:-translate-y-1 transition-transform duration-500">
            <div className="w-full sm:w-2/5 rounded-lg overflow-hidden bg-surface-container relative h-48 sm:h-auto">
              <img 
                alt="Ordinary Rubber Bleeding" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700" 
                src={ordinaryRubberBleeding}
              />
            </div>
            <div className="w-full sm:w-3/5 space-y-4 flex flex-col justify-center">
              <h2 className="font-headline text-2xl text-on-surface font-semibold">Ordinary Rubber Bleeding</h2>
              <p className="font-body text-on-surface-variant text-sm">
                Standard natural rubber blends for general-purpose gap filling and basic shock absorption in non-critical environments.
              </p>
              <a className="inline-flex items-center text-primary font-label text-sm font-medium hover:underline pt-2" href="#consultation">
                View Specifications
              </a>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}
