import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Search, User, Phone, Mail, MapPin, Instagram, Twitter, Youtube } from "lucide-react";

const menuItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Varthapathra", to: "/varthapathra" },
  { label: "Audit Statements", to: "/audit-statements" },
  { label: "Applications", to: "/applications" },
  { label: "Services & Schemes", to: "/services" },
  { label: "Community", to: "/community" },
  { label: "Business Directory", to: "/business-directory" },
  { label: "Jobs", to: "/jobs" },
  { label: "Gallery", to: "/gallery" },
  { label: "Management", to: "/management" },
  { label: "E-Seva", to: "/e-seva" },
  { label: "Contact Us", to: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:h-20 sm:px-6">
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-md text-brand hover:bg-secondary"
          >
            <Menu className="h-6 w-6" />
          </button>

          <Link to="/" className="flex min-w-0 items-center gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground font-display text-lg font-bold sm:h-12 sm:w-12">
              VC
            </div>
            <div className="min-w-0 leading-tight">
              <div className="truncate font-display text-sm font-bold text-brand sm:text-base">
                KARNATAKA ARYA VYSYA MAHA SABHA
              </div>
              <div className="truncate text-[11px] text-muted-foreground sm:text-xs">
                Vysya Connect · Connect. Engage. Grow.
              </div>
            </div>
          </Link>

          <div className="ml-auto flex items-center gap-1">
            <button
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search"
              className="grid h-10 w-10 place-items-center rounded-md text-brand hover:bg-secondary"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              to="/profile"
              aria-label="Profile"
              className="grid h-10 w-10 place-items-center rounded-md text-brand hover:bg-secondary"
            >
              <User className="h-5 w-5" />
            </Link>
            <Link
              to="/login"
              className="ml-1 hidden rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand-accent sm:inline-flex"
            >
              Log In
            </Link>
          </div>
        </div>

        {searchOpen && (
          <div className="border-t border-border bg-white">
            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
              <div className="flex items-center gap-2 rounded-md border border-input bg-background px-3">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  autoFocus
                  placeholder="Search members, businesses, jobs, schemes…"
                  className="h-11 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                <button onClick={() => setSearchOpen(false)} className="text-xs text-muted-foreground hover:text-foreground">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Drawer */}
      <div
        className={`fixed inset-0 z-50 transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          className={`absolute inset-y-0 left-0 flex w-[86%] max-w-sm flex-col bg-white shadow-xl transition-transform ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <div className="font-display text-lg font-bold text-brand">Menu</div>
            <button onClick={() => setOpen(false)} aria-label="Close" className="grid h-9 w-9 place-items-center rounded-md hover:bg-secondary">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-2">
            {menuItems.map((m) => (
              <Link
                key={m.to}
                to={m.to}
                onClick={() => setOpen(false)}
                className="block px-5 py-3 text-[15px] text-foreground hover:bg-secondary hover:text-brand"
                activeProps={{ className: "block px-5 py-3 text-[15px] bg-secondary text-brand font-medium" }}
                activeOptions={{ exact: m.to === "/" }}
              >
                {m.label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-border p-4">
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="block w-full rounded-md bg-brand py-2.5 text-center text-sm font-medium text-brand-foreground hover:bg-brand-accent"
            >
              Log In / Create Account
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-brand text-brand-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="mb-4 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10 font-display font-bold">VC</div>
            <div className="font-display text-lg font-bold">Vysya Connect</div>
          </div>
          <p className="text-sm text-white/80">
            Karnataka Arya Vysya Mahasabha — a trusted digital ecosystem for the Arya Vysya community across Karnataka.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-display text-base font-semibold">Useful Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {menuItems.slice(1).map((m) => (
              <li key={m.to}>
                <Link to={m.to} className="hover:text-white">{m.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-base font-semibold">Contact</h4>
          <ul className="space-y-3 text-sm text-white/85">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> No. 16, Seshadri Road, Gandhinagar, Bengaluru-560009</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0" /> <span>080-22206151 / 22206152 / 22206153</span></li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0" /> <a href="mailto:kavmss@gmail.com" className="hover:text-white">kavmss@gmail.com</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-base font-semibold">Address</h4>
          <p className="text-sm text-white/85 leading-relaxed">
            <strong>Karnataka Arya Vysya Mahasabha</strong><br />
            No. 16, Seshadri Road,<br />
            Gandhinagar, Bengaluru-560009
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white/70 sm:px-6">
          © {new Date().getFullYear()} Karnataka Arya Vysya Mahasabha. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
