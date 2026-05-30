import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-surface-dim w-full py-10 sm:py-16 px-4 sm:px-6 md:px-12 border-t border-outline-variant/20 scroll-reveal">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12">
        <div className="col-span-1 space-y-4">
          <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface">
            GLOBAL CARE MARKETING
          </h3>
          <p className="font-body text-sm text-on-surface-variant leading-relaxed">
            NP 9/191A, KALKUDAMBIL,<br />
            NARIKKUNI, KOZHIKKODE<br />
            Kerala, Code: 32
          </p>
          <div className="font-body text-xs text-on-surface-variant space-y-1 pt-2">
            <div><strong>GSTIN:</strong> 32CMOPS4809P2Z8</div>
            <div><strong>PAN:</strong> CMOPS4809P</div>
            <div><strong>Call:</strong> 98462 83677, 9074521254</div>
            <div><strong>Email:</strong> globalcareclt@gmail.com</div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="flex flex-col space-y-3">
            <h4 className="font-headline text-base sm:text-lg font-semibold text-on-surface mb-1 sm:mb-2">
              Resources
            </h4>
            <a
              className="font-body text-sm text-on-secondary-container opacity-80 hover:text-primary transition-colors"
              href="#"
            >
              Technical Specifications
            </a>
            <a
              className="font-body text-sm text-on-secondary-container opacity-80 hover:text-primary transition-colors"
              href="#"
            >
              Material Safety
            </a>
          </div>
          <div className="flex flex-col space-y-3">
            <h4 className="font-headline text-base sm:text-lg font-semibold text-on-surface mb-1 sm:mb-2">
              Company
            </h4>
            <a
              className="font-body text-sm text-on-secondary-container opacity-80 hover:text-primary transition-colors"
              href="#"
            >
              Global Distribution
            </a>
            <Link
              className="font-body text-sm text-on-secondary-container opacity-80 hover:text-primary transition-colors"
              to="/about"
            >
              About Us
            </Link>
          </div>
          <div className="flex flex-col space-y-3">
            <h4 className="font-headline text-base sm:text-lg font-semibold text-on-surface mb-1 sm:mb-2">
              Legal
            </h4>
            <a
              className="font-body text-sm text-on-secondary-container opacity-80 hover:text-primary transition-colors"
              href="#"
            >
              Legal Notice
            </a>
            <a
              className="font-body text-sm text-on-secondary-container opacity-80 hover:text-primary transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1920px] mx-auto mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-outline-variant/20 flex flex-col sm:flex-row justify-between items-center">
        <p className="font-body text-xs sm:text-sm text-on-surface-variant">
          © 2024 Global Care. Archival Industrial Excellence.
        </p>
      </div>
    </footer>
  );
}
