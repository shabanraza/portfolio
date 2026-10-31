export const StatsBar = () => {
  const strengths = [
    { title: 'Product thinking', detail: 'Start with the user problem and shape the right solution.' },
    { title: 'Full-stack ownership', detail: 'Move between interface, APIs, data, and deployment.' },
    { title: 'Production mindset', detail: 'Ship reliable software that teams can keep improving.' },
  ];

  return (
    <section className="border-y border-line bg-surface">
      <div className="site-container grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
        {strengths.map(strength => (
          <div key={strength.title} className="py-6 md:px-7 md:py-8 first:md:pl-0 last:md:pr-0">
            <h2 className="text-sm font-semibold text-ink">{strength.title}</h2>
            <p className="mt-2 max-w-sm text-sm leading-6 text-muted">{strength.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
