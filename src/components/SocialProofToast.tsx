import { useState, useEffect, useCallback, useRef } from "react";
import { X } from "lucide-react";

const messages = [
  "🏠 Klaus M. aus München hat gerade eine Beratung gebucht",
  "📋 Sabine T. aus Hamburg — Einspruch erfolgreich",
  "✅ Thomas K. aus Berlin hat 4.200€ Steuern gespart",
];

const SocialProofToast = () => {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const [index, setIndex] = useState(0);
  const showCount = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const scheduleNext = useCallback(() => {
    clearTimeout(timerRef.current);
    const delay = showCount.current === 0 ? 15000 : 35000;
    timerRef.current = setTimeout(() => {
      setIndex(showCount.current % messages.length);
      setFading(false);
      setVisible(true);
      showCount.current += 1;
    }, delay);
  }, []);

  const dismiss = useCallback(() => {
    setFading(true);
    setTimeout(() => {
      setVisible(false);
      setFading(false);
      scheduleNext();
    }, 500);
  }, [scheduleNext]);

  // Initial schedule
  useEffect(() => {
    scheduleNext();
    return () => clearTimeout(timerRef.current);
  }, [scheduleNext]);

  // Auto-hide after 5s
  useEffect(() => {
    if (!visible || fading) return;
    const hideTimer = setTimeout(dismiss, 5000);
    return () => clearTimeout(hideTimer);
  }, [visible, fading, dismiss]);

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-[7.5rem] sm:bottom-16 left-4 sm:left-6 z-40 bg-white shadow-xl rounded-xl p-4 pr-9 w-72 transition-all duration-500 ${
        fading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
      }`}
    >
      <button
        onClick={dismiss}
        className="absolute top-2.5 right-2.5 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X className="w-3.5 h-3.5" />
      </button>
      <div className="flex items-start gap-3">
        <span className="mt-1 w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0" />
        <p className="text-sm text-foreground leading-snug">{messages[index]}</p>
      </div>
    </div>
  );
};

export default SocialProofToast;
