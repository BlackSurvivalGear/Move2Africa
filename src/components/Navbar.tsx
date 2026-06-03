import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="border-b border-border bg-black/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gold rounded flex items-center justify-center font-black text-black text-xl italic">
            M2A
          </div>
          <span className="text-xl font-black tracking-tighter uppercase hidden sm:block">
            Move<span className="text-gold">2</span>Africa
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/countries" label="Countries" />
          <NavLink href="/compare" label="Compare" />
          <NavLink href="/advisor" label="AI Advisor" />
          <NavLink href="/pricing" label="Pricing" />
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-xs font-bold uppercase tracking-widest hover:text-gold transition-colors">
            Sign In
          </Button>
          <Button className="bg-gold hover:bg-gold/90 text-black text-xs font-bold uppercase tracking-widest px-6 h-10">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-gold transition-colors"
    >
      {label}
    </Link>
  );
}
