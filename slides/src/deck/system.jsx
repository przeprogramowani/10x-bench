const toneClasses = {
  accent: "accent",
  accent2: "accent2",
  warm: "warm",
  positive: "positive",
  negative: "negative",
  dim: "dim",
  bright: "bright",
};

const labelToneClasses = {
  accent: "slide-label",
  warm: "slide-label slide-label--warm",
  negative: "slide-label slide-label--negative",
  accent2: "slide-label slide-label--accent2",
  positive: "slide-label slide-label--positive",
};

const insightToneClasses = {
  accent: "insight-tag insight-tag--accent",
  warm: "insight-tag insight-tag--warm",
  negative: "insight-tag insight-tag--negative",
  accent2: "insight-tag insight-tag--accent2",
  positive: "insight-tag insight-tag--positive",
};

export function Em({ tone = "bright", gradient, children }) {
  const className = gradient
    ? gradient === "warm"
      ? "gradient-warm"
      : "gradient-text"
    : toneClasses[tone] || tone;

  return <span className={className}>{children}</span>;
}

export function SlideShell({ active, act, step, variant = "", children }) {
  return (
    <section
      className={`slide ${variant} ${active ? "active" : ""}`}
      data-act={act}
      data-step={step}
    >
      {children}
    </section>
  );
}

export function TitleSlide({ active, act, kicker, title, meta }) {
  return (
    <SlideShell active={active} act={act}>
      {kicker ? <p className="caption mb-4">{kicker}</p> : null}
      <h1 className="slide-heading">{title}</h1>
      {meta ? <p className="mt-6 footnote">{meta}</p> : null}
    </SlideShell>
  );
}

export function StatementSlide({ active, act, title, subtitle, display = false }) {
  return (
    <SlideShell active={active} act={act} variant="slide--statement">
      <h1 className={`slide-heading ${display ? "slide-heading--display" : ""}`}>
        {title}
      </h1>
      {subtitle ? <p>{subtitle}</p> : null}
    </SlideShell>
  );
}

export function SectionSlide({ active, act, title, label }) {
  return (
    <SlideShell active={active} act={act} variant="slide--section">
      {label ? <span className="slide-label">{label}</span> : null}
      <h1 className="slide-heading">{title}</h1>
    </SlideShell>
  );
}

export function SplitShowcaseSlide({
  active,
  act,
  badge,
  badgeVariant,
  title,
  chips = [],
  tags = [],
  note,
  image,
  alt,
}) {
  return (
    <SlideShell active={active} act={act} variant="slide--split">
      <div>
        <span className={`version-badge version-badge--${badgeVariant}`}>
          {badge}
        </span>
        <h2 className="stack-title">{title}</h2>
        <div className="stack-chips mt-4">
          {chips.map((chip) => (
            <span
              className={`stack-chip ${chip.accent ? "stack-chip--accent" : ""}`}
              key={chip.label}
            >
              {chip.label}
            </span>
          ))}
        </div>
        {note ? <p className="body-copy mt-4 max-w-mid">{note}</p> : null}
        {tags.length > 0 ? (
          <div className="tags mt-4">
            {tags.map((tag) => (
              <span className="tag tag--accent" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      <div>
        <img className="slide-screenshot" src={image} alt={alt} />
      </div>
    </SlideShell>
  );
}

export function ImageSlide({
  active,
  act,
  title,
  subtitle,
  image,
  alt,
  imageSize = "xl",
  caption,
  titleDisplay = false,
}) {
  return (
    <SlideShell active={active} act={act}>
      {image ? (
        <img
          className={`hero-screenshot hero-screenshot--${imageSize} mb-6`}
          src={image}
          alt={alt}
        />
      ) : null}
      {title ? (
        <h1
          className={`slide-heading ${titleDisplay ? "slide-heading--display" : ""}`}
        >
          {title}
        </h1>
      ) : null}
      {subtitle ? <p className="lede mt-4">{subtitle}</p> : null}
      {caption ? <p className="caption mt-4">{caption}</p> : null}
    </SlideShell>
  );
}

export function FullImageSlide({ active, act, image, alt }) {
  return (
    <SlideShell active={active} act={act} variant="slide--full-image">
      <img className="full-image-asset" src={image} alt={alt} />
    </SlideShell>
  );
}

export function CodeSlide({ active, act, label, children, footer, width = "wide" }) {
  return (
    <SlideShell active={active} act={act}>
      {label ? <h3 className="mb-6 text-h2 font-medium text-deckMuted">{label}</h3> : null}
      <div className={`code-block code-block--${width}`}>{children}</div>
      {footer ? <p className="body-copy mt-8">{footer}</p> : null}
    </SlideShell>
  );
}

export function SkillTheorySlide({
  active,
  act,
  demo,
  command,
  title,
  points,
  launch,
  tone = "accent",
}) {
  return (
    <SlideShell active={active} act={act} variant="slide--skill">
      <div className="skill-theory-copy">
        <span className={labelToneClasses[tone] || labelToneClasses.accent}>
          {demo}
        </span>
        <h2 className="slide-subheading mt-5">{title}</h2>
        <ul className="skill-theory-list">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="skill-launch">
        <span className="caption">Uruchamiamy skill</span>
        <div className="skill-launch-command">{command}</div>
        {launch ? <p className="body-copy mt-5">{launch}</p> : null}
      </div>
    </SlideShell>
  );
}

export function ListSlide({ active, act, label, labelTone = "accent", title, items, footer }) {
  return (
    <SlideShell active={active} act={act} variant="slide--list">
      {label ? <span className={labelToneClasses[labelTone]}>{label}</span> : null}
      <h2 className="slide-subheading mb-8">{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li className={item.check ? "check" : ""} key={index}>
            {item.content || item}
          </li>
        ))}
      </ul>
      {footer ? <p className="body-copy mt-8">{footer}</p> : null}
    </SlideShell>
  );
}

export function QuoteSlide({ active, act, quote, cite }) {
  return (
    <SlideShell active={active} act={act} variant="slide--quote">
      <blockquote>{quote}</blockquote>
      <cite>{cite}</cite>
    </SlideShell>
  );
}

export function NumberSlide({ active, act, value, label, note, tone = "accent" }) {
  return (
    <SlideShell active={active} act={act} variant="slide--number">
      <div className={`big-number ${tone === "gradient" ? "gradient-text" : tone}`}>
        {value}
      </div>
      <p>{label}</p>
      {note ? <p className="footnote mt-4">{note}</p> : null}
    </SlideShell>
  );
}

export function InsightSlide({
  active,
  act,
  number,
  tone = "accent",
  tag,
  title,
  children,
  centered = false,
  image,
  alt,
  imageSize = "xl",
}) {
  return (
    <SlideShell
      active={active}
      act={act}
      variant={`slide--insight ${centered ? "slide--centered" : ""}`}
    >
      {number ? (
        <div className="insight-header">
          <span className={`insight-num ${tone}`}>{number}</span>
        </div>
      ) : null}
      {tag ? <div className={insightToneClasses[tone]}>{tag}</div> : null}
      <h2 className="slide-subheading mt-5">{title}</h2>
      <div className="mt-5 max-w-[48ch] text-lede leading-snug text-white">
        {children}
      </div>
      {image ? (
        <img
          className={`hero-screenshot hero-screenshot--${imageSize} mt-8`}
          src={image}
          alt={alt}
        />
      ) : null}
    </SlideShell>
  );
}

export function Compare({ children, vs = false, centered = false }) {
  return (
    <div
      className={`compare mt-6 ${vs ? "compare--vs" : ""} ${
        centered ? "compare--centered" : ""
      }`}
    >
      {children}
    </div>
  );
}

export function CompareCol({ title, children }) {
  return (
    <div className="compare-col">
      {title ? <h3 className="text-h2 font-medium text-deckMuted">{title}</h3> : null}
      {children}
    </div>
  );
}

export function Stat({ value, label, tone = "accent" }) {
  return (
    <div className="stat">
      <span className={`stat__value ${tone}`}>{value}</span>
      <span className="stat__label">{label}</span>
    </div>
  );
}
