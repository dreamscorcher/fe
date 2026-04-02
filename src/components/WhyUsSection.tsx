const cards = [
  {
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400",
    title: "Spezialisierung auf Steuerfälle",
    desc: "Wir sind auf die steuerliche Bewertung von Immobilien spezialisiert und kennen die typischen Fehlerquellen.",
  },
  {
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400",
    title: "Unabhängig & neutral",
    desc: "Unsere Gutachten sind unabhängig, objektiv und gerichtsfest – frei von Interessenkonflikten.",
  },
  {
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400",
    title: "Erfahrung mit Einsprüchen",
    desc: "Wir kennen die Prozesse beim Finanzamt und unterstützen Sie bei Einsprüchen und Klageverfahren.",
  },
  {
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400",
    title: "Netzwerk aus Experten",
    desc: "Zusammenarbeit mit Steuerberatern, Anwälten und Sachverständigen für optimale Ergebnisse.",
  },
  {
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400",
    title: "Klare Kommunikation",
    desc: "Persönliche Beratung, transparente Abläufe und faire Konditionen ohne versteckte Kosten.",
  },
];

const WhyUsSection = () => (
  <section className="py-12 bg-background">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10 font-['Plus_Jakarta_Sans']">
        Warum FS Immobilienbewertung?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {cards.map(({ img, title, desc }) => (
          <div key={title} className="text-center p-4 rounded-xl border border-border bg-card hover:shadow-md transition-shadow">
            <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
              <img src={img} alt={title} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <h3 className="text-sm font-bold text-foreground mb-2">{title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
