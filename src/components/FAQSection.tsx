import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Was sind häufige Fehlerquellen?", a: "Häufige Fehlerquellen sind pauschale Bodenrichtwerte, nicht berücksichtigte Mängel, falsche Vergleichsobjekte und veraltete Datengrundlagen." },
  { q: "Auf welchen Grundlagen basiert das Gutachten?", a: "Unsere Gutachten basieren auf den anerkannten Wertermittlungsverfahren nach ImmoWertV: Vergleichswertverfahren, Ertragswertverfahren und Sachwertverfahren." },
  { q: "Wie lange dauert die Bearbeitung?", a: "In der Regel erstellen wir ein vollständiges Gutachten innerhalb von 2–4 Wochen nach Beauftragung und Objektbesichtigung." },
  { q: "Welche Kosten entstehen?", a: "Die Kosten richten sich nach Art und Umfang der Bewertung. In der Erstberatung besprechen wir transparent alle anfallenden Kosten." },
  { q: "Können Sie auch bei laufenden Einsprüchen helfen?", a: "Ja, wir unterstützen Sie auch bei bereits laufenden Einspruchsverfahren und erstellen nachträglich Gutachten zur Begründung." },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10 font-['Plus_Jakarta_Sans']">
          So kommen Sie zu einer fairen Immobilienbewertung
        </h2>
        <div className="divide-y divide-border">
          {faqs.map(({ q, a }, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between py-5 text-left"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className="text-sm font-semibold text-foreground">{q}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
              </button>
              {openIdx === i && (
                <div className="pb-5 text-sm text-muted-foreground leading-relaxed">
                  {a}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="tel:+4915888651952" className="text-primary underline text-sm font-medium hover:opacity-80">
            Weitere Fragen? Sprechen Sie uns direkt an →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
