export default function SolutionsFooter() {
  return (
    <footer className="w-full py-10 sm:py-16 px-4 sm:px-6 md:px-12 bg-surface-dim border-t border-outline-variant/30 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12  max-w-[1920px] mx-auto">
        <div className="col-span-1 space-y-4">
          <span className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight block">
            GLOBAL CARE MARKETING
          </span>
          <p className="font-body text-sm text-on-surface-variant leading-relaxed opacity-85">
            NP 9/191A, KALKUDAMBIL,<br />
            NARIKKUNI, KOZHIKKODE<br />
            Kerala, Code: 32
          </p>
          <div className="font-body text-xs text-on-surface-variant space-y-1 pt-2 opacity-85">
            <div><strong>GSTIN:</strong> 32CMOPS4809P2Z8</div>
            <div><strong>PAN:</strong> CMOPS4809P</div>
            <div><strong>Call:</strong> 98462 83677, 9074521254</div>
            <div><strong>Email:</strong> globalcareclt@gmail.com</div>
          </div>
          <p className="font-body text-xs text-on-surface-variant pt-2 opacity-70">
            © 2024 Global Care. All rights reserved.
          </p>
        </div>
        <div className="col-span-1 md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="flex flex-col space-y-3">
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
            <a
              className="font-body text-sm text-on-secondary-container opacity-80 hover:text-primary transition-colors"
              href="#"
            >
              Global Distribution
            </a>
          </div>
          <div className="flex flex-col space-y-3">
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
    </footer>
  );
}
