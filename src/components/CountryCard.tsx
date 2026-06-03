import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ScoreBadge } from "./ScoreBadge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Country } from "@/types";

interface CountryCardProps {
  country: Country;
}

export function CountryCard({ country }: CountryCardProps) {
  return (
    <Card className="bg-card border-border hover:border-gold/50 transition-all group overflow-hidden flex flex-col h-full">
      <CardHeader className="p-0">
        <div className="h-24 bg-gradient-to-r from-green-africa/20 to-gold/10 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-500">
          {country.flag}
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold">{country.name}</h3>
            <p className="text-sm text-muted-foreground">{country.capital}, {country.region}</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-4">
          <ScoreBadge score={country.scores.safety} label="Safety" />
          <ScoreBadge score={country.scores.cost} label="Cost" />
          <ScoreBadge score={country.scores.business} label="Business" />
          <ScoreBadge score={country.scores.remoteWork} label="Remote" />
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full bg-gold hover:bg-gold/90 text-black font-bold uppercase tracking-widest text-xs">
          <Link href={`/countries/${country.id}`}>View Report</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
