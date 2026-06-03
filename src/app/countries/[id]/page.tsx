import { countries } from "@/data/countries";
import { CountryHeader } from "@/components/CountryHeader";
import { ScoreBadge } from "@/components/ScoreBadge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { notFound } from "next/navigation";

export default async function CountryProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const country = countries.find((c) => c.id === id);

  if (!country) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <CountryHeader
        name={country.name}
        flag={country.flag}
        capital={country.capital}
        population={country.population}
        currency={country.currency}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
        <div className="lg:col-span-2">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full justify-start border-b border-border bg-transparent h-auto p-0 mb-8 rounded-none gap-8">
              <TabTrigger value="overview">Overview</TabTrigger>
              <TabTrigger value="relocation">Relocation</TabTrigger>
              <TabTrigger value="business">Business</TabTrigger>
              <TabTrigger value="property">Property</TabTrigger>
              <TabTrigger value="infrastructure">Infrastructure</TabTrigger>
              <TabTrigger value="security">Security</TabTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-0">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight text-gold">Executive Summary</h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">{country.overview}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <Card className="bg-muted/20 border-border">
                    <CardHeader><CardTitle className="text-sm font-black uppercase tracking-widest">Key Strengths</CardTitle></CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                        <li>Strong economic growth potential</li>
                        <li>Favorable demographic dividend</li>
                        <li>Expanding digital infrastructure</li>
                        <li>High diaspora engagement</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/20 border-border">
                    <CardHeader><CardTitle className="text-sm font-black uppercase tracking-widest">Risk Factors</CardTitle></CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                        <li>Currency volatility</li>
                        <li>Infrastructure bottlenecks in rural areas</li>
                        <li>Regulatory complexities</li>
                        <li>Bureaucratic delays</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="relocation">
              <div className="p-12 border border-dashed border-border rounded-lg text-center text-muted-foreground">
                Relocation data is currently being updated for {country.name}.
              </div>
            </TabsContent>
            {/* Other tabs would follow similar structure */}
          </Tabs>
        </div>

        <div className="space-y-8">
          <Card className="bg-card border-border overflow-hidden">
            <CardHeader className="bg-muted/30 border-b border-border">
              <CardTitle className="text-xs font-black uppercase tracking-widest">Intelligence Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-3 gap-6">
                <ScoreBadge score={country.scores.safety} label="Safety" />
                <ScoreBadge score={country.scores.cost} label="Cost" />
                <ScoreBadge score={country.scores.business} label="Business" />
                <ScoreBadge score={country.scores.infrastructure} label="Infras." />
                <ScoreBadge score={country.scores.internet} label="Internet" />
                <ScoreBadge score={country.scores.diasporaFriendliness} label="Diaspora" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gold text-black border-none">
            <CardContent className="p-6">
              <h3 className="font-black uppercase tracking-tighter text-xl mb-2">Investor Ready?</h3>
              <p className="text-sm font-medium mb-4 opacity-80">Get the full 50-page deep dive report including property tax analysis and business registration guides.</p>
              <button className="w-full bg-black text-white font-bold uppercase tracking-widest text-xs py-3 rounded">Download Full Report</button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function TabTrigger({ value, children }: { value: string; children: React.ReactNode }) {
  return (
    <TabsTrigger
      value={value}
      className="data-[state=active]:bg-transparent data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold rounded-none px-0 py-4 text-xs font-black uppercase tracking-widest transition-all"
    >
      {children}
    </TabsTrigger>
  );
}
