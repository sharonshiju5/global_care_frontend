import pvcDoorsHallway from "../assets/images/pvc-doors-hallway.jpg";

export default function PvcDoorsSection() {
  return (
    <section id="pvc-doors" className="bg-surface-container-low py-12 sm:py-24 mt-8 sm:mt-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
        <div className="order-2 lg:order-1 relative h-[350px] sm:h-[500px] lg:h-[700px] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-soft bg-surface scroll-reveal">
          <img
            alt="A sophisticated hallway showcasing a series of tall, robust PVC doors with an earthy, warm sienna finish"
            className="w-full h-full object-cover opacity-90 mix-blend-multiply parallax-bg"
            data-parallax-speed="-0.15"
            src={pvcDoorsHallway}
          />
          {/* Floating Spec Card */}
          <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 bg-surface/95 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-soft border border-outline-variant/30 max-w-[200px] sm:max-w-xs scroll-reveal delay-200">
            <h4 className="font-headline font-semibold text-base sm:text-xl text-on-surface mb-1 sm:mb-2">
              Thermal Core
            </h4>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant mb-2 sm:mb-4">
              Multi-chambered extrusion design for optimal insulation and
              structural integrity.
            </p>
            <a
              className="text-primary font-label text-xs sm:text-sm font-medium hover:underline flex items-center gap-1"
              href="#"
            >
              Technical Data
              <span className="material-symbols-outlined text-xs">
                open_in_new
              </span>
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-6 sm:space-y-8 scroll-reveal delay-100">
          <span className="text-tertiary font-label uppercase tracking-widest text-xs sm:text-sm font-semibold block">
            Series 01
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-on-surface leading-tight">
            Architectural <br />
            PVC Doors
          </h2>
          <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Engineered for both aesthetic warmth and industrial resilience. Our
            PVC collection transcends traditional plastics, offering deep
            textures and rich, sun-baked color profiles that ground any space.
          </p>
          <ul className="space-y-4 pt-2 sm:pt-4">
            <li className="flex items-start gap-3 sm:gap-4 scroll-reveal delay-200">
              <span className="material-symbols-outlined text-primary mt-1 text-xl sm:text-2xl">
                check_circle
              </span>
              <div>
                <strong className="font-headline text-lg sm:text-xl block text-on-surface">
                  Dimensional Stability
                </strong>
                <span className="font-body text-xs sm:text-sm text-on-surface-variant">
                  Resists warping and expansion under severe temperature
                  fluctuations.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3 sm:gap-4 scroll-reveal delay-300">
              <span className="material-symbols-outlined text-primary mt-1 text-xl sm:text-2xl">
                check_circle
              </span>
              <div>
                <strong className="font-headline text-lg sm:text-xl block text-on-surface">
                  Acoustic Dampening
                </strong>
                <span className="font-body text-xs sm:text-sm text-on-surface-variant">
                  Advanced core structures minimize sound transmission between
                  zones.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
