import { ArrowRight } from "lucide-react";

const steps = [
  { num: 1, title: "Kostenfreie Erstberatung", desc: "Wir analysieren Ihre Situation und prüfen, ob ein Gutachten sinnvoll ist." },
  { num: 2, title: "Gutachten & Bewertung", desc: "Erstellung eines fundierten Verkehrswertgutachtens durch unsere Sachverständigen." },
  { num: 3, title: "Einspruch & Vertretung", desc: "Wir unterstützen Sie beim Einspruch beim Finanzamt und bei Klageverfahren." },
];

const StepsSection = () => (
  <section className="py-12 bg-background">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10 font-['Plus_Jakarta_Sans']">
        So kommen Sie zu einer fairen Immobilienbewertung
      </h2>
      {/* Desktop: horizontal */}
      <div className="hidden md:grid md:grid-cols-3 gap-8 items-start">
        {steps.map(({ num, title, desc }, i) => (
          <div key={num} className="relative text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full border-2 border-primary flex items-center justify-center">
              <span className="text-primary font-bold text-lg">{num}</span>
            </div>
            <h3 className="font-bold text-foreground text-sm mb-2">{title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs mx-auto">{desc}</p>
            {i < 2 && (
              <ArrowRight className="absolute top-7 -right-4 w-6 h-6 text-primary/40" />
            )}
          </div>
        ))}
      </div>
      {/* Mobile: vertical with connecting line */}
      <div className="md:hidden flex flex-col items-center relative">
        {steps.map(({ num, title, desc }, i) => (
          <div key={num} className="relative flex flex-col items-center text-center z-10">
            {/* Connecting line above (not for first) */}
            {i > 0 && (
              <div className="w-0.5 h-8 bg-primary/30" />
            )}
            <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center bg-background">
              <span className="text-primary font-bold text-lg">{num}</span>
            </div>
            <h3 className="font-bold text-foreground text-sm mb-1 mt-3">{title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs mb-2">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StepsSection;
