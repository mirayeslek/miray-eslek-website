import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { PageShell } from "@/components/PageShell";
import { NoctanimaNews } from "@/components/NoctanimaNews";
import { SoundpaintingNews } from "@/components/SoundpaintingNews";
import { worksSections } from "@/data/content";

export const metadata: Metadata = {
  title: "Çalışmalar — Miray Eslek",
};

export default function WorksPage() {
  return (
    <PageShell>
      <PageHeader
        title="Çalışmalar"
        description="Tiyatro, performans, soundpainting ve fotoğraf pratikleri."
      />

      <div className="max-w-3xl space-y-10">
        {worksSections.map((section) => {
          const body = (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
              <div className="relative h-36 w-full shrink-0 overflow-hidden rounded-lg border border-border sm:h-28 sm:w-40">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="image-tone object-cover"
                  sizes="(max-width: 640px) 100vw, 160px"
                />
                <div
                  className="image-tone-overlay pointer-events-none absolute inset-0"
                  aria-hidden
                />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="font-display text-lg font-semibold text-fg md:text-xl">
                  {section.title}
                  {"href" in section && section.href ? (
                    <span className="ml-2 text-sm font-normal text-accent">
                      →
                    </span>
                  ) : null}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {section.description}
                </p>
              </div>
            </div>
          );

          return (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 border-b border-border pb-10 last:border-0"
            >
              {"href" in section && section.href ? (
                <Link
                  href={section.href}
                  className="block transition-opacity hover:opacity-90"
                >
                  {body}
                </Link>
              ) : (
                body
              )}
              {section.id === "performans" ? (
                <NoctanimaNews className="mt-8" compact />
              ) : null}
              {section.id === "soundpainting" ? (
                <SoundpaintingNews className="mt-8" heading="h3" />
              ) : null}
            </section>
          );
        })}
      </div>
    </PageShell>
  );
}
