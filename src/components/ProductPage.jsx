import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNavBar from "./TopNavBar";
import SolutionsFooter from "./SolutionsFooter";

export default function ProductPage({ product }) {
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const timeout = setTimeout(() => {
      document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));
    }, 50);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body antialiased min-h-screen flex flex-col">
      <TopNavBar activePage={product.navKey} />

      <main className="pt-20 sm:pt-24 pb-16 sm:pb-32 flex-grow">
        {/* Back Button */}
        <div className="px-4 sm:px-6 md:px-12 max-w-[1920px] mx-auto mb-4 sm:mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors font-body text-sm"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Back
          </button>
        </div>

        {/* Hero */}
        <section className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex items-center px-4 sm:px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden">
          <div className="absolute inset-0 z-0 px-4 sm:px-6 md:px-12 py-4 sm:py-6">
            <div className="w-full h-full relative overflow-hidden rounded-xl sm:rounded-2xl">
              <img
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={product.heroImage}
              />
              <div className="absolute inset-0 bg-surface/40"></div>
            </div>
          </div>
          <div className="relative z-10 w-full max-w-3xl mx-auto text-center py-12 sm:py-16">
            <h1 className="font-headline text-3xl sm:text-5xl md:text-7xl font-medium tracking-tight text-on-surface mb-3 sm:mb-4 drop-shadow-sm">
              {product.title}
            </h1>
            <p className="font-body text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed px-2">
              {product.subtitle}
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 sm:py-24 px-4 sm:px-6 md:px-12 max-w-[1920px] mx-auto scroll-reveal">
          <h2 className="font-headline text-2xl sm:text-4xl md:text-5xl text-on-surface font-medium tracking-tight mb-8 sm:mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {product.features.map((feature, i) => (
              <div key={i} className="p-5 sm:p-6 bg-surface-container-low rounded-xl">
                <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl mb-3 sm:mb-4 block">
                  {feature.icon}
                </span>
                <h3 className="font-headline text-lg sm:text-xl font-medium text-on-surface mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="py-12 sm:py-24 px-4 sm:px-6 md:px-12 max-w-[1920px] mx-auto scroll-reveal">
          <h2 className="font-headline text-2xl sm:text-4xl md:text-5xl text-on-surface font-medium tracking-tight mb-8 sm:mb-12">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {product.gallery.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-surface-container-low">
                <img
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  src={img.src}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Specs */}
        <section className="py-12 sm:py-24 px-4 sm:px-6 md:px-12 max-w-[1920px] mx-auto bg-surface-container-low my-6 sm:my-12 rounded-xl sm:rounded-2xl scroll-reveal">
          <h2 className="font-headline text-2xl sm:text-4xl md:text-5xl text-on-surface font-medium tracking-tight mb-8 sm:mb-12">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {product.specs.map((spec, i) => (
              <div key={i} className="flex justify-between items-center py-3 sm:py-4 border-b border-outline-variant/30">
                <span className="font-body text-sm sm:text-base text-on-surface-variant">{spec.label}</span>
                <span className="font-body text-sm sm:text-base font-medium text-on-surface">{spec.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 max-w-[1920px] mx-auto text-center scroll-reveal">
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-medium mb-4 sm:mb-6">
            Interested in {product.title}?
          </h2>
          <Link
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-primary text-on-primary font-label font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            to="/enquiry"
          >
            Get a Quote
          </Link>
        </section>
      </main>

      <SolutionsFooter />
    </div>
  );
}
