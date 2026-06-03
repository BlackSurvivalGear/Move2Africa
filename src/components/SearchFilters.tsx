import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function SearchFilters() {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search countries..." className="pl-10 bg-muted/30 border-border" />
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-4 w-4 text-gold" />
          <h4 className="text-xs font-bold uppercase tracking-widest">Filters</h4>
        </div>

        <div className="space-y-4">
          <FilterGroup label="Region" options={["North Africa", "West Africa", "East Africa", "Central Africa", "Southern Africa"]} />
          <Separator className="bg-border/50" />
          <FilterGroup label="Cost Level" options={["$", "$$", "$$$"]} />
          <Separator className="bg-border/50" />
          <FilterGroup label="Safety Level" options={["High", "Moderate", "Watch"]} />
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="space-y-2">
      <p className="text-[10px] font-bold text-muted-foreground uppercase">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            className="text-[11px] px-2 py-1 rounded border border-border hover:border-gold transition-colors bg-muted/20"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
