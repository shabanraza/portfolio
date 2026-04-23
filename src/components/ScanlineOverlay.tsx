export const ScanlineOverlay = () => {
  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-[100]"
        style={{
          background: `repeating-linear-gradient(0deg, var(--t-accent, #00ff88)0a 0px, transparent 1px, transparent 3px)`,
          mixBlendMode: 'screen',
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-[99]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.5) 100%)',
        }}
      />
    </>
  );
};
