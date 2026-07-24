import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Users, Briefcase, Award, Newspaper, GraduationCap, Heart, Home as HomeIcon } from "lucide-react";
import { Container } from "@/components/page-parts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vysya Connect · Home" },
      { name: "description", content: "Connect. Engage. Grow. The digital home of the Karnataka Arya Vysya Mahasabha community." },
      { property: "og:title", content: "Vysya Connect · Home" },
      { property: "og:description", content: "Connect. Engage. Grow." },
    ],
  }),
  component: Home,
});

const announcements = [
  "Vidya Nidhi scholarships open for 2026 — apply through the Applications page.",
  "New Varthapathra edition April 2026 now available.",
  "Vasavi Academy UPSC coaching batch starts July 15.",
  "Community meet in Mysuru — 20 August 2026.",
  "Amara Jyothi scheme extended to all districts.",
];

const businessCategories = [
  "Jewellery & Precious Metals","Clothing & Textiles","Retail & Trading","Food & Hospitality",
  "IT & Software","Real Estate & Construction","Healthcare","Education & Training",
];

const achievements = [
  { title: "Financial Turnaround", body: "Maha Sabha was in debt of Rs 28 lakhs; today it earns Rs 48 lakhs per month under the new administration." },
  { title: "VIDYA NIDHI", body: "Rs 1000 monthly scholarships to students until they complete their degree." },
  { title: "VASAVI CHETHANA", body: "Rs 1000 per month lifelong financial help to those born with 75%+ physical disability." },
  { title: "VYSYA HOSTEL", body: "Accommodation with food for youth coming to Bangalore for jobs and higher studies." },
  { title: "ARYA VYSYA GUEST HOUSE", body: "Affordable accommodation for community members visiting Bangalore, including a dormitory option." },
  { title: "VIDYARTHI MITHRA", body: "Interest-free loan up to Rs 1 lakh — no collateral — for Engineering, Medical, CA, MBA, Pharmacy students." },
  { title: "LAPTOP Scheme", body: "Distributed laptops worth Rs 1.20 crores across three years — 200 students per year." },
  { title: "AMARA JYOTHI", body: "Financial assistance to families where a death has occurred." },
  { title: "VYSYANTHARANGA", body: "Community social network sharing Maha Sabha activities in a time-bound manner." },
  { title: "PRATHIBHOTHSAVA", body: "Felicitating students scoring 90%+ or distinction with certificates, citations and cash awards." },
  { title: "AROGYA BHAGYA", body: "Medical relief and assistance to those affected by pandemic-related illness." },
  { title: "VANAPRASTHASHRAMA & KARUNASHRAYA", body: "Care for senior citizens and orphaned children — a blend of the old and the young." },
  { title: "VASAVI EXCELLENCE", body: "Recognising talented community members — with Kannada Prabha & Asianet Suvarna as media partners." },
  { title: "SANDHYA SHREE", body: "Rs 1500 monthly assistance to widows above 75 unable to earn a livelihood." },
  { title: "VASAVA PEETHA", body: "Our own Guru Peetha led by Sri Sri Sri Sachidananda Saraswathi — a dream come true for our members." },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand text-brand-foreground">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #1977CC 0%, transparent 40%), radial-gradient(circle at 80% 60%, #ffffff22 0%, transparent 40%)" }} />
        <Container className="relative py-16 sm:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider">
                Karnataka Arya Vysya Mahasabha
              </div>
              <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Connect. Engage. <span className="text-white/80">Grow.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
                A trusted digital ecosystem for the Arya Vysya community across Karnataka — members, businesses, schemes and services in one place.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/register" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-brand transition hover:bg-white/90">
                  Create Account <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/business-directory" className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Explore Businesses
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="grid h-full grid-cols-2 gap-4">
                  {[
                    { icon: Users, label: "12k+ Members" },
                    { icon: Building2, label: "800+ Businesses" },
                    { icon: GraduationCap, label: "15+ Schemes" },
                    { icon: Heart, label: "60+ Years of Service" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex flex-col justify-between rounded-xl bg-white/10 p-4">
                      <Icon className="h-6 w-6" />
                      <div className="font-display text-lg font-semibold">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Announcements */}
      <div className="marquee-track overflow-hidden border-y border-border bg-secondary/60">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
          <span className="shrink-0 rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-foreground">Announcements</span>
          <div className="relative flex-1 overflow-hidden">
            <div className="marquee flex w-max gap-12 whitespace-nowrap text-sm text-brand-muted">
              {[...announcements, ...announcements].map((a, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" /> {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brief History */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-accent">Brief History</div>
              <h2 className="font-display text-3xl font-bold text-brand sm:text-4xl">A legacy of unity and service</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                The Karnataka Arya Vysya Mahasabha has served the community for decades — building trust, uplifting members, and running schemes that touch education, healthcare, housing and senior care. Vysya Connect brings this legacy into the digital age.
              </p>
              <Link to="/about" className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-accent">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand to-brand-accent" />
              <div className="mt-8 aspect-square rounded-2xl bg-secondary" />
              <div className="aspect-square rounded-2xl bg-secondary" />
              <div className="-mt-8 aspect-square rounded-2xl bg-gradient-to-tr from-brand-accent to-brand" />
            </div>
          </div>
        </Container>
      </section>

      {/* Business Directory preview */}
      <section className="border-y border-border bg-secondary/40 py-16 sm:py-20">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-accent">Business Directory</div>
              <h2 className="font-display text-3xl font-bold text-brand sm:text-4xl">Discover community businesses</h2>
            </div>
            <Link to="/business-directory" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-accent">
              View all categories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {businessCategories.map((c) => (
              <Link to="/business-directory" key={c} className="group rounded-xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-brand-accent/40 hover:shadow-md">
                <Building2 className="h-6 w-6 text-brand-accent" />
                <div className="mt-4 font-medium text-foreground">{c}</div>
                <div className="mt-1 text-xs text-muted-foreground">Browse listings →</div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Achievements */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-10 max-w-2xl">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-accent">Achievements</div>
            <h2 className="font-display text-3xl font-bold text-brand sm:text-4xl">Milestones that shape our community</h2>
            <p className="mt-3 text-muted-foreground">A snapshot of what the Maha Sabha has delivered — from scholarships to senior care.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((a, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-2 text-brand-accent">
                  <Award className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Achievement {i + 1}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-brand">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quick links */}
      <section className="border-t border-border bg-secondary/40 py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              { to: "/community", icon: Users, label: "Community" },
              { to: "/jobs", icon: Briefcase, label: "Jobs" },
              { to: "/services", icon: HomeIcon, label: "Schemes" },
              { to: "/varthapathra", icon: Newspaper, label: "Varthapathra" },
            ].map(({ to, icon: Icon, label }) => (
              <Link key={to} to={to} className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-brand text-brand-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{label}</div>
                  <div className="text-xs text-muted-foreground">Explore →</div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
