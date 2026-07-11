type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title font-heading">{title}</h2>
      {description ? <p className="section-desc">{description}</p> : null}
    </div>
  );
}
