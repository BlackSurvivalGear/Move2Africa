import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Country, CountryScores } from "@/types";

interface ComparisonTableProps {
  countries: Country[];
}

export function ComparisonTable({ countries }: ComparisonTableProps) {
  const metrics: { key: keyof CountryScores; label: string }[] = [
    { key: "safety", label: "Safety" },
    { key: "cost", label: "Cost of Living" },
    { key: "internet", label: "Internet Speed" },
    { key: "healthcare", label: "Healthcare" },
    { key: "education", label: "Education" },
    { key: "business", label: "Business Environment" },
    { key: "infrastructure", label: "Infrastructure" },
    { key: "diasporaFriendliness", label: "Diaspora Friendliness" },
  ];

  return (
    <div className="rounded-lg border border-border overflow-hidden bg-card">
      <Table>
        <TableHeader className="bg-muted/30">
          <TableRow className="hover:bg-transparent border-border">
            <TableHead className="w-[200px] text-xs font-black uppercase tracking-widest py-6">Metric</TableHead>
            {countries.map((c) => (
              <TableHead key={c.id} className="text-center py-6">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl">{c.flag}</span>
                  <span className="text-sm font-bold text-foreground">{c.name}</span>
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {metrics.map((metric) => (
            <TableRow key={metric.key} className="hover:bg-muted/10 border-border">
              <TableCell className="font-bold text-sm text-muted-foreground">{metric.label}</TableCell>
              {countries.map((c) => {
                const score = c.scores[metric.key];
                return (
                  <TableCell key={c.id} className="text-center">
                    <div className="flex flex-col items-center gap-1">
                      <span className={`text-lg font-black ${
                        score >= 85 ? "text-green-500" : score >= 70 ? "text-green-africa" : score >= 50 ? "text-gold" : "text-red-500"
                      }`}>
                        {score}
                      </span>
                      <div className="w-full h-1 bg-muted/30 rounded-full overflow-hidden max-w-[60px]">
                        <div
                          className={`h-full ${
                            score >= 85 ? "bg-green-500" : score >= 70 ? "bg-green-africa" : score >= 50 ? "bg-gold" : "bg-red-500"
                          }`}
                          style={{ width: `${score}%` }}
                        />
                      </div>
                    </div>
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
