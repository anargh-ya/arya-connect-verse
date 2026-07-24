import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/page-parts";
import { Shield, Bell, LogOut, User } from "lucide-react";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile · Vysya Connect" },
      { name: "description", content: "Your Vysya Connect profile." },
      { property: "og:title", content: "Profile · Vysya Connect" },
      { property: "og:description", content: "Manage your account and privacy." },
    ],
  }),
  component: Profile,
});

function Profile() {
  return (
    <div>
      <PageHeader title="Your Profile" subtitle="Manage account details and privacy preferences." />
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-[280px_1fr]">
          <aside className="rounded-2xl border border-border bg-card p-6 text-center">
            <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-accent text-white">
              <User className="h-10 w-10" />
            </div>
            <div className="mt-4 font-display text-lg font-bold text-brand">Guest User</div>
            <p className="text-xs text-muted-foreground">Sign in to view your profile</p>
            <Link to="/login" className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-brand py-2.5 text-sm font-medium text-brand-foreground hover:bg-brand-accent">Log In</Link>
          </aside>

          <div className="space-y-4">
            {[
              { icon: User, title: "Personal Information", desc: "Name, phone, gender, age and occupation." },
              { icon: Shield, title: "Privacy Controls", desc: "Control who can see your phone number and profile." },
              { icon: Bell, title: "Notifications", desc: "Manage announcements, WhatsApp and email preferences." },
              { icon: LogOut, title: "Sign out", desc: "Sign out from this device." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-brand"><Icon className="h-5 w-5" /></div>
                <div>
                  <div className="font-semibold text-foreground">{title}</div>
                  <div className="text-sm text-muted-foreground">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
