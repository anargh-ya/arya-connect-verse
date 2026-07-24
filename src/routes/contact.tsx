import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/page-parts";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us · Vysya Connect" },
      { name: "description", content: "Get in touch with the Karnataka Arya Vysya Mahasabha." },
      { property: "og:title", content: "Contact Us · Vysya Connect" },
      { property: "og:description", content: "Address, phone, WhatsApp and email." },
    ],
  }),
  component: Page,
});

const MAP_URL = "https://www.google.com/maps?q=No.%2016%2C%20Seshadri%20Road%2C%20Gandhinagar%2C%20Bengaluru%20560009&output=embed";
const WHATSAPP = "919663900439";

function Page() {
  return (
    <div>
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you." />
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-5">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-3 flex items-center gap-2 text-brand"><MapPin className="h-5 w-5" /><h3 className="font-display text-lg font-bold">Location</h3></div>
              <p className="text-sm text-muted-foreground">No. 16, Seshadri Road, Gandhinagar,<br />Bengaluru-560009</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-3 flex items-center gap-2 text-brand"><Phone className="h-5 w-5" /><h3 className="font-display text-lg font-bold">Phone</h3></div>
              <ul className="space-y-1 text-sm">
                {["080-22206151","080-22206152","080-22206153"].map(n => (
                  <li key={n}><a className="text-muted-foreground hover:text-brand" href={`tel:${n.replace(/[^0-9]/g,"")}`}>{n}</a></li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-3 flex items-center gap-2 text-brand"><Mail className="h-5 w-5" /><h3 className="font-display text-lg font-bold">Email</h3></div>
              <a href="mailto:kavmss@gmail.com" className="text-sm text-brand-accent hover:underline">kavmss@gmail.com</a>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp · 96639 00439
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <iframe
              title="Location"
              src={MAP_URL}
              className="h-full min-h-[380px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
