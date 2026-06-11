import type { BehavioralChange, KPI, TrendDataPoint } from "@/types";

export const kpiData: KPI[] = [
  {
    id: "productivity",
    label: "Productivity Score",
    value: 78,
    unit: "%",
    change: 4.2,
    direction: "up",
    confidence: 87,
  },
  {
    id: "focus",
    label: "Focus Consistency",
    value: 72,
    unit: "%",
    change: -2.1,
    direction: "down",
    confidence: 82,
  },
  {
    id: "sleep",
    label: "Sleep Quality",
    value: 81,
    unit: "%",
    change: 6.5,
    direction: "up",
    confidence: 91,
  },
  {
    id: "screen",
    label: "Screen Time",
    value: 5.4,
    unit: "hrs",
    change: -8.3,
    direction: "up",
    confidence: 79,
  },
];

export const trendData: TrendDataPoint[] = [
  { date: "Week 1", productivity: 68, focus: 70, sleep: 72, screenTime: 6.8 },
  { date: "Week 2", productivity: 71, focus: 68, sleep: 74, screenTime: 6.2 },
  { date: "Week 3", productivity: 74, focus: 71, sleep: 78, screenTime: 5.9 },
  { date: "Week 4", productivity: 76, focus: 73, sleep: 80, screenTime: 5.6 },
  { date: "Week 5", productivity: 75, focus: 71, sleep: 79, screenTime: 5.5 },
  { date: "Week 6", productivity: 78, focus: 72, sleep: 81, screenTime: 5.4 },
];

export const confidenceIndicators = [
  { id: "data-coverage", label: "Data Coverage", value: 88 },
  { id: "signal-clarity", label: "Signal Clarity", value: 76 },
  { id: "pattern-stability", label: "Pattern Stability", value: 84 },
  { id: "cross-metric-alignment", label: "Cross-Metric Alignment", value: 71 },
];

export const recentChanges: BehavioralChange[] = [
  {
    id: "change-1",
    title: "Evening screen reduction",
    description:
      "Screen time dropped 18% after implementing a 9 PM device cutoff on weekdays.",
    date: "Mar 28, 2026",
    category: "Screen Time",
    impact: "positive",
  },
  {
    id: "change-2",
    title: "Mid-week focus dip",
    description:
      "Focus consistency declined on Tuesdays and Wednesdays, correlating with longer meeting blocks.",
    date: "Mar 22, 2026",
    category: "Focus",
    impact: "negative",
  },
  {
    id: "change-3",
    title: "Sleep routine stabilization",
    description:
      "Bedtime variance narrowed to under 25 minutes, improving sleep quality scores.",
    date: "Mar 15, 2026",
    category: "Sleep",
    impact: "positive",
  },
  {
    id: "change-4",
    title: "Morning productivity surge",
    description:
      "Deep work sessions between 8–10 AM increased productivity output by 12%.",
    date: "Mar 10, 2026",
    category: "Productivity",
    impact: "positive",
  },
];
