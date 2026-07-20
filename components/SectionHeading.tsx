import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  id,
}: {
  eyebrow: string;
  title: string;
  id?: string;
}) {
  return (
    <Reveal>
      <div className="mb-12 md:mb-16">
        <p className="mb-3 flex items-center gap-3 text-sm tracking-widest text-brass">
          <span aria-hidden="true" className="h-px w-8 bg-brass" />
          {eyebrow}
        </p>
        <h2 id={id} className="text-3xl font-medium sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>
    </Reveal>
  );
}
