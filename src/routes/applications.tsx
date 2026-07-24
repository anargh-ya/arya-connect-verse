import { createFileRoute } from "@tanstack/react-router";
import { Container, DocCard, PageHeader } from "@/components/page-parts";

export const Route = createFileRoute("/applications")({
  head: () => ({
    meta: [
      { title: "Applications · Vysya Connect" },
      { name: "description", content: "Download applications for schemes, memberships and services." },
      { property: "og:title", content: "Applications · Vysya Connect" },
      { property: "og:description", content: "All community applications in one place." },
    ],
  }),
  component: Page,
});

const apps = [
  "Matrimonial Application","Amarjyoti Scheme","Life Membership","Vasavi Karunashrya Application","Sandhya Shree",
  "Vysya Member","Vasavi Chetana","Women Empowerment Application","Karnataka Arya Vysya Maha Sabha","Vasavi Academy",
  "Shree Vasavi Education Co-operative Society",
];
const hostels = ["Girls Hostel Bangalore","Boys Hostel Bangalore","Mysuru Hostel"];

function Page() {
  return (
    <div>
      <PageHeader title="Applications" subtitle="Download and submit applications for schemes and memberships." />
      <Container className="py-12">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {apps.map((a) => <DocCard key={a} title={a} />)}
        </div>
        <h2 className="mt-14 mb-5 font-display text-2xl font-bold text-brand">Hostel Section</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {hostels.map((a) => <DocCard key={a} title={a} />)}
        </div>
      </Container>
    </div>
  );
}
