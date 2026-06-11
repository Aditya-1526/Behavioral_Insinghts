export type TrendDirection = "up" | "down" | "stable";

export type ImpactLevel = "positive" | "negative" | "neutral";

export interface KPI {
  id: string;
  label: string;
  value: number;
  unit?: string;
  change: number;
  direction: TrendDirection;
  confidence: number;
}

export interface TrendDataPoint {
  date: string;
  productivity: number;
  focus: number;
  sleep: number;
  screenTime: number;
}

export interface BehavioralChange {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  impact: ImpactLevel;
}

export interface EvidenceItem {
  label: string;
  value: string;
  trend?: TrendDirection;
}

export interface InsightChartPoint {
  label: string;
  value: number;
}

export interface Insight {
  id: string;
  title: string;
  observation: string;
  confidenceScore: number;
  supportingEvidence: EvidenceItem[];
  missingDataExplanation: string;
  category: string;
  chartData: InsightChartPoint[];
  dataLimitations: string;
}

export interface TimelineMonth {
  id: string;
  month: string;
  sleepScore: number;
  productivityScore: number;
  screenTime: number;
  summary: string;
  keyDrivers: string[];
  confidenceScore: number;
  behavioralChanges: string[];
}
