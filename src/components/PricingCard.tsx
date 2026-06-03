import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { PricingPlan } from "@/types";

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <Card className={cn(
      "bg-card border-border flex flex-col h-full relative overflow-hidden transition-all hover:scale-[1.02]",
      plan.recommended && "border-gold border-2 shadow-[0_0_20px_rgba(255,191,0,0.1)]"
    )}>
      {plan.recommended && (
        <div className="absolute top-0 right-0 bg-gold text-black text-[10px] font-black uppercase px-3 py-1 rounded-bl-lg">
          Recommended
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl font-black uppercase tracking-tighter">{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-6">
          <span className="text-4xl font-black text-gold">{plan.price}</span>
          <span className="text-muted-foreground text-sm ml-2">{plan.period}</span>
        </div>
        <ul className="space-y-3">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <Check className="h-4 w-4 text-green-africa mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className={cn(
          "w-full font-bold uppercase tracking-widest text-xs h-12",
          plan.recommended ? "bg-gold hover:bg-gold/90 text-black" : "bg-muted hover:bg-muted/80 text-foreground"
        )}>
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}
