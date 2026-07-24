import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/page-parts";
import { Phone, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/management")({
  head: () => ({
    meta: [
      { title: "Management · Vysya Connect" },
      { name: "description", content: "Office bearers, district committees and sub-committees of the Karnataka Arya Vysya Mahasabha." },
      { property: "og:title", content: "Management · Vysya Connect" },
      { property: "og:description", content: "Leadership of the Karnataka Arya Vysya Mahasabha." },
    ],
  }),
  component: Page,
});

const leaders = [
  { name: "R P RAVISHANKER", role: "PRESIDENT", phone: "9844008849" },
  { name: "KUNTNAL VENKATESH", role: "VICE PRESIDENT", phone: "9880728777" },
  { name: "K R KRISHNA", role: "GENERAL SECRETARY", phone: "9945125991" },
  { name: "H J HANUMANTHAIAH", role: "GENERAL SECRETARY", phone: "9448121023" },
  { name: "A R RAVIKUMAR", role: "ORGANISING SECRETARY", phone: "9448004194" },
  { name: "N S SREENIVASA MURTHY", role: "TREASURER", phone: "9845010375" },
];

const sections = [
  "List of Office Bearers of Karnataka Arya Vysya Mahasabha",
  "List of District Committee Members of Karnataka Arya Vysya Mahasabha",
  "List of Sub Committees of Karnataka Arya Vysya Mahasabha",
];

function Page() {
  return (
    <div>
      <PageHeader title="Management" subtitle="Leadership committed to the growth and welfare of the community." />
      <Container className="py-10">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {leaders.map((l) => (
            <div key={l.name} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="aspect-[4/3] bg-gradient-to-br from-brand to-brand-accent" />
              <div className="p-5 text-center">
                <div className="font-display text-lg font-bold text-brand">{l.name}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-accent">{l.role}</div>
                <a href={`tel:${l.phone}`} className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand">
                  <Phone className="h-3.5 w-3.5" /> M: {l.phone}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-4">
          {sections.map((s) => (
            <button key={s} className="flex items-center justify-between rounded-xl border border-border bg-card p-5 text-left transition hover:border-brand-accent hover:shadow-md">
              <span className="font-medium text-foreground">{s}</span>
              <span className="inline-flex items-center gap-1 text-sm text-brand-accent">
                Tap To See Complete List <ChevronRight className="h-4 w-4" />
              </span>
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
}
