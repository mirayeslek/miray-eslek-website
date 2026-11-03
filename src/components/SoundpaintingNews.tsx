import Image from "next/image";
import { soundpaintingProject } from "@/data/content";

export function SoundpaintingNews({
  className = "",
  heading = "h2",
}: {
  className?: string;
  heading?: "h2" | "h3";
}) {
  const news = soundpaintingProject.news;
  const Title = heading;

  return (
    <article
      className={`rounded-lg border border-border p-5 md:p-8 ${className}`.trim()}
    >
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
        {news.label}
      </p>
      <Title className="mt-3 font-display text-2xl font-semibold leading-snug text-fg">
        {news.title}
      </Title>
      <p className="mt-3 text-sm text-accent">
        {news.date} · {news.place}
      </p>
      <div className="mt-6 space-y-5 text-base leading-[1.85] text-fg/90">
        {news.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {news.images.map((image) => (
          <div
            key={image.src}
            className="relative aspect-[9/16] overflow-hidden rounded border border-border bg-surface"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 240px"
              quality={90}
            />
          </div>
        ))}
      </div>
    </article>
  );
}
