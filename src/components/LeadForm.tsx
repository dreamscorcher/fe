import { useState } from "react";

interface LeadFormProps {
  darkBg?: boolean;
  ctaText?: string;
  ctaStyle?: "default" | "green";
  variant?: "hero" | "full";
}

const LeadForm = ({ darkBg = false, ctaText, ctaStyle, variant = "full" }: LeadFormProps) => {
  const [form, setForm] = useState({
    anrede: "", vorname: "", nachname: "", email: "", telefon: "", adresse: "",
    grundstuecksart: "", grund: "", gefunden: "",
  });

  const inputClass = "w-full px-4 py-3 border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background text-foreground";
  const selectClass = inputClass + " appearance-none";

  const isHero = variant === "hero";

  return (
    <div className={
      isHero
        ? "rounded-xl p-6 md:p-8 bg-white shadow-lg border border-gray-200 border-t-4 border-t-green-700"
        : `rounded-xl p-6 md:p-8 ${darkBg ? "bg-card shadow-none" : "bg-card shadow-xl"}`
    }>
      {/* Expert Trust Badge - hero only */}
      {isHero && (
        <div className="border border-gray-100 rounded-lg p-3 mb-4 bg-gray-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
              <span className="text-green-700 font-bold text-sm">DF</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-gray-900">Dennis Fleischmann</span>
              <span className="text-xs text-gray-500">Zertifizierter Immobiliengutachter · TÜV · DEKRA</span>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-2 ml-[52px]">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-green-600 text-sm">★</span>
            ))}
            <span className="text-xs text-gray-400 ml-1">Trustpilot</span>
          </div>
        </div>
      )}

      <h3 className="text-base font-bold text-foreground mb-4 font-['Plus_Jakarta_Sans']">
        Jetzt kostenlose Immobilienbewertung anfragen
      </h3>
      <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
        {/* Anrede - hero only */}
        {isHero && (
          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="radio" name="anrede" value="Herr" checked={form.anrede === "Herr"}
                onChange={(e) => setForm({ ...form, anrede: e.target.value })}
                className="accent-green-700" />
              Herr
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="radio" name="anrede" value="Frau" checked={form.anrede === "Frau"}
                onChange={(e) => setForm({ ...form, anrede: e.target.value })}
                className="accent-green-700" />
              Frau
            </label>
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          <input className={inputClass} placeholder="Vorname" value={form.vorname}
            onChange={(e) => setForm({ ...form, vorname: e.target.value })} />
          <input className={inputClass} placeholder="Nachname" value={form.nachname}
            onChange={(e) => setForm({ ...form, nachname: e.target.value })} />
        </div>
        <input type="email" className={inputClass} placeholder="E-Mail" value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="tel" className={inputClass} placeholder="Telefonnummer" value={form.telefon}
          onChange={(e) => setForm({ ...form, telefon: e.target.value })} />

        {/* Adresse - full variant only */}
        {!isHero && (
          <input className={inputClass} placeholder="Adresse der Immobilie" value={form.adresse}
            onChange={(e) => setForm({ ...form, adresse: e.target.value })} />
        )}

        <select className={selectClass} value={form.grundstuecksart}
          onChange={(e) => setForm({ ...form, grundstuecksart: e.target.value })}>
          <option value="">Grundstücksart auswählen</option>
          <option>Einfamilienhaus</option>
          <option>Mehrfamilienhaus</option>
          <option>Eigentumswohnung</option>
          <option>Gewerbe</option>
          <option>Grundstück</option>
        </select>

        <select className={selectClass} value={form.grund}
          onChange={(e) => setForm({ ...form, grund: e.target.value })}>
          <option value="">Grund der Bewertung</option>
          <option>Erbschaft</option>
          <option>Schenkung</option>
          <option>Scheidung</option>
          <option>Kauf/Verkauf</option>
          <option>Einspruch Finanzamt</option>
        </select>

        {/* Gefunden - full variant only */}
        {!isHero && (
          <select className={selectClass} value={form.gefunden}
            onChange={(e) => setForm({ ...form, gefunden: e.target.value })}>
            <option value="">Wie haben Sie uns gefunden?</option>
            <option>Google</option>
            <option>Empfehlung</option>
            <option>Social Media</option>
            <option>Presse</option>
            <option>Sonstiges</option>
          </select>
        )}

        {isHero ? (
          <>
            <button type="submit" className="w-full font-bold py-3.5 px-6 rounded-lg transition-colors text-sm bg-green-700 hover:bg-green-800 text-white">
              Jetzt kostenlose Ersteinschätzung anfordern →
            </button>
            <p className="text-xs text-center text-gray-400 mt-1">
              ✓ Kostenlos &amp; unverbindlich  ·  Antwort in 24h  ·  DSGVO-konform
            </p>
          </>
        ) : (
          <>
            <button type="submit" className={`w-full font-bold py-3.5 px-6 rounded-lg transition-colors text-sm ${ctaStyle === "green" ? "bg-green-500 hover:bg-green-400 text-white" : "bg-accent text-accent-foreground hover:opacity-90"}`}>
              {ctaText || "Jetzt kostenlos Beratung buchen"}
            </button>
            <div className="flex justify-center gap-4 text-xs text-muted-foreground mt-2">
              <span>🔒 SSL Sicher</span>
              <span>✓ DSGVO Konform</span>
              <span>⭐ 4.9 Google Rating</span>
            </div>
            <p className="text-xs text-center text-muted-foreground/70 italic mt-1">
              Kostenlos &amp; unverbindlich — Keine versteckten Kosten
            </p>
          </>
        )}
      </form>
    </div>
  );
};

export default LeadForm;
