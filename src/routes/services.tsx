import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/page-parts";
import { HeartPulse, GraduationCap, Home, Users, Building, Stethoscope, HandCoins, BookOpen, Laptop, Award, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Schemes · Vysya Connect" },
      { name: "description", content: "Explore all schemes and services run by the Karnataka Arya Vysya Mahasabha." },
      { property: "og:title", content: "Services & Schemes · Vysya Connect" },
      { property: "og:description", content: "Scholarships, medical aid, hostels, senior care and more." },
    ],
  }),
  component: Page,
});

const schemes = [
  { icon: HeartHandshake, name: "Vasavi Chetana", desc: "Deserving handicapped people are eligible to get Rs 1000 per month." },
  { icon: GraduationCap, name: "Scholarships", desc: "Rs. 1,000/- per month monthly scholarships to meritorious poor students to enable them to continue their studies." },
  { icon: Stethoscope, name: "Medical Aid", desc: "Extending financial help to needy people who have undergone medical treatment." },
  { icon: HandCoins, name: "Sandhyashree Scheme", desc: "Monthly maintenance of Rs. 1,500/- to widows of 65 years above." },
  { icon: Home, name: "Hostel", desc: "Students at nominal maintenance charges coming to Bangalore for education — includes digital library & gym." },
  { icon: Building, name: "Guest House", desc: "For visitors coming to Bangalore for various purposes at nominal maintenance charges." },
  { icon: Users, name: "Vasavi Vanaprasthashrama", desc: "Accommodating seniors who do not have interested family members or lost their family, irrespective of age & sex." },
  { icon: HeartPulse, name: "Matrimonial Registration", desc: "Access to matrimonial registration services for the community." },
  { icon: BookOpen, name: "Vidyarthimithra", desc: "Interest-free loan to deserving meritorious students." },
  { icon: Laptop, name: "Laptop Assistance", desc: "Distribution of laptops by accepting 25% of the cost." },
  { icon: Award, name: "UPSC Training / Vasavi Academy", desc: "Free guidance programmes for IAS, IPS, Banking and premium competitive exams for eligible candidates." },
];

function Page() {
  return (
    <div>
      <PageHeader title="Services & Schemes" subtitle="Programmes that support education, health, housing and dignity." />
      <Container className="py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {schemes.map(({ icon: Icon, name, desc }) => (
            <div key={name} className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-brand-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-brand">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
