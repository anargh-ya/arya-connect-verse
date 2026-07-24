import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/page-parts";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us · Vysya Connect" },
      { name: "description", content: "The history, mission and vision of the Karnataka Arya Vysya Mahasabha." },
      { property: "og:title", content: "About Us · Vysya Connect" },
      { property: "og:description", content: "Legacy, service and community — the story of the Karnataka Arya Vysya Mahasabha." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <PageHeader title="About Us" subtitle="A community rooted in tradition, growing with the times." />
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 space-y-5 text-[15px] leading-relaxed text-foreground">
            <p>
              The Karnataka Arya Vysya Mahasabha is the apex body serving the Arya Vysya community across Karnataka. For decades, the Mahasabha has united members through cultural, educational, philanthropic and business initiatives.
            </p>
            <p>
              Under the current administration, the Mahasabha has transformed from a Rs 28 lakh debt to a monthly income of Rs 48 lakhs, enabling wider service through schemes such as Vidya Nidhi, Vasavi Chethana, Vysya Hostel, Vidyarthi Mithra, Sandhya Shree, and many more.
            </p>
            <p>
              Vysya Connect is our next chapter — a digital home that brings the community, businesses, schemes and services together in one trusted place.
            </p>
          </div>
          <aside className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-bold text-brand">Our Vision</h3>
            <p className="mt-2 text-sm text-muted-foreground">Empower every community member through connection, opportunity and service.</p>
            <h3 className="mt-6 font-display text-lg font-bold text-brand">Our Mission</h3>
            <p className="mt-2 text-sm text-muted-foreground">Build a modern, transparent, inclusive digital ecosystem that upholds the values of the Arya Vysya samaj.</p>
          </aside>
        </div>
      </Container>
    </div>
  );
}
