import Image from "next/image";
import type { EventItem } from "@/data/content";
import { SocialIcons } from "@/components/SocialIcons";

const categoryLabels: Record<EventItem["category"], string> = {
  konser: "Konser",
  atolye: "Atölye",
  tiyatro: "Tiyatro",
  panel: "Panel",
};

const categoryGradients: Record<EventItem["category"], string> = {
  konser: "from-violet-700/60 via-accent/25 to-purple-900/50",
  atolye: "from-fuchsia-700/50 via-accent/20 to-violet-800/40",
  tiyatro: "from-purple-700/55 via-accent/25 to-pink-900/40",
  panel: "from-indigo-700/50 via-accent/20 to-violet-800/40",
};

export function EventCards({ items }: { items: EventItem[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {items.map((event) => (
        <article
          key={`${event.date}-${event.title}`}
          className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/30"
        >
          <div
            className={`relative aspect-[16/10] bg-gradient-to-br ${categoryGradients[event.category]}`}
          >
            {event.image ? (
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/20 to-transparent" />
            <div className="absolute inset-0 noise opacity-50" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <span className="rounded-full bg-surface2/90 px-3 py-1 text-xs text-fg backdrop-blur-sm">
                {categoryLabels[event.category]}
              </span>
              <span className="text-sm tabular-nums text-fg">
                {event.month && `${event.month} `}
                {event.date}
              </span>
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-display text-lg font-medium text-fg group-hover:text-accent transition-colors">
              {event.title}
            </h3>
            <p className="mt-1.5 text-sm text-muted">{event.venue}</p>
            <p className="mt-1 text-xs text-muted/70">{event.role}</p>
            {event.description ? (
              <p className="mt-3 text-sm leading-relaxed text-fg/70">{event.description}</p>
            ) : null}
            {event.external ? (
              <a
                href={event.external}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-accent transition-colors hover:text-fg"
              >
                Detay →
              </a>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

export function EventList({ items }: { items: EventItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((event) => (
        <article
          key={`${event.date}-${event.title}`}
          className="group flex gap-4 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/30 sm:items-center sm:gap-5 sm:p-5"
        >
          <div
            className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br sm:h-20 sm:w-20 sm:rounded-xl ${categoryGradients[event.category]}`}
          >
            {event.image ? (
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 640px) 64px, 80px"
              />
            ) : (
              <div className="absolute inset-0 noise opacity-60" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-xs text-accent">{categoryLabels[event.category]}</span>
              <span className="text-xs tabular-nums text-muted">
                {event.month && `${event.month} `}
                {event.date}
              </span>
            </div>
            <h3 className="mt-1 font-display text-base font-medium text-fg sm:text-lg">
              {event.title}
            </h3>
            <p className="mt-1.5 text-sm text-muted">
              {event.venue} · {event.role}
            </p>
            {event.description ? (
              <p className="mt-2 text-sm leading-relaxed text-fg/70">{event.description}</p>
            ) : null}
            {event.external ? (
              <a
                href={event.external}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-accent transition-colors hover:text-fg"
              >
                Detay →
              </a>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

export function EventEmpty({ message }: { message: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-surface px-8 py-20 text-center">
      <p className="text-muted">{message}</p>
      <div className="mt-5 flex justify-center">
        <SocialIcons size={22} />
      </div>
    </div>
  );
}
