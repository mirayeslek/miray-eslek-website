import Image from "next/image";
import Link from "next/link";
import {
  artistStatement,
  featuredWorks,
  gundemItems,
  site,
} from "@/data/content";
import { NoctanimaNews } from "@/components/NoctanimaNews";
import { SocialIcons } from "@/components/SocialIcons";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-bg px-6 pb-16 pt-28 sm:pt-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-y-0 right-0 w-full sm:w-[55%] lg:w-[50%]">
            <div className="hero-bg relative h-full w-full overflow-hidden">
              <div className="absolute inset-0 translate-x-[10%] sm:translate-x-0">
                <Image
                  src={site.images.hero}
                  alt="Miray Eslek sahne performansı"
                  fill
                  priority
                  quality={92}
                  className="object-cover object-[42%_38%] sm:object-left"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div
                className="absolute inset-y-0 left-0 z-10 w-[32%] bg-gradient-to-r from-bg via-bg/50 to-transparent sm:hidden"
                aria-hidden
              />
              <div
                className="absolute inset-y-0 right-0 w-[22%] bg-gradient-to-l from-bg/80 via-bg/25 to-transparent sm:hidden"
                aria-hidden
              />
            </div>
          </div>

          <div
            className="absolute inset-0 sm:hidden"
            style={{
              background:
                "linear-gradient(to right, #1a0f2e 0%, #1a0f2e 16%, rgba(26,15,46,0.82) 28%, rgba(26,15,46,0.45) 42%, rgba(26,15,46,0.15) 56%, rgba(26,15,46,0.04) 68%, transparent 78%), linear-gradient(to top, #1a0f2e 0%, rgba(26,15,46,0.5) 20%, transparent 44%)",
            }}
          />
          <div
            className="absolute inset-0 hidden sm:block"
            style={{
              background:
                "linear-gradient(to right, #1a0f2e 0%, #1a0f2e 38%, rgba(26,15,46,0.98) 48%, rgba(26,15,46,0.9) 56%, rgba(26,15,46,0.72) 66%, rgba(26,15,46,0.48) 76%, rgba(26,15,46,0.22) 86%, rgba(26,15,46,0.06) 94%, transparent 100%)",
            }}
          />
          <div className="absolute inset-y-0 right-0 w-full sm:w-[55%] lg:w-[50%] bg-gradient-to-l from-transparent via-transparent to-bg/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg from-15% via-bg/50 to-transparent" />
          <div className="glow absolute inset-0" />
          <div className="noise absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl animate-in">
          <h1 className="max-w-[min(100%,14ch)] font-display text-[clamp(3rem,10vw,6.5rem)] font-bold leading-[0.95] tracking-tight text-fg">
            {site.name}
          </h1>

          <p className="mt-5 max-w-md text-xs font-medium tracking-[0.12em] text-fg uppercase sm:text-sm sm:tracking-[0.14em]">
            {site.tagline}
          </p>

          <div className="mt-8">
            <SocialIcons size={22} />
          </div>
        </div>
      </section>

      <section className="relative border-t border-border px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)] lg:gap-20 lg:items-start">
            <div className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent/80">
                Hakkında
              </p>
              <p className="mt-6 font-display text-xl leading-[1.75] text-fg md:text-2xl">
                {artistStatement.summary}
              </p>
              <div className="mt-6 space-y-4">
                {artistStatement.homeIntro.map((line) => (
                  <p
                    key={line.slice(0, 48)}
                    className="text-base leading-[1.85] text-muted"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div className="relative lg:pt-2">
              <div
                className="absolute -left-px top-0 hidden h-16 w-px bg-accent/50 lg:block"
                aria-hidden
              />
              <div className="space-y-8 border-l border-accent/20 pl-7 lg:border-0 lg:pl-10">
                {artistStatement.homeThoughts.map((thought) => (
                  <p
                    key={thought.slice(0, 48)}
                    className="font-display text-lg italic leading-[1.85] text-fg/85 md:text-xl"
                  >
                    {thought}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">Çalışmalar</h2>
            <Link
              href="/isler"
              className="shrink-0 text-sm text-accent transition-opacity hover:opacity-70"
            >
              Tümü →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-3">
            {featuredWorks.map((work) => (
              <Link
                key={work.title}
                href={work.href}
                className="group block"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded border border-border transition-colors group-hover:border-accent/30 md:aspect-[4/3]">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="image-tone object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 200px"
                  />
                  <div
                    className="image-tone-overlay pointer-events-none absolute inset-0"
                    aria-hidden
                  />
                </div>
                <h3 className="mt-3 font-display text-base font-medium text-fg">
                  {work.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {work.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">Gündem</h2>
            <Link
              href="/etkinlikler"
              className="shrink-0 text-sm text-accent transition-opacity hover:opacity-70"
            >
              Tüm etkinlikler →
            </Link>
          </div>

          <NoctanimaNews className="mb-8" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gundemItems.map((item) => (
              <Link
                key={item.label}
                href={item.href ?? "#"}
                className="block rounded-lg border border-border p-5 transition-colors hover:border-accent/25 hover:bg-surface/30"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  {item.label}
                </p>
                <p className="mt-3 font-display text-base font-medium leading-snug text-fg">
                  {item.title}
                </p>
                <p className="mt-1.5 text-sm text-muted">{item.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
