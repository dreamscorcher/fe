const types = [
  { img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&w=400", title: "Wohnimmobilien", desc: "Einfamilienhäuser, Eigentumswohnungen, Mehrfamilienhäuser und Reihenhäuser." },
  { img: "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&w=400", title: "Gewerbeimmobilien", desc: "Bürogebäude, Einzelhandelsflächen, Lagerhallen und Produktionsstätten." },
  { img: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&w=400", title: "Sonderimmobilien", desc: "Hotels, Pflegeheime, Kliniken und andere Spezialimmobilien." },
  { img: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&w=400", title: "Grundstücke & Rechte", desc: "Unbebaute Grundstücke, Erbbaurechte und sonstige Rechte an Grundstücken." },
];

const PropertyTypesSection = () => (
  <section className="py-12 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10 font-['Plus_Jakarta_Sans']">
        Für welche Immobilien wir Gutachten erstellen
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {types.map(({ img, title, desc }) => (
          <div key={title} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img src={img} alt={title} className="w-full h-36 object-cover" loading="lazy" />
            <div className="p-5 text-center">
              <h3 className="font-bold text-foreground text-sm mb-2">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PropertyTypesSection;
