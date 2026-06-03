import { countries } from "@/data/countries";
import { CountryCard } from "@/components/CountryCard";
import { SearchFilters } from "@/components/SearchFilters";

export default function CountriesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col mb-12">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">
          COUNTRY <span className="text-gold italic">INTELLIGENCE.</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg">
          Access deep-dive reports on 54 African nations. Filter by safety, cost, and business environment.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <aside className="w-full lg:w-64 shrink-0">
          <div className="sticky top-32">
            <SearchFilters />
          </div>
        </aside>

        <main className="flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {countries.map((country) => (
              <CountryCard key={country.id} country={country} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
