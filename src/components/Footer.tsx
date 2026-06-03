import Link from "next/link";
import { Send, Layout, Globe, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gold rounded flex items-center justify-center font-black text-black text-sm italic">
                M2A
              </div>
              <span className="text-lg font-black tracking-tighter uppercase">
                Move<span className="text-gold">2</span>Africa
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              The premier intelligence platform for the African diaspora, investors, and digital nomads. Relocate with confidence.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Send className="h-4 w-4" />} />
              <SocialIcon icon={<Layout className="h-4 w-4" />} />
              <SocialIcon icon={<Globe className="h-4 w-4" />} />
              <SocialIcon icon={<Mail className="h-4 w-4" />} />
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-6 text-gold">Platform</h4>
            <ul className="space-y-4">
              <FooterLink href="/countries" label="Explore Countries" />
              <FooterLink href="/compare" label="Compare Tools" />
              <FooterLink href="/advisor" label="AI Advisor" />
              <FooterLink href="/pricing" label="Pricing Plans" />
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-6 text-gold">Company</h4>
            <ul className="space-y-4">
              <FooterLink href="#" label="About Us" />
              <FooterLink href="#" label="Contact" />
              <FooterLink href="#" label="Careers" />
              <FooterLink href="#" label="Press" />
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-6 text-gold">Legal</h4>
            <ul className="space-y-4">
              <FooterLink href="#" label="Privacy Policy" />
              <FooterLink href="#" label="Terms of Service" />
              <FooterLink href="#" label="Cookie Policy" />
              <FooterLink href="#" label="Compliance" />
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">
            © {new Date().getFullYear()} Move2Africa Intelligence. All rights reserved.
          </p>
          <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest flex items-center gap-2">
            Data sourced from <span className="text-gold">World Bank</span> & <span className="text-green-africa">IMF</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="text-xs font-bold text-muted-foreground hover:text-white transition-colors">
        {label}
      </Link>
    </li>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-8 h-8 rounded-full bg-muted/30 border border-border flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-black transition-all">
      {icon}
    </a>
  );
}
