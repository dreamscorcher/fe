import { TrendingDown, Wrench, BarChart3, Monitor, AlertTriangle } from "lucide-react";

const problems = [
  { icon: TrendingDown, title: "Bodenrichtwerte sind Durchschnittswerte", desc: "Sie spiegeln nicht den tatsächlichen Wert Ihres Grundstücks wider und führen oft zu Überbewertungen." },
  { icon: Wrench, title: "Zustand und Besonderheiten bleiben unberücksichtigt", desc: "Mängel, Sanierungsstau oder besondere Belastungen werden in der Standardbewertung nicht erfasst." },
  { icon: BarChart3, title: "Vergleichsobjekte sind nicht immer passend", desc: "Die vom Finanzamt herangezogenen Vergleichsdaten passen oft nicht zur individuellen Immobilie." },
  { icon: Monitor, title: "Online-Rechner vermitteln trügerische Sicherheit", desc: "Automatisierte Bewertungstools können die Komplexität einer Immobilienbewertung nicht abbilden." },
  { icon: AlertTriangle, title: "Die Folge: unnötig hohe Steuerbewertung", desc: "Ohne fachkundiges Gutachten zahlen Sie möglicherweise deutlich mehr Steuern als nötig." },
];

const ProblemSection = () => (
  <section className="py-12 bg-primary/5">
    <div className="max-w-4xl mx-auto px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-['Plus_Jakarta_Sans']">
        Das Problem liegt selten bei Ihnen – sondern im Bewertungssystem
      </h2>
      <p className="text-muted-foreground text-sm mb-8 max-w-2xl">
        Viele Immobilienbesitzer zahlen zu viel Erbschafts- oder Schenkungssteuer, weil die Standardbewertung des Finanzamts den tatsächlichen Wert nicht korrekt abbildet.
      </p>
      <div className="space-y-5">
        {problems.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex gap-4 items-start">
            <div className="w-10 h-10 shrink-0 rounded-full bg-primary flex items-center justify-center mt-0.5">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-sm mb-1">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
