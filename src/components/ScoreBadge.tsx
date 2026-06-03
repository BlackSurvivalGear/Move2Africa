import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ScoreBadgeProps {
  score: number;
  label: string;
  className?: string;
}

export function ScoreBadge({ score, label, className }: ScoreBadgeProps) {
  const getScoreColor = (s: number) => {
    if (s >= 85) return "bg-green-600 text-white";
    if (s >= 70) return "bg-green-africa text-white";
    if (s >= 50) return "bg-gold text-black";
    return "bg-red-600 text-white";
  };

  return (
    <div className={cn("flex flex-col items-center gap-1", className)}>
      <Badge className={cn("font-bold text-xs h-8 w-8 flex items-center justify-center rounded-full p-0", getScoreColor(score))}>
        {score}
      </Badge>
      <span className="text-[10px] uppercase tracking-tighter text-muted-foreground font-semibold">{label}</span>
    </div>
  );
}
