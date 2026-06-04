import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import TopNavBar from "../../components/TopNavBar";
import SolutionsFooter from "../../components/SolutionsFooter";
import acousticPvcDoors from "../../assets/images/acoustic-pvc-doors.jpg";
import flutedWallPanels from "../../assets/images/fluted-wall-panels.jpg";
import wpcExteriorDecking from "../../assets/images/wpc-exterior-decking.jpg";
import materialSamples from "../../assets/images/material-samples.jpg";
import screen1 from "../../assets/images/screen.png";
import screen2 from "../../assets/images/screen2.png";
import screen3 from "../../assets/images/screen3.png";

const heroSlides = [
  {
    image: screen1,
    alt: "Warm-toned outdoor decking terrace with modern furniture and golden hour lighting",
    headline: "Tactile",
    headlineAccent: "Warmth.",
    subtitle: "Fluted wall systems that play with light and shadow.",
  },
  {
    image: screen2,
    alt: "Fluted charcoal wall panels with warm sunlight casting dramatic shadows in a modern interior",
    headline: "Archival",
    headlineAccent: "Elegance.",
    subtitle: "Pioneering polymer solutions for editorial interiors.",
  },
  {
    image: screen3,
    alt: "Modern minimalist interior with warm wood doors and sun-drenched living space",
    headline: "Industrial",
    headlineAccent: "Precision.",
    subtitle: "Acoustic PVC systems crafted for enduring beauty.",
  },
];

const SLIDE_INTERVAL = 6000;

export default function SolutionsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);
  const heroContentRef = useRef(null);

  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning || index === currentSlide) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 900);
    },
    [isTransitioning, currentSlide]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsTransitioning((prev) => {
        if (!prev) {
          setCurrentSlide((c) => (c + 1) % heroSlides.length);
          setTimeout(() => setIsTransitioning(false), 900);
          return true;
        }
        return prev;
      });
    }, SLIDE_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Reset auto-advance on manual interaction
  const handleManualNav = useCallback(
    (action) => {
      clearInterval(intervalRef.current);
      action();
      intervalRef.current = setInterval(() => {
        setIsTransitioning((prev) => {
          if (!prev) {
            setCurrentSlide((c) => (c + 1) % heroSlides.length);
            setTimeout(() => setIsTransitioning(false), 900);
            return true;
          }
          return prev;
        });
      }, SLIDE_INTERVAL);
    },
    []
  );

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

      // Hero Scroll Parallax
      const heroSection = document.querySelector("#solutions-hero");
      const heroContent = heroContentRef.current;

      const handleScroll = () => {
        if (!heroSection || !heroContent) return;
        const scrollY = window.scrollY;
        const heroHeight = heroSection.offsetHeight;

        if (scrollY <= heroHeight) {
          const progress = scrollY / heroHeight;
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
        {/* Hero Carousel Section */}
        <section
          id="solutions-hero"
          className="relative min-h-[450px] sm:min-h-[600px] md:min-h-[800px] flex items-center px-4 sm:px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden"
        >
          {/* Carousel Background Images */}
          <div className="absolute inset-0 z-0 px-4 sm:px-6 md:px-12 py-4 sm:py-6">
            <div className="w-full h-full relative overflow-hidden rounded-xl sm:rounded-2xl">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className="absolute inset-0 w-full h-full"
                  style={{
                    opacity: currentSlide === index ? 1 : 0,
                    transform: currentSlide === index ? "scale(1.02)" : "scale(1.08)",
                    transition: "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 6s cubic-bezier(0.4, 0, 0.2, 1)",
                    zIndex: currentSlide === index ? 1 : 0,
                  }}
                >
                  <img
                    alt={slide.alt}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={slide.image}
                  />
                </div>
              ))}
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/10 z-[2]"></div>
            </div>
          </div>

          {/* Carousel Content */}
          <div
            ref={heroContentRef}
            className="relative z-10 w-full max-w-4xl mx-auto text-center hero-content"
          >
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{
                  opacity: currentSlide === index ? 1 : 0,
                  transform: currentSlide === index
                    ? "translateY(0)"
                    : "translateY(24px)",
                  transition: "opacity 0.7s ease, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                  pointerEvents: currentSlide === index ? "auto" : "none",
                }}
              >
                <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-tight tracking-tight text-white mb-2 sm:mb-4 drop-shadow-lg">
                  {slide.headline}
                  <br />
                  <span className="text-primary italic">{slide.headlineAccent}</span>
                </h1>
                <p className="font-body text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4">
                  {slide.subtitle}
                </p>
              </div>
            ))}

            {/* Static CTA Buttons */}
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-[240px] sm:mt-[280px] md:mt-[300px]">
              <a
                className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-on-primary font-label font-semibold rounded-lg hover:bg-primary/90 transition-colors w-full sm:w-auto text-center text-sm sm:text-base shadow-lg"
                href="#gallery"
              >
                Explore Solutions
              </a>
              <a
                className="px-6 sm:px-8 py-3 sm:py-4 border border-white/40 text-white font-label font-semibold rounded-lg hover:border-primary hover:text-primary hover:bg-white/10 backdrop-blur-sm transition-all w-full sm:w-auto text-center text-sm sm:text-base"
                href="#editorial"
              >
                View Technical Specs
              </a>
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
            {/* Prev Arrow */}
            <button
              onClick={() => handleManualNav(prevSlide)}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/25 hover:border-white/50 transition-all duration-300 group"
              aria-label="Previous slide"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:-translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Dot Indicators */}
            <div className="flex items-center gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleManualNav(() => goToSlide(index))}
                  className="group p-1"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div
                    className="rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: currentSlide === index ? "28px" : "8px",
                      height: "8px",
                      backgroundColor:
                        currentSlide === index
                          ? "#c2652a"
                          : "rgba(255,255,255,0.45)",
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={() => handleManualNav(nextSlide)}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/25 hover:border-white/50 transition-all duration-300 group"
              aria-label="Next slide"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
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

