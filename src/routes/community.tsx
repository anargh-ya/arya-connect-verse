import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/page-parts";
import { MessageCircle, MapPin } from "lucide-react";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community · Vysya Connect" },
      { name: "description", content: "Discover and connect with Arya Vysya community members across Karnataka." },
      { property: "og:title", content: "Community · Vysya Connect" },
      { property: "og:description", content: "Members, mentors, professionals and entrepreneurs." },
    ],
  }),
  component: Page,
});

const members = [
  { name: "Ravi Shanker", role: "Business Owner · Jewellery", city: "Bengaluru" },
  { name: "Anitha Kumari", role: "Chartered Accountant", city: "Mysuru" },
  { name: "Kiran V.", role: "Student · Engineering", city: "Hubballi" },
  { name: "Meera Rao", role: "Doctor", city: "Mangaluru" },
  { name: "Suresh N.", role: "Textile Trader", city: "Belagavi" },
  { name: "Divya S.", role: "Software Engineer", city: "Bengaluru" },
  { name: "Harish B.", role: "Real Estate", city: "Tumakuru" },
  { name: "Lakshmi K.", role: "Educator", city: "Davangere" },
];

const filters = ["All","Business","Students","Professionals","Mentors","Bengaluru","Mysuru","Hubballi"];

function Page() {
  return (
    <div>
      <PageHeader title="Community" subtitle="Discover members by profession, interest, and city." />
      <Container className="py-10">
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((f, i) => (
            <button key={f} className={`rounded-full border px-4 py-1.5 text-sm transition ${i === 0 ? "border-brand bg-brand text-brand-foreground" : "border-border bg-card text-foreground hover:border-brand-accent"}`}>{f}</button>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {members.map((m) => (
            <div key={m.name} className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-accent font-display text-2xl font-bold text-white">
                {m.name.split(" ").map(n=>n[0]).join("")}
              </div>
              <div className="mt-4 font-semibold text-foreground">{m.name}</div>
              <div className="text-xs text-muted-foreground">{m.role}</div>
              <div className="mt-1 flex items-center justify-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" /> {m.city}
              </div>
              <button className="mt-4 inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-brand hover:border-brand-accent hover:text-brand-accent">
                <MessageCircle className="h-3.5 w-3.5" /> Connect
              </button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
