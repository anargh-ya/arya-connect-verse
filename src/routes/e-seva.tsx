import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Container, PageHeader } from "@/components/page-parts";

const ESEVA_URL = "https://techmh.com/eseva/web/index.php";

export const Route = createFileRoute("/e-seva")({
  head: () => ({
    meta: [
      { title: "E-Seva · Vysya Connect" },
      { name: "description", content: "Access community E-Seva services." },
      { property: "og:title", content: "E-Seva · Vysya Connect" },
      { property: "og:description", content: "Redirecting to the E-Seva portal." },
    ],
  }),
  component: Page,
});

function Page() {
  useEffect(() => {
    const t = setTimeout(() => window.open(ESEVA_URL, "_blank", "noopener,noreferrer"), 400);
    return () => clearTimeout(t);
  }, []);
  return (
    <div>
      <PageHeader title="E-Seva" subtitle="Opening the E-Seva portal in a new tab." />
      <Container className="py-14 text-center">
        <p className="mx-auto max-w-lg text-muted-foreground">
          If nothing happens, click the button below to open the E-Seva portal.
        </p>
        <a href={ESEVA_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-md bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground hover:bg-brand-accent">
          Open E-Seva Portal
        </a>
      </Container>
    </div>
  );
}
