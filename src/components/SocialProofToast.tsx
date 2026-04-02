import { useState, useEffect } from "react";

const messages = [
  "🏠 Klaus M. aus München hat gerade eine Beratung gebucht",
  "📋 Sabine T. aus Hamburg — Einspruch erfolgreich",
  "✅ Thomas K. aus Berlin hat 4.200€ Steuern gespart",
];

const SocialProofToast = () => {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const [index, setIndex] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (cycle >= messages.length) return;

    // Show after initial delay (first) or gap between toasts
    const showDelay = cycle === 0 ? 4000 : 1500;
    const showTimer = setTimeout(() => {
      setVisible(true);
      setFading(false);
    }, showDelay);

    return () => clearTimeout(showTimer);
  }, [cycle]);

  useEffect(() => {
    if (!visible) return;

    // Auto-hide after 5 seconds
    const hideTimer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setVisible(false);
        setIndex((prev) => prev + 1);
        setCycle((prev) => prev + 1);
      }, 500);
    }, 5000);

    return () => clearTimeout(hideTimer);
  }, [visible]);

  if (!visible || cycle >= messages.length) return null;

  return (
    <div
      className={`fixed bottom-[7.5rem] sm:bottom-16 left-4 sm:left-6 z-40 bg-white shadow-xl rounded-xl p-4 w-72 transition-all duration-500 ${
        fading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="mt-1 w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0" />
        <p className="text-sm text-foreground leading-snug">{messages[index]}</p>
      </div>
    </div>
  );
};

export default SocialProofToast;
