import { Landmark, Gift, Gavel, HeartCrack, FileWarning, ShoppingCart } from "lucide-react";

const cases = [
  { icon: Landmark, title: "Erbschaft", desc: "Überprüfung der steuerlichen Bewertung bei Erbschaften und Nachlassregelungen.", img: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&w=400" },
  { icon: Gift, title: "Schenkung", desc: "Faire Bewertung bei Schenkungen zur Minimierung der Schenkungssteuer.", img: "https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&w=400" },
  { icon: Gavel, title: "Zwangsversteigerung", desc: "Gutachten für Zwangsversteigerungen und gerichtliche Auseinandersetzungen.", img: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&w=400" },
  { icon: HeartCrack, title: "Scheidung & Trennung", desc: "Objektive Bewertung für Vermögensauseinandersetzungen bei Scheidung.", img: "https://images.pexels.com/photos/4098232/pexels-photo-4098232.jpeg?auto=compress&w=400" },
  { icon: FileWarning, title: "Einspruch Finanzamt", desc: "Professionelle Unterstützung beim Einspruch gegen zu hohe Steuerbescheide.", img: "https://images.pexels.com/photos/6863254/pexels-photo-6863254.jpeg?auto=compress&w=400" },
  { icon: ShoppingCart, title: "Kauf & Verkauf", desc: "Marktgerechte Bewertung als Grundlage für Kauf- oder Verkaufsentscheidungen.", img: "https://images.pexels.com/photos/8293700/pexels-photo-8293700.jpeg?auto=compress&w=400" },
];

const UseCasesSection = () => (
  <section className="py-12 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10 font-['Plus_Jakarta_Sans']">
        In diesen Situationen wenden sich Mandanten an FS Immobilienbewertung
      </h2>
      <div className="grid lg:grid-cols-3 gap-8 items-stretch">
        {/* Left: tall building photo */}
        <div className="hidden lg:block rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800"
            alt="Wohngegend"
            className="w-full h-full object-cover rounded-xl min-h-[400px]"
            loading="lazy"
          />
        </div>
        {/* Right: 2x3 grid of cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cases.map(({ img, title, desc }) => (
            <div key={title} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={img} alt={title} className="w-full h-28 object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-bold text-foreground text-sm mb-1">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default UseCasesSection;
