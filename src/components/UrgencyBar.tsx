import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

const messages = [
  { icon: "⚡", text: "Kostenlose Erstberatung — Nur noch 3 Plätze diese Woche" },
  { icon: "⭐", text: "4.9 / 5 Sterne — 500+ zufriedene Mandanten" },
  { icon: "✅", text: "98% Erfolgsquote bei Immobilienbewertungen" },
  { icon: "🏆", text: "Bekannt aus Forbes, FOCUS & ntv" },
  { icon: "📞", text: "Unverbindlich & kostenlos — Antwort in 24h" },
];

const TickerText = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [needsTicker, setNeedsTicker] = useState(false);

  useEffect(() => {
    const check = () => {
      if (containerRef.current && textRef.current) {
        setNeedsTicker(textRef.current.scrollWidth > containerRef.current.clientWidth);
      }
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [text]);

  return (
    <div ref={containerRef} className="overflow-hidden flex-1 min-w-0">
      <span
        ref={textRef}
        className={`inline-block whitespace-nowrap ${needsTicker ? "animate-ticker" : ""}`}
      >
        {text}
      </span>
    </div>
  );
};

const UrgencyBar = () => {
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setFading(false);
      }, 400);
    }, 9000);
    return () => clearInterval(interval);
  }, [visible]);

  if (!visible) return null;

  const { icon, text } = messages[index];

  return (
    <div
      className="w-full py-2 text-center text-[11px] sm:text-sm text-white relative overflow-hidden"
      style={{ background: "linear-gradient(90deg, #0f3d23 0%, #1a5c35 50%, #0f3d23 100%)" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
      <div
        className={`relative flex items-center justify-center gap-1.5 sm:gap-2 px-8 transition-all duration-400 ${fading ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}`}
      >
        <span className="shrink-0">{icon}</span>
        <TickerText text={text} />
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

export default UrgencyBar;
