import { useEffect } from "react";
import TopNavBar from "../../components/TopNavBar";
import Footer from "../../components/Footer";
import architecturalPanelsHero from "../../assets/images/architectural-panels-hero.jpg";
import louverPanelsDetail from "../../assets/images/louver-panels-detail.jpg";
import charcoalFlatPanels from "../../assets/images/charcoal-flat-panels.jpg";

export default function PanelsPage() {
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
    <div className="bg-background text-on-background font-body antialiased selection:bg-primary-container selection:text-on-primary-container">
      <TopNavBar activePage="panels" />

      <main className="pt-20">
        {/* Hero Section: Emphasis on light and shadow */}
        <section className="relative w-full max-w-screen-2xl mx-auto px-8 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[870px]">
          {/* Asymmetric Text Content */}
          <div className="lg:col-span-5 z-10 flex flex-col justify-center scroll-reveal">
            <p className="font-label text-sm uppercase tracking-widest text-secondary mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-outline-variant"></span>
              Architectural Materials
            </p>
            <h1 className="font-headline text-5xl lg:text-7xl leading-[1.1] text-on-background mb-8">
              Tactile warmth.<br />
              <span className="text-primary italic">Structural elegance.</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-md mb-12">
              Discover our curated collection of Charcoal, Louver, and Wall Panels. Designed to interact dynamically with ambient light, bringing profound texture and sun-baked minimalism to interior spaces.
            </p>
            <div className="flex items-center gap-6">
              <a 
                className="inline-flex items-center justify-center bg-primary text-on-primary px-8 py-4 rounded-lg font-label font-medium transition-transform duration-300 hover:bg-on-primary-fixed-variant hover:-translate-y-1 shadow-[0_2px_16px_rgba(58,48,42,0.04)]" 
                href="#collection"
              >
                View Collection
              </a>
              <a 
                className="inline-flex items-center justify-center border border-outline-variant text-on-surface px-8 py-4 rounded-lg font-label font-medium transition-colors duration-300 hover:border-primary hover:text-primary" 
                href="#consultation"
              >
                Technical Specs
              </a>
            </div>
          </div>
          {/* Asymmetric Image Showcase */}
          <div className="lg:col-span-7 relative h-[614px] lg:h-[800px] w-full rounded-xl overflow-hidden shadow-[0_2px_16px_rgba(58,48,42,0.04)] scroll-reveal">
            {/* Main Feature Image */}
            <img 
              alt="Hero presentation of architectural panels" 
              className="w-full h-full object-cover object-center" 
              src={architecturalPanelsHero}
            />
            {/* Atmospheric overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-surface/20 to-transparent pointer-events-none"></div>
            {/* Floating detail card */}
            <div className="absolute bottom-8 right-8 bg-surface/90 backdrop-blur-md p-6 rounded-lg border border-outline-variant/60 shadow-[0_2px_16px_rgba(58,48,42,0.04)] max-w-xs hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary">light_mode</span>
                <h3 className="font-headline text-xl text-on-surface">Light & Shadow Play</h3>
              </div>
              <p className="font-body text-sm text-on-surface-variant">
                Our fluted profiles are engineered specifically to catch raking light, creating shifting micro-shadows throughout the day.
              </p>
            </div>
          </div>
        </section>

        {/* The Collection (Bento Grid Layout) */}
        <section className="max-w-screen-2xl mx-auto px-8 py-24 bg-surface-container-low rounded-[2rem] my-12 scroll-reveal" id="collection">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl lg:text-5xl text-on-background mb-4">The Panel Catalog</h2>
              <p className="font-body text-on-surface-variant text-lg">Curated materials prioritizing organic feel, structural integrity, and integration within warm, minimal environments.</p>
            </div>
            <a className="group flex items-center gap-2 text-primary font-label font-medium hover:text-on-primary-fixed-variant transition-colors" href="#">
              Download Full Catalog 
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </a>
          </div>
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] md:auto-rows-[400px] gap-6">
            {/* Louver Panels (Large Span) */}
            <div className="md:col-span-8 row-span-1 md:row-span-2 relative rounded-xl overflow-hidden group cursor-pointer shadow-[0_2px_16px_rgba(58,48,42,0.04)]">
              <img 
                alt="Louver Panels" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={louverPanelsDetail}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                <span className="inline-block px-3 py-1 bg-primary/20 text-inverse-primary rounded-full font-label text-xs tracking-wider uppercase mb-4 w-fit backdrop-blur-sm border border-primary/30">Most Popular</span>
                <h3 className="font-headline text-3xl md:text-5xl text-inverse-on-surface mb-4">Louver Profiles</h3>
                <p className="font-body text-surface-variant max-w-md text-lg leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Rhythmic verticality designed to elevate spatial height. The deep ridges provide exceptional acoustic dampening and striking visual geometry.
                </p>
              </div>
            </div>
            {/* Charcoal Panels (Small Top Right) */}
            <div className="md:col-span-4 row-span-1 relative rounded-xl overflow-hidden group cursor-pointer shadow-[0_2px_16px_rgba(58,48,42,0.04)] bg-surface">
              <img 
                alt="Charcoal Panels" 
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" 
                src={charcoalFlatPanels}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="font-headline text-2xl text-inverse-on-surface mb-2">Charcoal Flat Panels</h3>
                <div className="flex items-center gap-2 text-primary">
                  <span className="font-label text-sm">Explore Finish</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            </div>
            {/* Wall Panels (Small Bottom Right) */}
            <div className="md:col-span-4 row-span-1 bg-surface rounded-xl p-8 flex flex-col justify-between border border-outline-variant/50 shadow-[0_2px_16px_rgba(58,48,42,0.04)] group hover:border-primary/50 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined">layers</span>
                </div>
                <h3 className="font-headline text-2xl text-on-surface mb-3">Seamless Wall Panels</h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                  Engineered for flush installation. Create expansive, uninterrupted surfaces that serve as a quiet, textured canvas for luxurious interiors.
                </p>
              </div>
              <div className="mt-6 flex gap-2">
                <div className="w-8 h-8 rounded bg-[#dcd6cc] border border-outline-variant shadow-inner" title="Warm Ash"></div>
                <div className="w-8 h-8 rounded bg-[#c2652a] border border-outline-variant shadow-inner" title="Burnt Sienna"></div>
                <div className="w-8 h-8 rounded bg-[#8c3c3c] border border-outline-variant shadow-inner" title="Dusty Rose"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Material Details & Tactility Section */}
        <section className="max-w-screen-xl mx-auto px-8 py-24 scroll-reveal">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="material-symbols-outlined text-tertiary text-4xl mb-4">texture</span>
            <h2 className="font-headline text-4xl lg:text-5xl text-on-background mb-6">Designed to be touched.</h2>
            <p className="font-body text-on-surface-variant text-lg">
              We believe architectural surfaces should engage the senses. Our panels utilize high-density composites wrapped in hyper-realistic, warm-toned textural foils that feel indistinguishable from natural timber and honed stone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-surface-container flex items-center justify-center mb-6 shadow-[0_2px_16px_rgba(58,48,42,0.04)]">
                <span className="material-symbols-outlined text-3xl text-primary">wb_sunny</span>
              </div>
              <h4 class="font-headline text-2xl text-on-surface mb-3">UV Stabilized</h4>
              <p class="font-body text-on-surface-variant text-sm">Maintains rich, warm hues even under direct sunlight, ensuring the sun-baked aesthetic endures without fading.</p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-surface-container flex items-center justify-center mb-6 shadow-[0_2px_16px_rgba(58,48,42,0.04)]">
                <span className="material-symbols-outlined text-3xl text-primary">water_drop</span>
              </div>
              <h4 class="font-headline text-2xl text-on-surface mb-3">Moisture Resilient</h4>
              <p class="font-body text-on-surface-variant text-sm">High-density core construction prevents warping, making these ideal for both arid and humid environments.</p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-surface-container flex items-center justify-center mb-6 shadow-[0_2px_16px_rgba(58,48,42,0.04)]">
                <span className="material-symbols-outlined text-3xl text-primary">architecture</span>
              </div>
              <h4 class="font-headline text-2xl text-on-surface mb-3">Precision Joinery</h4>
              <p class="font-body text-on-surface-variant text-sm">Concealed fixing systems ensure seamless expanses, maintaining the disciplined minimalism of your design.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
