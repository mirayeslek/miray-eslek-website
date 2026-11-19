import Image from "next/image";
import { gundemFeature, noctanimaChartNews } from "@/data/content";

export function NoctanimaChartNews({
  className = "",
}: {
  className?: string;
}) {
  const news = noctanimaChartNews;

  return (
    <article
      className={`rounded-lg border border-border p-5 md:p-8 ${className}`.trim()}
    >
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
        {news.label}
      </p>
      <h3 className="mt-3 font-display text-2xl font-semibold leading-snug text-fg md:text-3xl">
        {news.title}
      </h3>
      <p className="mt-3 text-sm text-accent">
        {news.date} · {news.place}
      </p>
      <div className="mt-8 grid items-start gap-8 md:grid-cols-[minmax(160px,220px)_minmax(0,1fr)] md:gap-12">
        <Image
          src={news.image.src}
          alt={news.image.alt}
          width={800}
          height={800}
          quality={90}
          className="h-auto w-full rounded border border-border"
          sizes="(max-width: 768px) 100vw, 220px"
        />
        <div>
          <div className="space-y-5 text-base leading-[1.85] text-fg/90">
            {news.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <a
            href={news.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm text-accent hover:underline"
          >
            {news.link.label} →
          </a>
        </div>
      </div>
    </article>
  );
}

export function NoctanimaNews({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <article
      className={`rounded-lg border border-border p-5 md:p-8 ${className}`.trim()}
    >
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
        {gundemFeature.label}
      </p>
      <h3 className="mt-3 font-display text-2xl font-semibold leading-snug text-fg md:text-3xl">
        {gundemFeature.title}
      </h3>

      <div
        className={`mt-8 grid items-center gap-8 ${
          compact
            ? ""
            : "md:grid-cols-[minmax(220px,340px)_minmax(0,1fr)] md:gap-12"
        }`}
      >
        <div
          className={`relative aspect-square overflow-hidden rounded border border-border bg-surface ${
            compact ? "mx-auto w-full max-w-xs" : ""
          }`}
        >
          <Image
            src={gundemFeature.cover}
            alt={gundemFeature.coverAlt}
            fill
            className="object-cover"
            sizes={compact ? "320px" : "(max-width: 768px) 100vw, 340px"}
            quality={90}
          />
        </div>
        <div>
          <div className="space-y-5 text-base leading-[1.85] text-fg/90">
            {gundemFeature.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          {gundemFeature.links.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {gundemFeature.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:underline"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div
        className={`mt-10 grid items-center gap-8 border-t border-border pt-8 ${
          compact
            ? ""
            : "md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-12"
        }`}
      >
        <dl className={`order-2 space-y-5 ${compact ? "" : "md:order-1"}`}>
          {gundemFeature.credits.map((credit) => (
            <div key={credit.value}>
              {credit.label ? (
                <dt className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  {credit.label}
                </dt>
              ) : null}
              <dd
                className={
                  credit.label
                    ? "mt-1.5 text-sm leading-relaxed text-fg/90"
                    : "text-sm"
                }
              >
                {credit.href ? (
                  <a
                    href={credit.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {credit.value}
                  </a>
                ) : (
                  credit.value
                )}
              </dd>
            </div>
          ))}
        </dl>
        <div
          className={`relative order-1 aspect-video overflow-hidden rounded border border-border bg-surface ${
            compact ? "" : "md:order-2"
          }`}
        >
          <Image
            src={gundemFeature.portrait}
            alt={gundemFeature.portraitAlt}
            fill
            className="object-cover"
            sizes={compact ? "720px" : "(max-width: 768px) 100vw, 640px"}
            quality={90}
          />
        </div>
      </div>
    </article>
  );
}
