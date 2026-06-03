import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const messages = [
  { role: "ai", content: "Hello! I am your Africa Relocation Advisor. How can I help you explore the continent today?" },
  { role: "user", content: "What are the best countries for remote workers in Africa?" },
  { role: "ai", content: "Based on internet reliability, cost of living, and safety, the top choices for remote workers are:\n\n1. **Kenya** - High-speed internet and vibrant tech scene.\n2. **South Africa** - Excellent infrastructure and lifestyle.\n3. **Rwanda** - Exceptional safety and growing digital economy.\n4. **Ghana** - Very diaspora-friendly and culturally vibrant." },
];

export function AIChatWindow() {
  return (
    <div className="flex flex-col h-[600px] border border-border rounded-lg bg-card/30 backdrop-blur-sm">
      <div className="p-4 border-b border-border bg-muted/20">
        <h3 className="font-bold text-sm uppercase tracking-widest text-gold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-africa"></span>
          AI Advisor Live
        </h3>
      </div>

      <ScrollArea className="flex-grow p-6">
        <div className="space-y-6">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`flex gap-3 max-w-[80%] ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                <Avatar className={`h-8 w-8 border ${m.role === "ai" ? "border-gold" : "border-muted"}`}>
                  <AvatarFallback className={m.role === "ai" ? "bg-gold text-black" : "bg-muted"}>
                    {m.role === "ai" ? "AI" : "US"}
                  </AvatarFallback>
                </Avatar>
                <div className={`p-4 rounded-lg text-sm leading-relaxed ${
                  m.role === "ai"
                  ? "bg-muted/50 border border-border"
                  : "bg-gold text-black font-medium"
                }`}>
                  {m.role === "ai" ? (
                    <div className="whitespace-pre-wrap">{m.content}</div>
                  ) : (
                    m.content
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Input placeholder="Ask about relocation, investment, or lifestyle..." className="bg-muted/20 border-border" />
          <Button className="bg-gold hover:bg-gold/90 text-black">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
