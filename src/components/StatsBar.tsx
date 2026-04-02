import { useState, useEffect, useRef } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Mandanten betreut" },
  { value: 4.9, suffix: "★", label: "Google Bewertung", decimals: 1 },
  { value: 98, suffix: "%", label: "Erfolgsquote" },
  { value: 15, suffix: "+", label: "Jahre Erfahrung" },
];

const useCountUp = (end: number, decimals = 0, duration = 1800, start: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * end).toFixed(decimals)));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, decimals, duration, start]);

  return count;
};

const AnimatedStat = ({ value, suffix, label, decimals = 0, delay }: {
  value: number; suffix: string; label: string; decimals?: number; delay: number;
}) => {
  const [visible, setVisible] = useState(false);
  const [startCount, setStartCount] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, decimals, 1800, startCount);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisible(true);
            setStartCount(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <div className="text-3xl md:text-3xl font-bold text-white">
        {count}{suffix}
      </div>
      <div className="text-sm text-white/70">{label}</div>
    </div>
  );
};

const StatsBar = () => (
  <section
    className="py-10 md:py-8 relative bg-cover bg-center"
    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80')" }}
  >
    <div className="absolute inset-0 bg-primary/85" />
    <div className="relative max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-evenly gap-5 md:gap-6">
      {stats.map(({ value, suffix, label, decimals }, i) => (
        <>
          <AnimatedStat
            key={label}
            value={value}
            suffix={suffix}
            label={label}
            decimals={decimals}
            delay={i * 250}
          />
          {i < stats.length - 1 && (
            <div key={`sep-${i}`} className="hidden md:block w-px h-10 bg-white/20" />
          )}
          {i < stats.length - 1 && (
            <div key={`sep-m-${i}`} className="md:hidden w-16 h-px bg-white/20" />
          )}
        </>
      ))}
    </div>
  </section>
);

export default StatsBar;
