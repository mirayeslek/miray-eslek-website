import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { PageShell } from "@/components/PageShell";
import { SoundpaintingNews } from "@/components/SoundpaintingNews";
import { soundpaintingProject, site } from "@/data/content";

export const metadata: Metadata = {
  title: "Soundpainting ve İhtimaller — Miray Eslek",
  description:
    "Performans sanatları buluşması: Soundpainting atölyesi ve kolektif canlı kompozisyon.",
};

export default function SoundpaintingProjectPage() {
  return (
    <PageShell reading>
      <p className="mb-6 text-sm text-muted">
        <Link href="/isler" className="text-accent hover:underline">
          ← Çalışmalar
        </Link>
      </p>

      <PageHeader
        title={soundpaintingProject.title}
        description={soundpaintingProject.subtitle}
      />

      <SoundpaintingNews className="mb-12" />

      <div className="space-y-6 text-base leading-[1.85] text-fg/90">
        {soundpaintingProject.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-12 space-y-10">
        {soundpaintingProject.sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-display text-xl font-semibold text-fg">
              {section.title}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-[1.85] text-fg/90">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-10 space-y-2 text-sm text-muted">
        <p>
          <a
            href={soundpaintingProject.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            {soundpaintingProject.instagramHandle}
          </a>
        </p>
        <p>
          <a
            href={`mailto:${soundpaintingProject.email}`}
            className="text-accent hover:underline"
          >
            {soundpaintingProject.email}
          </a>
        </p>
        <p>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            @mirayeslek
          </a>
        </p>
      </div>

      {soundpaintingProject.playlists.length > 0 && (
        <div className="mt-10 space-y-3">
          {soundpaintingProject.playlists.map((playlist) => (
            <p key={playlist.href} className="text-sm">
              <a
                href={playlist.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                {playlist.title} — İzle →
              </a>
            </p>
          ))}
        </div>
      )}

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        {soundpaintingProject.images.map((src, index) => (
          <div
            key={src}
            className={`relative overflow-hidden bg-surface ${
              index === 0
                ? "aspect-[3/4] sm:col-span-2 sm:aspect-[16/10]"
                : "aspect-[4/5]"
            }`}
          >
            <Image
              src={src}
              alt={`${soundpaintingProject.title} — ${index + 1}`}
              fill
              className="object-cover"
              sizes={
                index === 0
                  ? "(max-width: 768px) 100vw, 720px"
                  : "(max-width: 640px) 100vw, 360px"
              }
              quality={90}
            />
          </div>
        ))}
      </div>
    </PageShell>
  );
}
