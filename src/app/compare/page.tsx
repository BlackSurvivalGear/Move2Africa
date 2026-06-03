import { countries } from "@/data/countries";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function ComparePage() {
  const selectedCountries = countries.slice(0, 3); // Nigeria, Ghana, Kenya

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">
            COUNTRY <span className="text-gold italic">COMPARISON.</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Benchmark 2–4 countries across key performance indicators. Data-driven decision making for your next move.
          </p>
        </div>
        <Button className="bg-gold hover:bg-gold/90 text-black font-black uppercase tracking-widest text-xs h-12">
          <Plus className="h-4 w-4 mr-2" /> Add Country
        </Button>
      </div>

      <ComparisonTable countries={selectedCountries} />

      <div className="mt-12 p-8 border border-border bg-muted/10 rounded-lg flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl text-center md:text-left">
          <h3 className="text-xl font-bold mb-2">Need more detailed metrics?</h3>
          <p className="text-muted-foreground text-sm">Professional plans include access to 50+ additional comparison points including healthcare quality index and tax efficiency scores.</p>
        </div>
        <Button className="bg-white text-black font-black uppercase tracking-widest text-xs h-12 px-8 whitespace-nowrap">
          Upgrade to Professional
        </Button>
      </div>
    </div>
  );
}
