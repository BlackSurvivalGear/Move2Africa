import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  sublabel?: string;
  className?: string;
}

export function StatCard({ label, value, sublabel, className }: StatCardProps) {
  return (
    <Card className={cn("bg-card border-border overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex flex-col gap-1">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">{label}</p>
          <h3 className="text-3xl font-black text-gold">{value}</h3>
          {sublabel && <p className="text-xs text-muted-foreground mt-1">{sublabel}</p>}
        </div>
      </CardContent>
    </Card>
  );
}
