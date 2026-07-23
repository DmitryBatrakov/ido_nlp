import Reveal from "./Reveal";


export default function SectionHeading({
  eyebrow,
  title,
  tone = "light",
  className = "",
}: {
  eyebrow: string;
  title: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <p
        className={`mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] ${
          tone === "dark" ? "text-gold-lt" : "text-gold-ink"
        }`}
      >
        {eyebrow}
        <span aria-hidden="true" className="h-px w-12 bg-current opacity-35" />
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-[3rem]">{title}</h2>
    </Reveal>
  );
}
