import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";
import { CountryCard } from "@/components/CountryCard";
import { countries } from "@/data/countries";
import Link from "next/link";
import { ArrowRight, Globe, TrendingUp, Shield, Zap } from "lucide-react";

export default function Home() {
  const featuredCountries = countries.slice(0, 6);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-border">
        {/* Background Pattern - Simplified Africa Map Representation */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg viewBox="0 0 1000 1000" className="w-full h-full fill-gold">
            <path d="M450,200 Q500,150 600,200 T750,300 T800,450 T700,600 T550,750 T400,800 T250,700 T200,550 T250,400 T350,250 Z" />
            {/* Minimalist representation of Africa shape */}
          </svg>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-[10px] font-black uppercase tracking-[0.2em] mb-8 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            Intelligence Platform 2.0
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]">
            RELOCATE <span className="text-gold italic">SMARTER.</span><br />
            INVEST <span className="text-green-africa italic">BETTER.</span><br />
            LIVE ANYWHERE IN AFRICA.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            Intelligence-driven relocation reports, country comparisons, investment insights and diaspora guidance across Africa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-black font-black uppercase tracking-widest text-sm h-14 px-10 rounded-md">
              <Link href="/countries">Explore Countries</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border hover:border-gold font-black uppercase tracking-widest text-sm h-14 px-10 rounded-md">
              <Link href="/compare">Compare Countries</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <StatCard label="Coverage" value="54 Countries" sublabel="Complete continental data" />
            <StatCard label="Market Size" value="1.4 Billion" sublabel="Total population reach" />
            <StatCard label="Intelligence" value="1000+ Points" sublabel="Data points per country" />
            <StatCard label="Advisor" value="AI Driven" sublabel="Personalized relocation guidance" />
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">FEATURED <span className="text-gold italic">INTELLIGENCE.</span></h2>
            <p className="text-muted-foreground max-w-xl">Deep-dive into Africa&apos;s fastest-growing economies and most livable cities with our comprehensive relocation reports.</p>
          </div>
          <Button asChild variant="link" className="text-gold font-black uppercase tracking-widest p-0 flex items-center gap-2">
            <Link href="/countries">View all countries <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCountries.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <ValueProp
              icon={<Shield className="h-8 w-8 text-gold" />}
              title="Vetted Safety"
              desc="Real-time security intelligence and neighborhood-level safety ratings."
            />
            <ValueProp
              icon={<TrendingUp className="h-8 w-8 text-gold" />}
              title="Market Alpha"
              desc="Identify investment opportunities before they go mainstream."
            />
            <ValueProp
              icon={<Globe className="h-8 w-8 text-gold" />}
              title="Remote Ready"
              desc="Validated internet speeds and coworking space availability."
            />
            <ValueProp
              icon={<Zap className="h-8 w-8 text-gold" />}
              title="Fast Track"
              desc="Accelerated visa and residency guidance for the diaspora."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 container mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic">READY TO MAKE THE <span className="text-gold">MOVE?</span></h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">Join 10,000+ professionals, investors and diaspora members exploring the future of Africa.</p>
        <Button size="lg" className="bg-gold hover:bg-gold/90 text-black font-black uppercase tracking-widest text-base h-16 px-12 rounded-md">
          Start Your Intelligence Report
        </Button>
      </section>
    </div>
  );
}

function ValueProp({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex flex-col gap-4">
      {icon}
      <h3 className="text-xl font-bold uppercase tracking-tight">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}
