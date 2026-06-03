export interface CountryScores {
  safety: number;
  cost: number;
  business: number;
  remoteWork: number;
  infrastructure: number;
  internet: number;
  healthcare: number;
  education: number;
  diasporaFriendliness: number;
}

export interface Country {
  id: string;
  name: string;
  flag: string;
  capital: string;
  region: string;
  population: string;
  currency: string;
  scores: CountryScores;
  overview: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  recommended?: boolean;
}
