import { createFileRoute } from "@tanstack/react-router";
import { Container, DocCard, PageHeader } from "@/components/page-parts";

export const Route = createFileRoute("/varthapathra")({
  head: () => ({
    meta: [
      { title: "Varthapathra · Vysya Connect" },
      { name: "description", content: "Monthly newsletters of the Karnataka Arya Vysya Mahasabha." },
      { property: "og:title", content: "Varthapathra · Vysya Connect" },
      { property: "og:description", content: "Read monthly Varthapathra editions." },
    ],
  }),
  component: Page,
});

const editions = [
  "April 2026","March 2026","February 2026","January 2026",
  "December 2025","November 2025","October 2025","September 2025","August 2025","July 2025","June 2025","May 2025","April 2025","March 2025","February 2025","January 2025",
  "December 2024","November 2024","October 2024","September 2024","August 2024","July 2024","June 2024","May 2024",
  "November 2023","October 2023","September 2023","August 2023","July 2023","June 2023","May 2023","April 2023","March 2023","February 2023","January 2023",
  "December 2022","November 2022","October 2022","September 2022","August 2022","July 2022","June 2022","May 2022","April 2022","March 2022","February 2022","January 2022",
];

function Page() {
  return (
    <div>
      <PageHeader title="Varthapathra" subtitle="Monthly newsletters — tap any edition to open the PDF." />
      <Container className="py-12">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {editions.map((e) => (
            <DocCard key={e} title={e} />
          ))}
        </div>
      </Container>
    </div>
  );
}
