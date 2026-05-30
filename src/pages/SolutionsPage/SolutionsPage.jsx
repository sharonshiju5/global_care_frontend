import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import TopNavBar from "../../components/TopNavBar";
import SolutionsFooter from "../../components/SolutionsFooter";
import heroArchitecturalInterior from "../../assets/images/hero-architectural-interior.jpg";
import acousticPvcDoors from "../../assets/images/acoustic-pvc-doors.jpg";
import flutedWallPanels from "../../assets/images/fluted-wall-panels.jpg";
import wpcExteriorDecking from "../../assets/images/wpc-exterior-decking.jpg";
import materialSamples from "../../assets/images/material-samples.jpg";

export default function SolutionsPage() {
  const heroImgRef = useRef(null);
  const heroContentRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      // Scroll Reveal Observer
      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15,
      };

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      }, observerOptions);

      const setupTimeout = setTimeout(() => {
        document.querySelectorAll(".scroll-reveal").forEach((el) => {
          observer.observe(el);
        });
      }, 50);

      // Hero Scroll Parallax & Scale
      const heroSection = document.querySelector("#solutions-hero");
      const heroImg = heroImgRef.current;
      const heroContent = heroContentRef.current;

      const handleScroll = () => {
        if (!heroSection || !heroImg || !heroContent) return;
        const scrollY = window.scrollY;
        const heroHeight = heroSection.offsetHeight;

        if (scrollY <= heroHeight) {
          const progress = scrollY / heroHeight;
          heroImg.style.transform = `translateY(${scrollY * 0.4}px)`;
          const scale = 1 - progress * 0.1;
          const opacity = 1 - progress * 1.5;
          heroContent.style.transform = `scale(${scale})`;
          heroContent.style.opacity = Math.max(0, opacity);
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        clearTimeout(setupTimeout);
        observer.disconnect();
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      document
        .querySelectorAll(".scroll-reveal")
        .forEach((el) => el.classList.add("is-visible"));
    }
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
      {/* Entry Mask */}
      <div className="page-reveal"></div>

      <TopNavBar activePage="solutions" />

      <main className="pt-16 sm:pt-20 pb-16 sm:pb-32 flex-grow">
        {/* Hero Section */}
        <section
          id="solutions-hero"
          className="relative min-h-[450px] sm:min-h-[600px] md:min-h-[800px] flex items-center px-4 sm:px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden"
        >
          <div className="absolute inset-0 z-0 px-4 sm:px-6 md:px-12 py-4 sm:py-6">
            <div className="w-full h-full relative overflow-hidden rounded-xl sm:rounded-2xl reveal-image visible">
              <div
                ref={heroImgRef}
                className="hero-img-wrapper absolute inset-0 w-full h-full"
              >
                <img
                  alt="A stunning, modern architectural interior featuring extensive use of warm-toned wood and elegant polymer panelling"
                  className="absolute inset-0 w-full h-full object-cover object-center scale-[1.1]"
                  src={heroArchitecturalInterior}
                />
              </div>
              <div className="absolute inset-0 bg-surface/50"></div>
            </div>
          </div>
          <div
            ref={heroContentRef}
            className="relative z-10 w-full max-w-4xl mx-auto text-center hero-content"
          >
            <h1 className="font-headline text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-medium leading-tight tracking-tight text-on-surface mb-4 sm:mb-6 drop-shadow-sm stagger-in stagger-hero-1">
              Archival Industrial
              <br />
              <span className="text-primary italic">Excellence.</span>
            </h1>
            <p className="font-body text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed stagger-in stagger-hero-2 px-2">
              Pioneering architectural polymer solutions. We craft spaces with
              warm minimalism, blending structural integrity with editorial
              elegance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 stagger-in stagger-hero-3">
              <a
                className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-on-primary font-label font-semibold rounded-lg hover:bg-primary/90 transition-colors w-full sm:w-auto text-center text-sm sm:text-base"
                href="#gallery"
              >
                Explore Solutions
              </a>
              <a
                className="px-6 sm:px-8 py-3 sm:py-4 border border-outline-variant text-on-surface font-label font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors w-full sm:w-auto text-center text-sm sm:text-base"
                href="#editorial"
              >
                View Technical Specs
              </a>
            </div>
          </div>
        </section>

        {/* Gallery / Product Categories */}
        <section
          id="gallery"
          className="py-12 sm:py-20 px-4 sm:px-6 md:px-12 max-w-[1920px] mx-auto scroll-reveal"
        >
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="font-headline text-2xl sm:text-4xl md:text-5xl text-on-surface font-medium tracking-tight mb-3 sm:mb-4">
              Curated Surfaces
            </h2>
            <p className="font-body text-on-surface-variant max-w-xl text-base sm:text-lg">
              Discover our premium range of architectural materials, designed
              for durability and aesthetic warmth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {/* Card 1 */}
            <Link to="/acoustic-pvc-doors" className="group cursor-pointer">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl mb-6 bg-surface-container-low">
                <img
                  alt="Premium PVC Doors with fluted paneling in warm sienna tone"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={acousticPvcDoors}
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline text-2xl font-medium text-on-surface mb-2 group-hover:text-primary transition-colors">
                    Acoustic PVC Doors
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant">
                    Sound-dampening architectural entryways.
                  </p>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                  arrow_forward
                </span>
              </div>
            </Link>
            {/* Card 2 */}
            <Link
              to="/fluted-wall-systems"
              className="group cursor-pointer"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl mb-6 bg-surface-container-low">
                <img
                  alt="Expansive wall clad in architectural fluted wood panels"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={flutedWallPanels}
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline text-2xl font-medium text-on-surface mb-2 group-hover:text-primary transition-colors">
                    Fluted Wall Systems
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant">
                    Textured cladding for dynamic interiors.
                  </p>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                  arrow_forward
                </span>
              </div>
            </Link>
            {/* Card 3 */}
            <Link
              to="/wpc-exterior-decking"
              className="group cursor-pointer"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl mb-6 bg-surface-container-low">
                <img
                  alt="Minimalist living space showcasing WPC decking"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={wpcExteriorDecking}
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline text-2xl font-medium text-on-surface mb-2 group-hover:text-primary transition-colors">
                    WPC Exterior Decking
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant">
                    Weather-resistant composite surfaces.
                  </p>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                  arrow_forward
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Editorial Feature */}
        <section
          id="editorial"
          className="py-12 sm:py-24 px-4 sm:px-6 md:px-12 max-w-[1920px] mx-auto bg-surface-container-low my-6 sm:my-12 scroll-reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-headline text-2xl sm:text-4xl md:text-5xl text-on-surface font-medium tracking-tight mb-6 sm:mb-8">
                Structural Integrity Meets Warm Minimalism.
              </h2>
              <p className="font-body text-on-surface-variant text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Our polymer compounds are engineered not just for exceptional
                durability, but to elevate the spatial experience. We believe
                materials should impart a sense of grounded warmth.
              </p>
              <p className="font-body text-on-surface-variant text-base sm:text-lg mb-6 sm:mb-10 leading-relaxed">
                By integrating advanced rubber systems into our core structures,
                we achieve unmatched acoustic performance while maintaining a
                pristine, editorial aesthetic.
              </p>
              <a
                className="inline-flex items-center space-x-2 text-primary font-label font-medium hover:text-primary-container transition-colors group"
                href="#"
              >
                <span className="border-b border-primary group-hover:border-primary-container pb-0.5">
                  Read our Material Philosophy
                </span>
                <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">
                  east
                </span>
              </a>
            </div>
            <div className="order-1 lg:order-2 relative w-full aspect-square overflow-hidden rounded-xl">
              <img
                alt="Stacked architectural material samples in warm beige, burnt sienna, and soft terracotta"
                className="absolute inset-0 w-full h-full object-cover"
                src={materialSamples}
              />
            </div>
          </div>
        </section>
      </main>

      <SolutionsFooter />
    </div>
  );
}
