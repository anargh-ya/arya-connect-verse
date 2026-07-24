import { createFileRoute } from "@tanstack/react-router";
import { Container, DocCard, PageHeader } from "@/components/page-parts";

export const Route = createFileRoute("/audit-statements")({
  head: () => ({
    meta: [
      { title: "Audit Statements · Vysya Connect" },
      { name: "description", content: "Audited statements and financial reports of the Karnataka Arya Vysya Mahasabha." },
      { property: "og:title", content: "Audit Statements · Vysya Connect" },
      { property: "og:description", content: "Transparent audits and reports." },
    ],
  }),
  component: Page,
});

const docs = [
  "Audited Statements 2020-21","Audited Statements 2019-20","Schedule NA 2021-22","Income and Expenditure 2021-22",
  "Balance Sheet 2021-22","Audit Report 2022-2023","Audit Report FY 2023-24 KAVMS","Annual Report - 2025 Vasavi Edu","Audit Report 2024-2025",
];

function Page() {
  return (
    <div>
      <PageHeader title="Audit Statements" subtitle="Full transparency — audited financials and annual reports." />
      <Container className="py-12">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {docs.map((d) => <DocCard key={d} title={d} />)}
        </div>
      </Container>
    </div>
  );
}
