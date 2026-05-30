import { useState } from "react";
import TopNavBar from "../../components/TopNavBar";
import Footer from "../../components/Footer";

export default function InquiryPage() {
  const [step, setStep] = useState(1);
  const [inquiryType, setInquiryType] = useState("project");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    message: "",
    newsletter: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const nextStep = (nextVal) => {
    if (nextVal >= 1 && nextVal <= 3) {
      setStep(nextVal);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Progress Bar Width
  const progressWidth = step === 1 ? "33.33%" : step === 2 ? "66.66%" : "100%";

  return (
    <div className="bg-background text-on-background font-body antialiased min-h-screen flex flex-col pt-24">
      <TopNavBar activePage="inquiry" />

      {/* Main Content Canvas */}
      <main className="flex-grow max-w-screen-xl mx-auto w-full px-6 md:px-12 py-16">
        {/* Header Section */}
        <header className="mb-16 max-w-3xl">
          <h1 className="font-headline text-5xl md:text-6xl text-on-background leading-tight mb-6 tracking-tight">
            Initiate a Consultation
          </h1>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed max-w-2xl">
            Connect with our architectural materials specialists. Whether you require comprehensive project consultation, technical documentation, or customized product catalogs, our team is prepared to assist with your specific requirements.
          </p>
        </header>

        {/* Bento Grid Layout for Inquiry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Context & Contact Info (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Info Card 1 */}
            <div className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/60 shadow-[0_2px_16px_rgba(58,48,42,0.04)]">
              <span className="material-symbols-outlined text-primary mb-4 text-3xl">support_agent</span>
              <h3 className="font-headline text-2xl text-on-background mb-3">Direct Support</h3>
              <p className="font-body text-on-surface-variant mb-6">Our technical team is available during standard business hours to provide immediate assistance on product specifications.</p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-on-surface">
                  <span className="material-symbols-outlined text-secondary mt-1">call</span>
                  <div className="flex flex-col">
                    <span className="font-medium">+91 98462 83677</span>
                    <span className="font-medium">+91 90745 21254</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-on-surface">
                  <span className="material-symbols-outlined text-secondary">mail</span>
                  <span className="font-medium break-all">globalcareclt@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Info Card 2 */}
            <div className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/60 shadow-[0_2px_16px_rgba(58,48,42,0.04)]">
              <span className="material-symbols-outlined text-primary mb-4 text-3xl">location_on</span>
              <h3 className="font-headline text-2xl text-on-background mb-3">Office Address</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                <strong>GLOBAL CARE MARKETING</strong><br />
                NP 9/191A, KALKUDAMBIL,<br />
                NARIKKUNI, KOZHIKKODE<br />
                Kerala, State Code: 32
              </p>
              <div className="mt-6 pt-4 border-t border-outline-variant/40 space-y-2 text-sm text-on-surface-variant">
                <div><strong>GSTIN/UIN:</strong> 32CMOPS4809P2Z8</div>
                <div><strong>PAN/IT No:</strong> CMOPS4809P</div>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-step Form (8 cols) */}
          <div className="lg:col-span-8">
            <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl border border-outline-variant/60 shadow-[0_2px_16px_rgba(58,48,42,0.04)] relative overflow-hidden">
              
              {/* Progress bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary/20">
                <div 
                  className="h-full bg-primary transition-all duration-500 ease-in-out" 
                  style={{ width: progressWidth }}
                ></div>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-6">
                  <span className="material-symbols-outlined text-primary text-6xl">check_circle</span>
                  <h2 className="font-headline text-4xl text-on-background">Inquiry Submitted Successfully</h2>
                  <p className="font-body text-on-surface-variant max-w-md mx-auto">
                    Thank you for contacting Global Care. A material specialist will review your project details and reach out within 24 business hours.
                  </p>
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        company: "",
                        role: "",
                        message: "",
                        newsletter: false,
                      });
                    }}
                    className="bg-primary text-on-primary px-8 py-3 rounded-lg font-medium hover:bg-primary-container transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10 mt-4">
                  {/* Step 1: Inquiry Type */}
                  {step === 1 && (
                    <div className="form-step transition-opacity duration-300">
                      <h2 className="font-headline text-3xl text-on-background mb-2">Nature of Inquiry</h2>
                      <p className="font-body text-on-surface-variant mb-8 text-sm">Please select the primary reason for your message to help us route your request to the appropriate specialist.</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Option 1 */}
                        <label className={`relative flex cursor-pointer rounded-lg border p-6 focus:outline-none transition-colors ${inquiryType === "project" ? "border-primary bg-surface-container-low" : "border-outline-variant bg-surface-container-low hover:border-primary/50"}`}>
                          <input 
                            checked={inquiryType === "project"}
                            onChange={() => setInquiryType("project")}
                            className="sr-only" 
                            name="inquiry_type" 
                            type="radio" 
                            value="project"
                          />
                          <div className="w-full">
                            <div className="flex items-center justify-between">
                              <span className="font-headline text-xl text-on-background">Project Consultation</span>
                              <span className={`material-symbols-outlined ${inquiryType === "project" ? "text-primary" : "text-outline"}`}>architecture</span>
                            </div>
                            <p className="mt-2 text-sm text-on-surface-variant">Discuss materials for an upcoming architectural project.</p>
                          </div>
                        </label>
                        
                        {/* Option 2 */}
                        <label className={`relative flex cursor-pointer rounded-lg border p-6 focus:outline-none transition-colors ${inquiryType === "technical" ? "border-primary bg-surface-container-low" : "border-outline-variant bg-surface-container-low hover:border-primary/50"}`}>
                          <input 
                            checked={inquiryType === "technical"}
                            onChange={() => setInquiryType("technical")}
                            className="sr-only" 
                            name="inquiry_type" 
                            type="radio" 
                            value="technical"
                          />
                          <div className="w-full">
                            <div className="flex items-center justify-between">
                              <span className="font-headline text-xl text-on-background">Technical Support</span>
                              <span className={`material-symbols-outlined ${inquiryType === "technical" ? "text-primary" : "text-outline"}`}>science</span>
                            </div>
                            <p className="mt-2 text-sm text-on-surface-variant">Request SDS, specifications, or installation data.</p>
                          </div>
                        </label>

                        {/* Option 3 */}
                        <label className={`relative flex cursor-pointer rounded-lg border p-6 focus:outline-none transition-colors ${inquiryType === "catalog" ? "border-primary bg-surface-container-low" : "border-outline-variant bg-surface-container-low hover:border-primary/50"}`}>
                          <input 
                            checked={inquiryType === "catalog"}
                            onChange={() => setInquiryType("catalog")}
                            className="sr-only" 
                            name="inquiry_type" 
                            type="radio" 
                            value="catalog"
                          />
                          <div className="w-full">
                            <div className="flex items-center justify-between">
                              <span className="font-headline text-xl text-on-background">Catalog Request</span>
                              <span className={`material-symbols-outlined ${inquiryType === "catalog" ? "text-primary" : "text-outline"}`}>menu_book</span>
                            </div>
                            <p className="mt-2 text-sm text-on-surface-variant">Order physical samples or comprehensive product catalogs.</p>
                          </div>
                        </label>

                        {/* Option 4 */}
                        <label className={`relative flex cursor-pointer rounded-lg border p-6 focus:outline-none transition-colors ${inquiryType === "other" ? "border-primary bg-surface-container-low" : "border-outline-variant bg-surface-container-low hover:border-primary/50"}`}>
                          <input 
                            checked={inquiryType === "other"}
                            onChange={() => setInquiryType("other")}
                            className="sr-only" 
                            name="inquiry_type" 
                            type="radio" 
                            value="other"
                          />
                          <div className="w-full">
                            <div className="flex items-center justify-between">
                              <span className="font-headline text-xl text-on-background">General Inquiry</span>
                              <span className={`material-symbols-outlined ${inquiryType === "other" ? "text-primary" : "text-outline"}`}>forum</span>
                            </div>
                            <p className="mt-2 text-sm text-on-surface-variant">Partnerships, press, or other generic requests.</p>
                          </div>
                        </label>
                      </div>
                      
                      <div className="mt-10 flex justify-end">
                        <button 
                          className="bg-primary text-on-primary px-8 py-3 rounded-lg font-medium tracking-wide hover:bg-primary-container transition-colors flex items-center space-x-2" 
                          onClick={() => nextStep(2)} 
                          type="button"
                        >
                          <span>Continue</span>
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Contact Details */}
                  {step === 2 && (
                    <div className="form-step transition-opacity duration-300">
                      <h2 className="font-headline text-3xl text-on-background mb-2">Professional Details</h2>
                      <p className="font-body text-on-surface-variant mb-8 text-sm">Please provide your contact information to ensure a prompt response from our team.</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-on-surface" htmlFor="firstName">First Name</label>
                          <input 
                            className="w-full bg-surface-container-lowest border border-outline-variant rounded-md px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-shadow text-on-background placeholder-outline" 
                            id="firstName" 
                            value={formData.firstName}
                            onChange={handleInputChange}
                            type="text"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-on-surface" htmlFor="lastName">Last Name</label>
                          <input 
                            className="w-full bg-surface-container-lowest border border-outline-variant rounded-md px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-shadow text-on-background placeholder-outline" 
                            id="lastName" 
                            value={formData.lastName}
                            onChange={handleInputChange}
                            type="text"
                            required
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <label className="block text-sm font-medium text-on-surface" htmlFor="email">Professional Email</label>
                          <input 
                            className="w-full bg-surface-container-lowest border border-outline-variant rounded-md px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-shadow text-on-background placeholder-outline" 
                            id="email" 
                            value={formData.email}
                            onChange={handleInputChange}
                            type="email"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-on-surface" htmlFor="company">Company / Firm</label>
                          <input 
                            className="w-full bg-surface-container-lowest border border-outline-variant rounded-md px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-shadow text-on-background placeholder-outline" 
                            id="company" 
                            value={formData.company}
                            onChange={handleInputChange}
                            type="text"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-on-surface" htmlFor="role">Role</label>
                          <select 
                            className="w-full bg-surface-container-lowest border border-outline-variant rounded-md px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-shadow text-on-background" 
                            id="role"
                            value={formData.role}
                            onChange={handleInputChange}
                          >
                            <option value="">Select your role</option>
                            <option value="architect">Architect</option>
                            <option value="contractor">Contractor</option>
                            <option value="designer">Designer</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="mt-10 flex justify-between items-center">
                        <button 
                          className="text-on-surface-variant hover:text-primary transition-colors flex items-center space-x-2 font-medium" 
                          onClick={() => nextStep(1)} 
                          type="button"
                        >
                          <span className="material-symbols-outlined text-sm">arrow_back</span>
                          <span>Back</span>
                        </button>
                        <button 
                          className="bg-primary text-on-primary px-8 py-3 rounded-lg font-medium tracking-wide hover:bg-primary-container transition-colors flex items-center space-x-2" 
                          onClick={() => nextStep(3)} 
                          type="button"
                          disabled={!formData.firstName || !formData.lastName || !formData.email}
                        >
                          <span>Continue</span>
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Message & Submission */}
                  {step === 3 && (
                    <div className="form-step transition-opacity duration-300">
                      <h2 className="font-headline text-3xl text-on-background mb-2">Project Specifications</h2>
                      <p className="font-body text-on-surface-variant mb-8 text-sm">Elaborate on your requirements so we can prepare relevant materials before contacting you.</p>
                      
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-on-surface" htmlFor="message">Additional Details</label>
                          <textarea 
                            className="w-full bg-surface-container-lowest border border-outline-variant rounded-md px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-shadow text-on-background placeholder-outline resize-none" 
                            id="message" 
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Describe the scope, timeline, or specific materials you are inquiring about..." 
                            rows="5"
                          ></textarea>
                        </div>
                        <div className="flex items-start space-x-3 bg-surface-container-low p-4 rounded-md border border-outline-variant/50">
                          <div className="flex items-center h-5 mt-1">
                            <input 
                              className="w-4 h-4 text-primary bg-surface-container-lowest border-outline-variant rounded focus:ring-primary focus:ring-2" 
                              id="newsletter" 
                              checked={formData.newsletter}
                              onChange={handleInputChange}
                              type="checkbox"
                            />
                          </div>
                          <label className="text-sm text-on-surface-variant leading-relaxed" htmlFor="newsletter">
                            Subscribe to the Global Care journal for updates on new material innovations and architectural case studies.
                          </label>
                        </div>
                      </div>
                      
                      <div className="mt-10 flex justify-between items-center">
                        <button 
                          className="text-on-surface-variant hover:text-primary transition-colors flex items-center space-x-2 font-medium" 
                          onClick={() => nextStep(2)} 
                          type="button"
                        >
                          <span className="material-symbols-outlined text-sm">arrow_back</span>
                          <span>Back</span>
                        </button>
                        <button 
                          className="bg-primary text-on-primary px-8 py-3 rounded-lg font-medium tracking-wide hover:bg-primary-container transition-colors shadow-sm" 
                          type="submit"
                        >
                          Submit Inquiry
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
