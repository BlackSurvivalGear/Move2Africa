import { pricingPlans } from "@/data/pricing";
import { PricingCard } from "@/components/PricingCard";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, Minus } from "lucide-react";

export default function PricingPage() {
  const comparisonFeatures = [
    { name: "Country Statistics", explorer: true, professional: true, investor: true },
    { name: "Relocation Reports", explorer: "Basic", professional: "Full", investor: "Full + VIP" },
    { name: "AI Advisor Queries", explorer: "5/day", professional: "Unlimited", investor: "Unlimited" },
    { name: "Comparison Tool", explorer: "2 Countries", professional: "4 Countries", investor: "Unlimited" },
    { name: "Property Market Data", explorer: false, professional: true, investor: true },
    { name: "1-on-1 Consultation", explorer: false, professional: false, investor: "Monthly" },
    { name: "Investment Alerts", explorer: false, professional: false, investor: true },
    { name: "Custom Research", explorer: false, professional: false, investor: true },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
          CHOOSE YOUR <span className="text-gold italic">PLAN.</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Unlock the intelligence you need to successfully relocate or invest in Africa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black tracking-tighter mb-12 text-center uppercase">Detailed <span className="text-gold italic">Comparison.</span></h2>
        <div className="rounded-lg border border-border overflow-hidden bg-card">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow className="border-border">
                <TableHead className="w-[300px] text-xs font-black uppercase tracking-widest py-6">Feature</TableHead>
                <TableHead className="text-center text-xs font-black uppercase tracking-widest py-6">Explorer</TableHead>
                <TableHead className="text-center text-xs font-black uppercase tracking-widest py-6 text-gold">Professional</TableHead>
                <TableHead className="text-center text-xs font-black uppercase tracking-widest py-6">Investor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonFeatures.map((f, i) => (
                <TableRow key={i} className="border-border hover:bg-muted/10">
                  <TableCell className="font-medium text-sm">{f.name}</TableCell>
                  <TableCell className="text-center">{renderValue(f.explorer)}</TableCell>
                  <TableCell className="text-center font-bold text-gold">{renderValue(f.professional)}</TableCell>
                  <TableCell className="text-center">{renderValue(f.investor)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

function renderValue(val: boolean | string) {
  if (typeof val === "boolean") {
    return val ? <Check className="h-4 w-4 text-green-africa mx-auto" /> : <Minus className="h-4 w-4 text-muted-foreground mx-auto opacity-30" />;
  }
  return <span className="text-xs uppercase font-bold">{val}</span>;
}
