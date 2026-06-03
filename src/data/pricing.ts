import { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "explorer",
    name: "Explorer",
    price: "Free",
    period: "forever",
    description: "Basic access for those starting their journey.",
    features: [
      "Access to basic country stats",
      "Limited AI Advisor queries",
      "Community forum access",
      "Standard support",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: "$29",
    period: "per month",
    description: "In-depth intelligence for serious relocators.",
    features: [
      "Full intelligence reports",
      "Unlimited AI Advisor queries",
      "Comparison tools (up to 4 countries)",
      "Priority support",
      "Exclusive diaspora webinars",
    ],
    recommended: true,
  },
  {
    id: "investor",
    name: "Investor",
    price: "$99",
    period: "per month",
    description: "Premium data for high-stakes decisions.",
    features: [
      "Real-time investment alerts",
      "1-on-1 consultation session",
      "Property market deep-dives",
      "VIP networking events",
      "Custom research requests",
    ],
  },
];
