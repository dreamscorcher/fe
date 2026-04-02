import { Phone, Star } from "lucide-react";

const WhySpecializedSection = () => (
  <section className="py-12 bg-background">
    <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-10 items-center">
      {/* Left text */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-['Plus_Jakarta_Sans']">
          Warum eine spezialisierte Immobilienbewertung entscheidend ist
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          Standardbewertungen des Finanzamts basieren auf pauschalen Verfahren, die individuelle Besonderheiten Ihrer Immobilie oft nicht berücksichtigen. Ein spezialisiertes Gutachten kann den tatsächlichen Verkehrswert ermitteln und so die Steuerlast deutlich senken.
        </p>
        <a href="tel:+4915888651952" className="flex items-center gap-2 text-primary text-xl font-bold mb-4">
          <Phone className="w-5 h-5" /> +49 15888 651952
        </a>
        <a href="#kontakt" className="inline-block bg-accent text-white font-semibold py-3 px-6 rounded-md hover:opacity-90 transition-opacity text-sm mb-6">
          Kostenlose Beratung →
        </a>
        {/* Google rating badge */}
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-gray-200 w-fit">
          <span className="text-primary font-bold text-lg">4.9</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
          </div>
          <span className="text-gray-500 text-xs">Google</span>
        </div>
      </div>
      {/* Right image */}
      <div className="rounded-xl overflow-hidden h-full min-h-[320px]">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
          alt="Modernes Gebäude"
          className="w-full h-full object-cover rounded-xl"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default WhySpecializedSection;
