import heroCharcoalPanel from "../assets/images/hero-charcoal-panel.jpg";
import heroPvcDoor from "../assets/images/hero-pvc-door.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center"
      id="hero-section"
    >
      <div className="lg:col-span-5 space-y-6 sm:space-y-8 z-10 relative">
        <div className="inline-flex items-center space-x-2 text-tertiary font-label uppercase tracking-widest text-xs sm:text-sm font-semibold">
          <span className="w-6 sm:w-8 h-[1px] bg-tertiary"></span>
          <span>The Archival Collection</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight text-on-surface">
          <div className="clip-mask-reveal">
            <div className="reveal-text">Tactile</div>
          </div>
          <div className="clip-mask-reveal">
            <div className="reveal-text" style={{ transitionDelay: "0.15s" }}>
              <span className="text-primary italic">Materiality</span>
            </div>
          </div>
        </h1>
        <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-md">
          Discover our new line of industrial PVC doors and charcoal panels.
          Crafted for modern spaces, echoing the warmth of natural elements with
          unmatched durability.
        </p>
        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a href="#pvc-doors" className="bg-primary text-on-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label font-medium hover:bg-primary-fixed-dim transition-colors shadow-soft text-sm sm:text-base text-center">
            Explore Collection
          </a>
          <a href="#charcoal-panels" className="border border-outline-variant text-on-surface px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label font-medium hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
            View Specifications
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
      <div className="lg:col-span-7 relative hero-img-container">
        <div className="relative h-[350px] sm:h-[450px] md:h-[600px] w-full">
          <div
            className="absolute top-0 right-0 w-4/5 h-4/5 rounded-xl overflow-hidden shadow-soft z-0 hero-img-3d delay-1 parallax-hero"
            data-speed="-0.05"
          >
            <img
              alt="Detailed close-up of a textured charcoal architectural panel set against a warm sunlit background"
              className="w-full h-full object-cover"
              src={heroCharcoalPanel}
            />
          </div>
          <div
            className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-xl overflow-hidden shadow-soft border-4 border-surface z-10 hero-img-3d delay-2 parallax-hero"
            data-speed="0.08"
          >
            <img
              alt="A modern interior scene featuring a sleek PVC door with a wood-grain texture in burnt sienna tones"
              className="w-full h-full object-cover"
              src={heroPvcDoor}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
