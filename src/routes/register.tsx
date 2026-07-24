import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Container } from "@/components/page-parts";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create Account · Vysya Connect" },
      { name: "description", content: "Join Vysya Connect — the digital home of the Karnataka Arya Vysya community." },
      { property: "og:title", content: "Create Account · Vysya Connect" },
      { property: "og:description", content: "Register with your WhatsApp-enabled mobile number." },
    ],
  }),
  component: Register,
});

const occupations = [
  "Business / Entrepreneur","Salaried Employee","Self-Employed / Freelancer","Student","Government Employee",
  "Professional","Homemaker","Retired","Farmer / Agriculture","Skilled Worker / Technician","Job Seeker","Other",
];
const businessCategories = [
  "Retail & Trading","Jewellery & Precious Metals","Clothing & Textiles","Food & Hospitality","Manufacturing",
  "IT & Software","Real Estate & Construction","Finance & Investment","Healthcare","Education & Training",
  "Professional Services","Consulting","Logistics & Transportation","Travel & Tourism","Digital Marketing & Media",
  "E-commerce & Online Business","Import & Export","Agriculture & Farming","Franchise Business","Startup","Other",
];

function Register() {
  const [occupation, setOccupation] = useState("");
  const [businessCategory, setBusinessCategory] = useState("");

  const showBusiness = occupation === "Business / Entrepreneur";
  const showOtherOcc = occupation === "Other";
  const showOtherBiz = showBusiness && businessCategory === "Other";

  return (
    <Container className="py-14">
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 shadow-sm">
        <div className="mb-6 text-center">
          <h1 className="font-display text-3xl font-bold text-brand">Create Your Account</h1>
          <p className="mt-1 text-sm text-muted-foreground">Join Vysya Connect — Connect. Engage. Grow.</p>
        </div>

        <form className="grid grid-cols-1 gap-5 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
          <Field label="Full Name" full>
            <input required className="input" placeholder="Enter your full name" />
          </Field>

          <Field label="Mobile Number (WhatsApp)">
            <div className="flex items-center overflow-hidden rounded-md border border-input bg-white">
              <span className="border-r border-input bg-secondary px-3 py-2.5 text-sm text-muted-foreground">+91</span>
              <input required inputMode="numeric" maxLength={10} className="flex-1 px-3 py-2.5 text-sm outline-none" placeholder="10-digit number" />
            </div>
          </Field>

          <Field label="Gender">
            <select required className="input">
              <option value="">Select</option>
              <option>Male</option><option>Female</option><option>Other</option><option>Prefer not to say</option>
            </select>
          </Field>

          <Field label="Age">
            <input required type="number" min={13} max={120} className="input" placeholder="Your age" />
          </Field>

          <Field label="Occupation">
            <select required className="input" value={occupation} onChange={(e) => { setOccupation(e.target.value); setBusinessCategory(""); }}>
              <option value="">Select occupation</option>
              {occupations.map(o => <option key={o}>{o}</option>)}
            </select>
          </Field>

          {showOtherOcc && (
            <Field label="Please specify your occupation">
              <input required className="input" placeholder="Your occupation" />
            </Field>
          )}

          {showBusiness && (
            <Field label="Business Category" full={!showOtherBiz}>
              <select required className="input" value={businessCategory} onChange={(e) => setBusinessCategory(e.target.value)}>
                <option value="">Select category</option>
                {businessCategories.map(o => <option key={o}>{o}</option>)}
              </select>
            </Field>
          )}

          {showOtherBiz && (
            <Field label="Please specify your business category">
              <input required className="input" placeholder="Your business category" />
            </Field>
          )}

          <div className="sm:col-span-2">
            <button className="w-full rounded-md bg-brand py-3 text-sm font-semibold text-brand-foreground transition hover:bg-brand-accent">
              Continue — Verify via WhatsApp OTP
            </button>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Already have an account? <Link to="/login" className="font-medium text-brand-accent hover:underline">Log in</Link>
            </p>
          </div>
        </form>
      </div>

      <style>{`.input{width:100%;border:1px solid var(--color-input);background:#fff;border-radius:.5rem;padding:.625rem .75rem;font-size:.875rem;outline:none} .input:focus{border-color:var(--color-ring)}`}</style>
    </Container>
  );
}

function Field({ label, children, full = false }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <label className={`block text-sm ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-1.5 block font-medium text-foreground">{label}</span>
      {children}
    </label>
  );
}
