export default function ContactInfoSection() {
  return (
    <section id="contact-info" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-24 scroll-reveal">
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-on-surface leading-tight mb-8 sm:mb-12">
        Contact Info
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Headquarters */}
        <div className="p-5 sm:p-6 bg-surface-container-low rounded-xl">
          <span className="material-symbols-outlined text-primary text-3xl mb-4 block">
            location_on
          </span>
          <h3 className="font-headline text-lg sm:text-xl font-medium text-on-surface mb-2">
            Headquarters
          </h3>
          <p className="font-body text-sm text-on-surface-variant leading-relaxed">
            NP 9/191A, KALKUDAMBIL,<br />
            NARIKKUNI, KOZHIKKODE,<br />
            Kerala (Code 32)
          </p>
        </div>

        {/* Phone */}
        <div className="p-5 sm:p-6 bg-surface-container-low rounded-xl">
          <span className="material-symbols-outlined text-primary text-3xl mb-4 block">
            call
          </span>
          <h3 className="font-headline text-lg sm:text-xl font-medium text-on-surface mb-2">
            Phone
          </h3>
          <p className="font-body text-sm text-on-surface-variant leading-relaxed">
            <a href="tel:+919846283677" className="hover:text-primary transition-colors block">+91 98462 83677</a>
            <a href="tel:+919074521254" className="hover:text-primary transition-colors block">+91 90745 21254</a>
          </p>
        </div>

        {/* Email */}
        <div className="p-5 sm:p-6 bg-surface-container-low rounded-xl">
          <span className="material-symbols-outlined text-primary text-3xl mb-4 block">
            mail
          </span>
          <h3 className="font-headline text-lg sm:text-xl font-medium text-on-surface mb-2">
            Email
          </h3>
          <p className="font-body text-sm text-on-surface-variant leading-relaxed">
            <a href="mailto:globalcareclt@gmail.com" className="hover:text-primary transition-colors">globalcareclt@gmail.com</a>
          </p>
        </div>
      </div>

      {/* Business Info */}
      <div className="mt-6 sm:mt-8 p-5 sm:p-6 bg-surface-container-low rounded-xl inline-flex flex-col sm:flex-row gap-4 sm:gap-8">
        <span className="font-body text-sm text-on-surface-variant">
          <strong className="text-on-surface">GSTIN/UIN:</strong> 32CMOPS4809P2Z8
        </span>
        <span className="font-body text-sm text-on-surface-variant">
          <strong className="text-on-surface">PAN/IT No:</strong> CMOPS4809P
        </span>
      </div>
    </section>
  );
}
