import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/page-parts";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery · Vysya Connect" },
      { name: "description", content: "Photographs from recent community events." },
      { property: "og:title", content: "Gallery · Vysya Connect" },
      { property: "og:description", content: "Recent moments from the Arya Vysya community." },
    ],
  }),
  component: Page,
});

const items = Array.from({ length: 12 }).map((_, i) => ({
  title: ["Annual Meet","Prathibhothsava","Vasavi Jayanthi","Community Puja","Scholarship Distribution","Vasavi Excellence"][i % 6],
  date: "2025",
}));

function Page() {
  return (
    <div>
      <PageHeader title="Gallery" subtitle="Moments from recent community events." />
      <Container className="py-10">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((it, i) => (
            <div key={i} className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <div className="aspect-[4/3] bg-gradient-to-br from-brand/70 via-brand-accent/60 to-secondary transition group-hover:scale-105" />
              <div className="p-4">
                <div className="font-medium text-foreground">{it.title}</div>
                <div className="text-xs text-muted-foreground">{it.date}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
