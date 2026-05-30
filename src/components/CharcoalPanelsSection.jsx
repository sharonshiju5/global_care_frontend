import charcoalPanelDetail from "../assets/images/charcoal-panel-detail.jpg";
import charcoalLivingRoom from "../assets/images/charcoal-living-room.jpg";

export default function CharcoalPanelsSection() {
  return (
    <section id="charcoal-panels" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-16 items-center">
      <div className="lg:col-span-5 space-y-6 sm:space-y-8 scroll-reveal">
        <span className="text-tertiary font-label uppercase tracking-widest text-xs sm:text-sm font-semibold block">
          Series 02
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-on-surface leading-tight">
          Charcoal <br />
          Wall Systems
        </h2>
        <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
          A study in contrast and depth. Our charcoal panels provide a
          sophisticated backdrop, absorbing light to create intimate, focused
          environments while maintaining strict fire-safety ratings.
        </p>
        <div className="pt-2 sm:pt-4 scroll-reveal delay-100">
          <a href="#contact-info" className="bg-surface border border-outline-variant text-on-surface px-5 sm:px-6 py-3 rounded-lg font-label font-medium hover:border-primary hover:text-primary transition-colors flex items-center gap-2 group text-sm sm:text-base w-fit">
            Order Sample Kit
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              arrow_right_alt
            </span>
          </a>
        </div>
      </div>
      <div className="lg:col-span-7">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 h-[350px] sm:h-[450px] md:h-[600px]">
          <div className="col-span-1 row-span-2 rounded-xl sm:rounded-2xl overflow-hidden bg-surface-container-high relative group scroll-reveal delay-100">
            <img
              alt="Close-up detail of a dark charcoal textured wall panel with organic undulation"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 parallax-bg"
              data-parallax-speed="-0.1"
              src={charcoalPanelDetail}
            />
            <div className="absolute inset-0 bg-linear-to-t from-on-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
              <span className="font-headline text-surface-container-lowest text-sm sm:text-lg">
                Matte Finish
              </span>
            </div>
          </div>
          <div className="col-span-1 row-span-1 rounded-xl sm:rounded-2xl overflow-hidden bg-surface-container relative group scroll-reveal delay-200">
            <img
              alt="A modern living room featuring an accent wall made of vertical charcoal panels"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={charcoalLivingRoom}
            />
          </div>
          <div className="col-span-1 row-span-1 rounded-xl sm:rounded-2xl overflow-hidden bg-primary-container p-4 sm:p-8 flex flex-col justify-between scroll-reveal delay-300">
            <span className="material-symbols-outlined text-on-primary-container text-2xl sm:text-4xl">
              local_fire_department
            </span>
            <div>
              <h4 className="font-headline font-semibold text-base sm:text-xl text-on-primary-container">
                Class A Rated
              </h4>
              <p className="font-body text-xs sm:text-sm text-on-primary-container/80 mt-1">
                Exceeds standard commercial fire safety regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
