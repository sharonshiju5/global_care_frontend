import { useEffect, useRef } from "react";
import TopNavBar from "../../components/TopNavBar";
import HeroSection from "../../components/HeroSection";
import PvcDoorsSection from "../../components/PvcDoorsSection";
import CharcoalPanelsSection from "../../components/CharcoalPanelsSection";
import ContactInfoSection from "../../components/ContactInfoSection";
import Footer from "../../components/Footer";

export default function HomePage() {
  const bodyRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      const bodyContainer = bodyRef.current;
      if (!bodyContainer) return;

      const loadTimeout = setTimeout(() => {
        bodyContainer.classList.remove("loading-bg");
        const loadedTimeout = setTimeout(() => {
          bodyContainer.classList.add("is-loaded");
        }, 100);
        return () => clearTimeout(loadedTimeout);
      }, 500);

      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15,
      };

      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      const setupTimeout = setTimeout(() => {
        document.querySelectorAll(".scroll-reveal").forEach((el) => {
          revealObserver.observe(el);
        });
      }, 50);

      const parallaxHeroElements = document.querySelectorAll(".parallax-hero");
      const parallaxBgElements = document.querySelectorAll(".parallax-bg");
      const heroSection = document.getElementById("hero-section");
      const heroImages = document.querySelectorAll(".hero-img-3d");

      let scrollY = window.scrollY;
      let mouseX = 0;
      let mouseY = 0;
      let targetMouseX = 0;
      let targetMouseY = 0;
      let ticking = false;
      let animFrameId;

      const updateParallax = () => {
        parallaxHeroElements.forEach((el) => {
          const speed = parseFloat(el.getAttribute("data-speed")) || 0;
          const yPos = scrollY * speed;
          el.style.transform = `translateY(${yPos}px)`;
        });

        parallaxBgElements.forEach((el) => {
          const rect = el.parentElement.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const speed =
              parseFloat(el.getAttribute("data-parallax-speed")) || -0.1;
            const yPos = (rect.top - window.innerHeight / 2) * speed;
            el.style.transform = `scale(1.1) translateY(${yPos}px)`;
          }
        });

        ticking = false;
      };

      const handleScroll = () => {
        scrollY = window.scrollY;
        if (!ticking) {
          window.requestAnimationFrame(updateParallax);
          ticking = true;
        }
      };

      const handleMouseMove = (e) => {
        if (!heroSection) return;
        const rect = heroSection.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        targetMouseX = (x / rect.width) * 20;
        targetMouseY = -(y / rect.height) * 20;
      };

      const handleMouseLeave = () => {
        targetMouseX = 0;
        targetMouseY = 0;
      };

      window.addEventListener("scroll", handleScroll);

      if (heroSection) {
        heroSection.addEventListener("mousemove", handleMouseMove);
        heroSection.addEventListener("mouseleave", handleMouseLeave);
      }

      const animateMouseTracking = () => {
        mouseX += (targetMouseX - mouseX) * 0.1;
        mouseY += (targetMouseY - mouseY) * 0.1;

        if (bodyContainer.classList.contains("is-loaded")) {
          heroImages.forEach((img, index) => {
            const depth = index === 0 ? 1 : 1.5;
            img.style.transform = `rotateY(${mouseX * depth}deg) rotateX(${mouseY * depth}deg)`;
          });
        }
        animFrameId = requestAnimationFrame(animateMouseTracking);
      };

      animFrameId = requestAnimationFrame(animateMouseTracking);

      return () => {
        clearTimeout(loadTimeout);
        clearTimeout(setupTimeout);
        cancelAnimationFrame(animFrameId);
        revealObserver.disconnect();
        window.removeEventListener("scroll", handleScroll);
        if (heroSection) {
          heroSection.removeEventListener("mousemove", handleMouseMove);
          heroSection.removeEventListener("mouseleave", handleMouseLeave);
        }
      };
    } else {
      const bodyContainer = bodyRef.current;
      if (bodyContainer) {
        bodyContainer.classList.remove("loading-bg");
        bodyContainer.classList.add("is-loaded");
      }
      document
        .querySelectorAll(".scroll-reveal")
        .forEach((el) => el.classList.add("is-visible"));
    }
  }, []);

  return (
    <div
      ref={bodyRef}
      className="bg-background text-on-background font-body antialiased min-h-screen flex flex-col page-transition loading-bg"
      id="body-container"
    >
      <TopNavBar activePage="pvc" />
      <main className="flex-grow pt-24 pb-20 overflow-hidden">
        <HeroSection />
        <PvcDoorsSection />
        <CharcoalPanelsSection />
        <ContactInfoSection />
      </main>
      <Footer />
    </div>
  );
}
