import { AIChatWindow } from "@/components/AIChatWindow";
import { Sparkles, HelpCircle } from "lucide-react";

export default function AIAdvisorPage() {
  const suggestedQuestions = [
    "Best country for retirement?",
    "Compare Ghana and Rwanda.",
    "Best country for remote workers?",
    "Cheapest safe country in Africa?",
    "Easiest residency for Nigerians?",
    "Rising tech hubs in East Africa?",
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h1 className="text-3xl font-black tracking-tighter mb-4 uppercase leading-none">
              AI <span className="text-gold italic">ADVISOR.</span>
            </h1>
            <p className="text-sm text-muted-foreground">
              Your 24/7 intelligence assistant for relocation, investment and lifestyle queries.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4 text-gold">
              <Sparkles className="h-4 w-4" />
              <h3 className="text-xs font-black uppercase tracking-widest">Suggested Queries</h3>
            </div>
            <div className="flex flex-col gap-2">
              {suggestedQuestions.map((q, i) => (
                <button
                  key={i}
                  className="text-left text-xs p-3 rounded border border-border hover:border-gold hover:bg-gold/5 transition-all text-muted-foreground hover:text-white"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 bg-muted/20 border border-border rounded-lg">
            <div className="flex items-center gap-2 mb-2 text-muted-foreground">
              <HelpCircle className="h-4 w-4" />
              <h3 className="text-[10px] font-black uppercase tracking-widest">About M2A Advisor</h3>
            </div>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Our AI is trained on 10,000+ data points and official government publications to provide accurate, up-to-date relocation intelligence.
            </p>
          </div>
        </div>

        <div className="lg:col-span-3">
          <AIChatWindow />
        </div>
      </div>
    </div>
  );
}
