import { Phone, Star, User } from "lucide-react";
import LeadForm from "./LeadForm";

const BottomCTASection = () => (
  <section className="py-12 bg-primary">
    <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-10 items-start">
      {/* Left */}
      <div className="text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
          Lassen Sie Ihre Immobilie jetzt prüfen
        </h2>
        <p className="text-white/80 text-sm mb-4 leading-relaxed">
          Unsere spezialisierten Sachverständigen analysieren Ihre Immobilienbewertung und zeigen Ihnen, ob ein Einspruch sinnvoll ist – kostenlos und unverbindlich.
        </p>
        <p className="text-white font-medium mb-5">Unverbindlich · Vertraulich · Ohne Kostenrisiko</p>
        <a href="tel:+4915888651952" className="flex items-center gap-2 text-white text-lg font-bold mb-6">
          <Phone className="w-5 h-5" /> +49 15888 651952
        </a>
        <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 w-fit mb-6">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-white font-bold text-sm">4.9</span>
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="text-white/60 text-xs">Basierend auf Google Bewertungen</span>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800"
          alt="Immobilie"
          className="rounded-xl object-cover max-h-48 w-full"
          loading="lazy"
        />
      </div>
      {/* Right form */}
      <LeadForm darkBg ctaText="Jetzt kostenlose Ersteinschätzung sichern →" ctaStyle="green" />
    </div>
  </section>
);

export default BottomCTASection;
