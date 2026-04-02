import { useState, useEffect } from "react";

const StickyBottomBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${show ? "translate-y-0" : "translate-y-full"}`}
    >
      {/* Mobile */}
      <div className="sm:hidden bg-primary/95 backdrop-blur-sm border-t border-white/10 px-4 py-3 safe-bottom">
        <a
          href="#kontakt"
          className="block w-full bg-accent text-white text-center text-[15px] font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-accent/25"
        >
          Kostenlose Beratung anfragen →
        </a>
        <div className="flex items-center justify-center gap-3 mt-2">
          <div className="flex items-center gap-1">
            <span className="text-amber-400 text-[10px]">★★★★★</span>
            <span className="text-white/50 text-[10px]">4.9</span>
          </div>
          <span className="text-white/30 text-[10px]">·</span>
          <span className="text-white/40 text-[10px]">500+ Mandanten vertrauen uns</span>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex bg-primary py-2.5 px-8 items-center justify-center gap-4">
        <div className="flex items-center gap-4 text-white/70 text-xs">
          <span>500+ Mandanten</span>
          <span className="text-white/30">|</span>
          <span>4.9★ Google</span>
          <span className="text-white/30">|</span>
          <span>98% Erfolg</span>
        </div>
        <a
          href="#kontakt"
          className="bg-accent text-white text-sm font-semibold px-5 py-2 rounded-md hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Kostenlose Beratung →
        </a>
      </div>
    </div>
  );
};

export default StickyBottomBar;
