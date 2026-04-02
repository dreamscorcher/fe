import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import fsLogo from "@/assets/fs-logo.png";

const navLinks = [
  "Leistungen", "Typische Fälle", "Immobilienbewertung", "Über uns", "Blog"
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <img src={fsLogo} alt="FS Immobilienbewertung" className="h-14 md:h-16 w-auto" />
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a>
          ))}
        </div>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+4915888651952" className="flex items-center gap-1.5 text-sm text-foreground font-medium">
            <Phone className="w-4 h-4 text-primary" />
            +49 15888 651952
          </a>
          <a href="#kontakt" className="bg-accent text-accent-foreground text-sm font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity">
            Jetzt Beratung anfordern →
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l} href="#" className="block text-sm text-muted-foreground py-2">{l}</a>
          ))}
          <a href="tel:+4915888651952" className="flex items-center gap-1.5 text-sm text-foreground font-medium py-2">
            <Phone className="w-4 h-4 text-primary" /> +49 15888 651952
          </a>
          <a href="#kontakt" className="block bg-accent text-accent-foreground text-sm font-semibold px-5 py-2.5 rounded-md text-center">
            Jetzt Beratung anfordern →
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
