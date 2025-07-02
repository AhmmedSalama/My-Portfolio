function SectionTitle({ line1, line2 }) {
  return (
    <h1 className="text-[var(--color-text)] text-5xl sm:text-7xl md:text-8xl xl:text-9xl uppercase font-extrabold leading-tight tracking-tight text-start">
      <span>{line1}</span>
      <br />
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-text)] to-[var(--color-accent)]">
        {line2}
      </span>
    </h1>
  );
}

export default SectionTitle;
