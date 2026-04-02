import { Check, Star } from "lucide-react";
import LeadForm from "./LeadForm";

const bullets = [
  "Spezialisiert auf Steuerfälle",
  "Erfahrung mit Einsprüchen & Klageverfahren",
  "Erfahrung mit dem Finanzamt",
  "Keine Kostenrisiken",
];

const HeroSection = () => (
  <section
    className="relative"
    style={{
      backgroundImage: `url(https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Dark green overlay */}
    <div className="absolute inset-0" style={{ background: 'rgba(10, 50, 25, 0.78)' }} />

    <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-5 gap-8 items-start py-16 md:py-20">
      {/* Left */}
      <div className="lg:col-span-3 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] leading-tight font-bold text-white mb-4 font-['Plus_Jakarta_Sans']">
          Ist Ihre Immobilie vom Finanzamt zu hoch bewertet?
        </h1>
        <p className="text-white/80 text-sm md:text-base mb-6 max-w-lg">
          Wir helfen Ihnen, die Bewertung Ihrer Immobilie durch das Finanzamt zu überprüfen und gegebenenfalls zu korrigieren – professionell, transparent und ohne Kostenrisiko.
        </p>
        <ul className="space-y-2 mb-8">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-3 text-white font-medium text-sm">
              <span className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </span>
              {b}
            </li>
          ))}
        </ul>
        <a href="#kontakt" className="inline-block bg-accent text-white font-semibold py-3 px-6 rounded-md hover:opacity-90 transition-opacity text-sm mb-6 w-fit">
          Kostenfreie Beratung anfordern →
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

      {/* Right - Form */}
      <div className="lg:col-span-2 relative lg:mb-[-20px]">
        <LeadForm variant="hero" />
      </div>
    </div>
  </section>
);

export default HeroSection;
