import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopNavBar from "../../components/TopNavBar";
import Footer from "../../components/Footer";
import aboutHeroImg from "../../assets/images/about-hero.jpg";
import mapPlaceholder from "../../assets/images/map-placeholder.jpg";

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Product Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
    <div className="bg-background text-on-background font-body antialiased min-h-screen flex flex-col">
      {/* Entry Mask */}
      <div className="page-reveal"></div>

      <TopNavBar activePage="about" />

      <main className="flex-grow pt-24">
        {/* Hero Section: About Us */}
        <section className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8 stagger-in stagger-hero-1">
              <div className="space-y-4">
                <span className="text-primary font-label text-sm tracking-widest uppercase">
                  Our Story
                </span>
                <h1 className="font-display text-5xl md:text-6xl text-on-surface leading-tight tracking-tight">
                  Crafting enduring spaces with warmth and precision.
                </h1>
              </div>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                At Global Care Marketing, we believe that every material we
                supply is a foundational block for a beautifully lived-in
                environment. Based in the heart of Kerala, our curation focuses
                on the delicate balance between modern resilience and natural
                warmth. We source and deliver premium architectural finishes
                that speak a language of understated luxury.
              </p>
            </div>
            <div className="lg:col-span-7 stagger-in stagger-hero-2">
              <div className="rounded-xl overflow-hidden shadow-[0_2px_16px_rgba(58,48,42,0.04)] border border-outline-variant/60 relative aspect-[4/3] bg-surface-container-low">
                <img
                  alt="Elegant modern architectural interior showcasing Global Care's material range"
                  className="w-full h-full object-cover"
                  src={aboutHeroImg}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-inverse-surface py-16 scroll-reveal">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <span className="font-headline text-4xl md:text-5xl text-inverse-primary font-medium">
                  500+
                </span>
                <p className="font-body text-sm text-inverse-on-surface/70 uppercase tracking-wider">
                  Projects Delivered
                </p>
              </div>
              <div className="space-y-2">
                <span className="font-headline text-4xl md:text-5xl text-inverse-primary font-medium">
                  15+
                </span>
                <p className="font-body text-sm text-inverse-on-surface/70 uppercase tracking-wider">
                  Years Experience
                </p>
              </div>
              <div className="space-y-2">
                <span className="font-headline text-4xl md:text-5xl text-inverse-primary font-medium">
                  200+
                </span>
                <p className="font-body text-sm text-inverse-on-surface/70 uppercase tracking-wider">
                  Product Variants
                </p>
              </div>
              <div className="space-y-2">
                <span className="font-headline text-4xl md:text-5xl text-inverse-primary font-medium">
                  Kerala
                </span>
                <p className="font-body text-sm text-inverse-on-surface/70 uppercase tracking-wider">
                  Proudly Based In
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 py-24 scroll-reveal">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="text-primary font-label text-sm tracking-widest uppercase">
              What Drives Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-on-surface">
              Core Values
            </h2>
            <p className="font-body text-on-surface-variant text-lg">
              Our commitment to quality, innovation, and customer satisfaction
              defines everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low p-10 rounded-xl border border-outline-variant/60 shadow-[0_2px_16px_rgba(58,48,42,0.04)] hover:border-primary/30 transition-all duration-300 group">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block group-hover:scale-110 transition-transform">
                verified
              </span>
              <h3 className="font-headline text-2xl text-on-surface mb-4">
                Quality First
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Every product we offer passes rigorous quality standards. From
                industrial PVC to precision rubber systems, we guarantee
                materials that meet the highest benchmarks of durability.
              </p>
            </div>
            <div
              className="bg-surface-container-low p-10 rounded-xl border border-outline-variant/60 shadow-[0_2px_16px_rgba(58,48,42,0.04)] hover:border-primary/30 transition-all duration-300 group"
              style={{ transitionDelay: "100ms" }}
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block group-hover:scale-110 transition-transform">
                handshake
              </span>
              <h3 className="font-headline text-2xl text-on-surface mb-4">
                Trusted Partnership
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Building long-term relationships with architects, contractors,
                and homeowners. We are more than suppliers — we are partners
                in creating extraordinary spaces.
              </p>
            </div>
            <div
              className="bg-surface-container-low p-10 rounded-xl border border-outline-variant/60 shadow-[0_2px_16px_rgba(58,48,42,0.04)] hover:border-primary/30 transition-all duration-300 group"
              style={{ transitionDelay: "200ms" }}
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block group-hover:scale-110 transition-transform">
                eco
              </span>
              <h3 className="font-headline text-2xl text-on-surface mb-4">
                Sustainable Approach
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Committed to environmentally responsible sourcing and
                manufacturing. Our polymer compounds are engineered for
                longevity, reducing waste and resource consumption.
              </p>
            </div>
          </div>
        </section>

        {/* Connect With Us / Contact Section */}
        <section className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 py-24 scroll-reveal">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-on-surface">
              Connect With Us
            </h2>
            <p className="font-body text-on-surface-variant text-lg">
              Whether you are an architect designing a new sanctuary or a
              homeowner refining your space, our team is ready to assist you
              with dedicated support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Details Card */}
            <div className="bg-surface-container-low p-10 rounded-xl border border-outline-variant/60 shadow-[0_2px_16px_rgba(58,48,42,0.04)] flex flex-col justify-between space-y-8 h-full md:col-span-1 hover:border-primary/30 transition-colors duration-300">
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-2xl text-on-surface mb-6 border-b border-outline-variant/40 pb-4">
                    Contact Info
                  </h3>
                  <div className="space-y-6 font-body text-on-surface-variant">
                    <div className="flex items-start space-x-4">
                      <span className="material-symbols-outlined text-primary mt-1">
                        location_on
                      </span>
                      <div>
                        <p className="font-medium text-on-surface mb-1">
                          Headquarters
                        </p>
                        <p className="text-sm leading-relaxed">
                          NP 9/191A, KALKUDAMBIL,
                          <br />
                          NARIKKUNI, KOZHIKKODE,
                          <br />
                          Kerala (Code 32)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <span className="material-symbols-outlined text-primary mt-1">
                        call
                      </span>
                      <div>
                        <p className="font-medium text-on-surface mb-1">
                          Phone
                        </p>
                        <p className="text-sm">+91 98462 83677</p>
                        <p className="text-sm">+91 90745 21254</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <span className="material-symbols-outlined text-primary mt-1">
                        mail
                      </span>
                      <div>
                        <p className="font-medium text-on-surface mb-1">
                          Email
                        </p>
                        <p className="text-sm">globalcareclt@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-outline-variant/40">
                  <div className="space-y-2 text-sm text-on-surface-variant font-label">
                    <p>
                      <span className="font-medium text-on-surface">
                        GSTIN/UIN:
                      </span>{" "}
                      32CMOPS4809P2Z8
                    </p>
                    <p>
                      <span className="font-medium text-on-surface">
                        PAN/IT No:
                      </span>{" "}
                      CMOPS4809P
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="bg-surface-container-low p-10 rounded-xl border border-outline-variant/60 shadow-[0_2px_16px_rgba(58,48,42,0.04)] md:col-span-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container opacity-10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

              {submitted ? (
                <div className="py-12 text-center space-y-6 relative z-10">
                  <span className="material-symbols-outlined text-primary text-6xl">
                    check_circle
                  </span>
                  <h3 className="font-headline text-3xl text-on-background">
                    Message Sent Successfully
                  </h3>
                  <p className="font-body text-on-surface-variant max-w-md mx-auto">
                    Thank you for reaching out! Our team will get back to you
                    within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        subject: "Product Inquiry",
                        message: "",
                      });
                    }}
                    className="bg-primary text-on-primary px-8 py-3 rounded-lg font-medium hover:bg-primary-container transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl text-on-surface mb-8 relative z-10">
                    Send an Inquiry
                  </h3>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6 relative z-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          className="font-label text-sm text-on-surface-variant font-medium"
                          htmlFor="name"
                        >
                          Full Name
                        </label>
                        <input
                          className="w-full bg-surface border border-outline-variant text-on-surface rounded-md focus:ring-1 focus:ring-primary focus:border-primary px-4 py-3 shadow-sm transition-shadow font-body outline-none"
                          id="name"
                          placeholder="Your name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          className="font-label text-sm text-on-surface-variant font-medium"
                          htmlFor="email"
                        >
                          Email Address
                        </label>
                        <input
                          className="w-full bg-surface border border-outline-variant text-on-surface rounded-md focus:ring-1 focus:ring-primary focus:border-primary px-4 py-3 shadow-sm transition-shadow font-body outline-none"
                          id="email"
                          placeholder="you@company.com"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        className="font-label text-sm text-on-surface-variant font-medium"
                        htmlFor="subject"
                      >
                        Subject
                      </label>
                      <select
                        className="w-full bg-surface border border-outline-variant text-on-surface rounded-md focus:ring-1 focus:ring-primary focus:border-primary px-4 py-3 shadow-sm font-body outline-none"
                        id="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                      >
                        <option>Product Inquiry</option>
                        <option>Technical Support</option>
                        <option>Partnership</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label
                        className="font-label text-sm text-on-surface-variant font-medium"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        className="w-full bg-surface border border-outline-variant text-on-surface rounded-md focus:ring-1 focus:ring-primary focus:border-primary px-4 py-3 shadow-sm resize-none font-body outline-none"
                        id="message"
                        placeholder="How can we help you create beautiful spaces?"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                    <button
                      className="w-full md:w-auto bg-primary text-on-primary px-8 py-3 rounded-lg hover:bg-primary-container hover:text-on-primary-container transition-colors duration-300 font-label font-medium shadow-sm flex justify-center items-center space-x-2 group"
                      type="submit"
                    >
                      <span>Send Message</span>
                      <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Location Map */}
        <section className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 pb-24 scroll-reveal">
          <div className="rounded-xl overflow-hidden shadow-[0_2px_16px_rgba(58,48,42,0.04)] border border-outline-variant/60 h-96 bg-surface-container-low relative">
            <img
              alt="Map of Kozhikode, Kerala"
              className="w-full h-full object-cover opacity-80"
              src={mapPlaceholder}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-surface/90 backdrop-blur-sm p-6 rounded-lg border border-outline-variant/50 shadow-lg text-center transform -translate-y-4">
                <span className="material-symbols-outlined text-primary text-4xl mb-2">
                  location_on
                </span>
                <h4 className="font-display text-xl text-on-surface mb-1">
                  Visit Our Office
                </h4>
                <p className="font-body text-sm text-on-surface-variant">
                  Kozhikode, Kerala
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
