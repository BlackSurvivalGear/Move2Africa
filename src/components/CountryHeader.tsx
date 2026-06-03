import { Badge } from "@/components/ui/badge";

interface CountryHeaderProps {
  name: string;
  flag: string;
  capital: string;
  population: string;
  currency: string;
}

export function CountryHeader({ name, flag, capital, population, currency }: CountryHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border">
      <div className="flex items-center gap-6">
        <span className="text-7xl md:text-8xl">{flag}</span>
        <div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-2">{name}</h1>
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="border-gold text-gold uppercase text-[10px]">{capital}</Badge>
            <Badge variant="outline" className="border-green-africa text-green-africa uppercase text-[10px]">{population}</Badge>
            <Badge variant="outline" className="border-muted-foreground text-muted-foreground uppercase text-[10px]">{currency}</Badge>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest bg-muted/50 px-4 py-2 rounded-full border border-border">
        <span className="w-2 h-2 rounded-full bg-green-africa animate-pulse"></span>
        Live Intelligence Report
      </div>
    </div>
  );
}
