import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Container } from "@/components/page-parts";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log In · Vysya Connect" },
      { name: "description", content: "Log in to Vysya Connect with your WhatsApp-enabled mobile number." },
      { property: "og:title", content: "Log In · Vysya Connect" },
      { property: "og:description", content: "Secure WhatsApp OTP login." },
    ],
  }),
  component: Login,
});

function Login() {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  return (
    <Container className="flex min-h-[70vh] items-center justify-center py-14">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm">
        <div className="mb-6 text-center">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand font-display text-lg font-bold text-brand-foreground">VC</div>
          <h1 className="mt-4 font-display text-2xl font-bold text-brand">Welcome Back</h1>
          <p className="mt-1 text-sm text-muted-foreground">Log in to Vysya Connect</p>
        </div>

        {step === "phone" ? (
          <form onSubmit={(e) => { e.preventDefault(); if (phone.length === 10) setStep("otp"); }} className="space-y-4">
            <label className="block text-sm font-medium">Mobile Number</label>
            <div className="flex items-center overflow-hidden rounded-md border border-input bg-white">
              <span className="border-r border-input bg-secondary px-3 py-2.5 text-sm text-muted-foreground">+91</span>
              <input
                inputMode="numeric" maxLength={10}
                value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g,""))}
                placeholder="10-digit number"
                className="flex-1 px-3 py-2.5 text-sm outline-none"
              />
            </div>
            <p className="text-xs text-muted-foreground">Enter your WhatsApp-enabled mobile number to continue.</p>
            <button type="submit" disabled={phone.length !== 10} className="w-full rounded-md bg-brand py-2.5 text-sm font-semibold text-brand-foreground transition hover:bg-brand-accent disabled:opacity-50">
              Send OTP on WhatsApp
            </button>
            <p className="text-center text-sm text-muted-foreground">
              New here? <Link to="/register" className="font-medium text-brand-accent hover:underline">Create an account</Link>
            </p>
          </form>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Enter the 6-digit OTP sent to <strong>+91 {phone}</strong> on WhatsApp.</p>
            <div className="flex justify-between gap-2">
              {otp.map((d, i) => (
                <input
                  key={i} inputMode="numeric" maxLength={1} value={d}
                  onChange={(e) => {
                    const v = e.target.value.replace(/\D/g,"");
                    const next = [...otp]; next[i] = v; setOtp(next);
                    if (v && i < 5) (document.getElementById(`otp-${i+1}`) as HTMLInputElement | null)?.focus();
                  }}
                  id={`otp-${i}`}
                  className="h-12 w-12 rounded-md border border-input bg-white text-center text-lg font-semibold outline-none focus:border-brand-accent"
                />
              ))}
            </div>
            <button className="w-full rounded-md bg-brand py-2.5 text-sm font-semibold text-brand-foreground hover:bg-brand-accent">Verify & Continue</button>
            <div className="flex justify-between text-xs text-muted-foreground">
              <button onClick={() => setStep("phone")} className="hover:text-brand">Change number</button>
              <button className="hover:text-brand">Resend OTP</button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
