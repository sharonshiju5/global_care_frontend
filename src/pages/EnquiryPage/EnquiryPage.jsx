import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopNavBar from "../../components/TopNavBar";
import Footer from "../../components/Footer";

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    projectType: "",
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

      <TopNavBar activePage="enquiry" />

      <main className="flex-grow flex flex-col md:flex-row w-full max-w-[1920px] mx-auto pt-[72px]">
        {/* Left Side: Information & Context */}
        <section className="w-full md:w-5/12 lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center md:border-r border-outline-variant/30">
          <div className="max-w-md mx-auto md:mx-0 stagger-in stagger-hero-1">
            <span className="text-primary font-body text-sm uppercase tracking-widest font-semibold mb-4 block">
              Get in Touch
            </span>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl leading-tight mb-8 text-on-surface">
              Collaborate with Excellence
            </h1>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-12">
              Whether you are developing commercial infrastructure or
              specialized industrial facilities, our team is ready to discuss
              your specific material requirements and project timelines.
            </p>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 gap-8 mb-16">
              <div className="flex items-start">
                <div className="bg-surface-container-low p-3 rounded-lg mr-4 text-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h3 className="font-body text-sm text-on-surface-variant mb-1">
                    Direct Inquiries
                  </h3>
                  <a
                    className="font-headline text-2xl text-on-surface hover:text-primary transition-colors block"
                    href="tel:+919846283677"
                  >
                    +91 98462 83677
                  </a>
                  <a
                    className="font-headline text-xl text-on-surface-variant hover:text-primary transition-colors block mt-1"
                    href="tel:+919074521254"
                  >
                    +91 90745 21254
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-surface-container-low p-3 rounded-lg mr-4 text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h3 className="font-body text-sm text-on-surface-variant mb-1">
                    Email
                  </h3>
                  <a
                    className="font-headline text-2xl text-on-surface hover:text-primary transition-colors"
                    href="mailto:globalcareclt@gmail.com"
                  >
                    globalcareclt@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Office Location */}
            <div className="border-t border-outline-variant/30 pt-12">
              <h3 className="font-headline text-2xl text-on-surface mb-6">
                Our Office
              </h3>
              <div className="font-body text-on-surface-variant space-y-2">
                <p className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>GLOBAL CARE MARKETING</strong>
                  </span>
                </p>
                <p className="ml-[18px] text-sm leading-relaxed">
                  NP 9/191A, KALKUDAMBIL,
                  <br />
                  NARIKKUNI, KOZHIKKODE
                  <br />
                  Kerala, State Code: 32
                </p>
                <div className="ml-[18px] text-xs mt-4 space-y-1 text-on-surface-variant/80">
                  <p>
                    <strong className="text-on-surface">GSTIN/UIN:</strong>{" "}
                    32CMOPS4809P2Z8
                  </p>
                  <p>
                    <strong className="text-on-surface">PAN/IT No:</strong>{" "}
                    CMOPS4809P
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Side: Inquiry Form */}
        <section className="w-full md:w-7/12 lg:w-1/2 p-8 md:p-16 lg:p-24 flex items-center justify-center bg-surface-container-low/50 relative overflow-hidden">
          {/* Subtle Background Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-surface-container rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-tertiary-fixed rounded-full blur-3xl opacity-20 translate-y-1/3 -translate-x-1/4"></div>

          <div className="w-full max-w-lg relative z-10 bg-surface p-10 md:p-12 rounded-2xl shadow-[0_2px_24px_rgba(58,48,42,0.04)] border border-outline-variant/20 stagger-in stagger-hero-2">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <span className="material-symbols-outlined text-primary text-6xl">
                  check_circle
                </span>
                <h2 className="font-headline text-4xl text-on-background">
                  Inquiry Submitted
                </h2>
                <p className="font-body text-on-surface-variant max-w-md mx-auto">
                  Thank you for contacting Global Care Marketing. Our team
                  will review your inquiry and respond within 24 business
                  hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      firstName: "",
                      lastName: "",
                      company: "",
                      email: "",
                      projectType: "",
                      message: "",
                    });
                  }}
                  className="bg-primary text-on-primary px-8 py-3 rounded-lg font-medium hover:bg-primary-container transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-headline text-3xl mb-8 text-on-surface">
                  Project Inquiry
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 font-body"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="space-y-2">
                      <label
                        className="text-sm text-on-surface-variant"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input
                        className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-shadow outline-none"
                        id="firstName"
                        placeholder="Jane"
                        type="text"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    {/* Last Name */}
                    <div className="space-y-2">
                      <label
                        className="text-sm text-on-surface-variant"
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-shadow outline-none"
                        id="lastName"
                        placeholder="Doe"
                        type="text"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  {/* Company */}
                  <div className="space-y-2">
                    <label
                      className="text-sm text-on-surface-variant"
                      htmlFor="company"
                    >
                      Company / Organization
                    </label>
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-shadow outline-none"
                      id="company"
                      placeholder="Acme Corp"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      className="text-sm text-on-surface-variant"
                      htmlFor="email"
                    >
                      Business Email
                    </label>
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-shadow outline-none"
                      id="email"
                      placeholder="jane@acme.com"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  {/* Project Type */}
                  <div className="space-y-2">
                    <label
                      className="text-sm text-on-surface-variant"
                      htmlFor="projectType"
                    >
                      Project Type
                    </label>
                    <div className="relative">
                      <select
                        className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-on-surface appearance-none focus:ring-1 focus:ring-primary focus:border-primary transition-shadow cursor-pointer outline-none"
                        id="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                      >
                        <option value="" disabled>
                          Select an area of interest...
                        </option>
                        <option value="commercial">
                          Commercial Infrastructure
                        </option>
                        <option value="residential">
                          Residential Development
                        </option>
                        <option value="industrial">
                          Industrial Facilities
                        </option>
                        <option value="pvc">Industrial PVC Products</option>
                        <option value="panels">
                          Fluted Panels & Wall Systems
                        </option>
                        <option value="rubber">
                          Rubber Systems
                        </option>
                        <option value="sealing">
                          Sealing & TKT Sheets
                        </option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
                        <span className="material-symbols-outlined text-xl">
                          expand_more
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      className="text-sm text-on-surface-variant"
                      htmlFor="message"
                    >
                      Project Details
                    </label>
                    <textarea
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-shadow resize-none outline-none"
                      id="message"
                      placeholder="Briefly describe your requirements..."
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  {/* Submit */}
                  <div className="pt-4">
                    <button
                      className="w-full bg-primary text-on-primary font-body font-medium text-lg px-6 py-4 rounded-lg hover:bg-primary-container hover:text-on-primary-container transition-colors duration-300 flex justify-center items-center group"
                      type="submit"
                    >
                      Submit Inquiry
                      <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                  <p className="text-xs text-on-surface-variant text-center mt-4 opacity-70">
                    By submitting, you agree to our Privacy Policy regarding
                    the handling of your data.
                  </p>
                </form>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
