import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/page-parts";
import { Briefcase, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/jobs")({
  head: () => ({
    meta: [
      { title: "Jobs · Vysya Connect" },
      { name: "description", content: "Community job opportunities across Karnataka." },
      { property: "og:title", content: "Jobs · Vysya Connect" },
      { property: "og:description", content: "Discover and apply for jobs posted by community businesses." },
    ],
  }),
  component: Page,
});

const jobs = [
  { title: "Retail Store Manager", company: "Sri Vasavi Jewellers", city: "Bengaluru", type: "Full-time" },
  { title: "Textile Sales Executive", company: "Arya Textiles", city: "Mysuru", type: "Full-time" },
  { title: "Frontend Developer", company: "Karnataka IT Labs", city: "Bengaluru", type: "Full-time" },
  { title: "Accounts Assistant", company: "Vasavi Realty", city: "Tumakuru", type: "Part-time" },
  { title: "Restaurant Supervisor", company: "Sabha Foods", city: "Hubballi", type: "Full-time" },
];

function Page() {
  return (
    <div>
      <PageHeader title="Jobs" subtitle="Opportunities posted by community businesses." />
      <Container className="py-10">
        <div className="grid gap-4">
          {jobs.map((j) => (
            <div key={j.title} className="flex flex-col justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:flex-row sm:items-center">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-brand"><Briefcase className="h-5 w-5" /></div>
                <div>
                  <div className="font-display text-lg font-bold text-brand">{j.title}</div>
                  <div className="text-sm text-muted-foreground">{j.company}</div>
                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{j.city}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{j.type}</span>
                  </div>
                </div>
              </div>
              <button className="rounded-md bg-brand px-5 py-2 text-sm font-medium text-brand-foreground hover:bg-brand-accent">Apply</button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
