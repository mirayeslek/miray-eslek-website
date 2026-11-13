import Image from "next/image";
import Link from "next/link";
import { soundpaintingProject } from "@/data/content";

type NewsItem = (typeof soundpaintingProject.news)[number];
type NewsImage = NewsItem["images"][number];

function hasSize(image: NewsImage): image is NewsImage & { width: number; height: number } {
  return "width" in image && "height" in image;
}

function NewsImages({ images }: { images: NewsImage[] }) {
  const natural = images.every(hasSize);

  if (!natural) {
    return (
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {images.map((image) => (
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
    );
  }

  return (
    <div className="mt-8 space-y-4">
      {images.map((image) => {
        const wide = image.width > image.height;
        return (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            quality={90}
            className={`h-auto rounded border border-border ${
              wide ? "w-full" : "w-full sm:max-w-sm"
            }`}
            sizes={
              wide
                ? "(max-width: 768px) 100vw, 720px"
                : "(max-width: 640px) 100vw, 384px"
            }
          />
        );
      })}
    </div>
  );
}

export function SoundpaintingHomeNews({ className = "" }: { className?: string }) {
  const news = soundpaintingProject.news[0];
  if (!("homeImage" in news) || !news.homeImage) return null;
  const image = news.homeImage;

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
      <div className="mt-8 grid items-start gap-8 md:grid-cols-[minmax(200px,280px)_minmax(0,1fr)] md:gap-12">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          quality={90}
          className="h-auto w-full rounded border border-border"
          sizes="(max-width: 768px) 100vw, 280px"
        />
        <div>
          <div className="space-y-5 text-base leading-[1.85] text-fg/90">
            {news.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/isler/soundpainting-ve-ihtimaller"
              className="text-sm text-accent hover:underline"
            >
              Soundpainting ve İhtimaller →
            </Link>
            {"link" in news && news.link ? (
              <a
                href={news.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline"
              >
                {news.link.label} →
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

export function SoundpaintingNews({
  className = "",
  heading = "h2",
}: {
  className?: string;
  heading?: "h2" | "h3";
}) {
  const Title = heading;

  return (
    <div className={`space-y-8 ${className}`.trim()}>
      {soundpaintingProject.news.map((news) => (
        <article
          key={news.title}
          className="rounded-lg border border-border p-5 md:p-8"
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
          {"link" in news && news.link ? (
            <a
              href={news.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm text-accent hover:underline"
            >
              {news.link.label} →
            </a>
          ) : null}
          <NewsImages images={news.images} />
        </article>
      ))}
    </div>
  );
}
