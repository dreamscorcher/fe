const logos = ["Forbes", "ntv", "FOCUS", "HaufeImmobilien", "Forbes", "ntv", "FOCUS", "HaufeImmobilien"];

const SocialProofBar = () => (
  <section className="bg-secondary py-6 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <p className="text-center text-muted-foreground text-sm mb-4">Bekannt aus</p>
    </div>
    <div className="relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {logos.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="inline-flex items-center mx-8 md:mx-14 text-xl md:text-2xl font-bold text-muted-foreground/60 font-['Plus_Jakarta_Sans'] tracking-tight shrink-0"
          >
            {name === "HaufeImmobilien" ? "Haufe" : name}
            {name === "HaufeImmobilien" && <span className="text-base font-normal ml-0.5">Immobilien</span>}
          </span>
        ))}
        {logos.map((name, i) => (
          <span
            key={`${name}-dup-${i}`}
            className="inline-flex items-center mx-8 md:mx-14 text-xl md:text-2xl font-bold text-muted-foreground/60 font-['Plus_Jakarta_Sans'] tracking-tight shrink-0"
          >
            {name === "HaufeImmobilien" ? "Haufe" : name}
            {name === "HaufeImmobilien" && <span className="text-base font-normal ml-0.5">Immobilien</span>}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofBar;
