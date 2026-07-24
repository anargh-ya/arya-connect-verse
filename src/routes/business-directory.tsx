import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/page-parts";
import { Building2, Phone, MapPin, Search } from "lucide-react";

export const Route = createFileRoute("/business-directory")({
  head: () => ({
    meta: [
      { title: "Business Directory · Vysya Connect" },
      { name: "description", content: "Discover and support community-owned businesses across Karnataka." },
      { property: "og:title", content: "Business Directory · Vysya Connect" },
      { property: "og:description", content: "Browse businesses by category and location." },
    ],
  }),
  component: Page,
});

const categories = [
  "Retail & Trading","Jewellery & Precious Metals","Clothing & Textiles","Food & Hospitality","Manufacturing",
  "IT & Software","Real Estate & Construction","Finance & Investment","Healthcare","Education & Training",
  "Professional Services","Consulting","Logistics & Transportation","Travel & Tourism","Digital Marketing & Media",
  "E-commerce & Online Business","Import & Export","Agriculture & Farming","Franchise Business","Startup","Other",
];

const listings = [
  { name: "Sri Vasavi Jewellers", cat: "Jewellery & Precious Metals", city: "Bengaluru", phone: "98800 12345" },
  { name: "Arya Textiles", cat: "Clothing & Textiles", city: "Mysuru", phone: "98450 78901" },
  { name: "Karnataka IT Labs", cat: "IT & Software", city: "Bengaluru", phone: "99860 55221" },
  { name: "Vasavi Realty", cat: "Real Estate & Construction", city: "Tumakuru", phone: "94480 66754" },
  { name: "Sabha Foods", cat: "Food & Hospitality", city: "Hubballi", phone: "97430 22110" },
  { name: "Community Pharma", cat: "Healthcare", city: "Mangaluru", phone: "98865 33221" },
];

function Page() {
  return (
    <div>
      <PageHeader title="Business Directory" subtitle="Discover and support community-owned businesses.">
        <div className="flex max-w-xl items-center gap-2 rounded-md border border-input bg-white px-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input placeholder="Search businesses…" className="h-11 flex-1 bg-transparent text-sm outline-none" />
          <button className="rounded-md bg-brand px-4 py-1.5 text-sm font-medium text-brand-foreground hover:bg-brand-accent">Search</button>
        </div>
      </PageHeader>
      <Container className="py-10">
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((c, i) => (
            <button key={c} className={`rounded-full border px-3 py-1.5 text-xs transition ${i === 0 ? "border-brand bg-brand text-brand-foreground" : "border-border bg-card hover:border-brand-accent"}`}>{c}</button>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((b) => (
            <div key={b.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-brand"><Building2 className="h-5 w-5" /></div>
                <div>
                  <div className="font-semibold text-foreground">{b.name}</div>
                  <div className="text-xs text-muted-foreground">{b.cat}</div>
                </div>
              </div>
              <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> {b.city}</div>
                <div className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> {b.phone}</div>
              </div>
              <button className="mt-5 w-full rounded-md border border-border py-2 text-sm font-medium text-brand transition hover:border-brand-accent hover:text-brand-accent">View Details</button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
