import type { Insight } from "@/types";

export const insights: Insight[] = [
  {
    id: "insight-1",
    title: "Morning deep work drives productivity gains",
    observation:
      "Productivity scores are strongest when deep work sessions occur before 10 AM, with a 12% uplift compared to afternoon sessions.",
    confidenceScore: 89,
    category: "Productivity",
    supportingEvidence: [
      { label: "Morning session frequency", value: "4.2 days/week", trend: "up" },
      { label: "Avg. focus duration", value: "47 min", trend: "up" },
      { label: "Task completion rate", value: "82%", trend: "up" },
      { label: "Afternoon comparison", value: "+12% morning advantage", trend: "up" },
    ],
    missingDataExplanation:
      "Work context labels are inferred from calendar blocks; actual task types are not captured.",
    chartData: [
      { label: "Mon", value: 72 },
      { label: "Tue", value: 68 },
      { label: "Wed", value: 65 },
      { label: "Thu", value: 74 },
      { label: "Fri", value: 81 },
      { label: "Sat", value: 58 },
      { label: "Sun", value: 55 },
    ],
    dataLimitations:
      "Calendar integration lacks granular task categorization. Weekend productivity patterns have lower sample density.",
  },
  {
    id: "insight-2",
    title: "Sleep consistency predicts next-day focus",
    observation:
      "Nights with less than 30 minutes of bedtime variance correlate with 15% higher focus consistency the following day.",
    confidenceScore: 92,
    category: "Sleep",
    supportingEvidence: [
      { label: "Bedtime variance (avg)", value: "22 min", trend: "down" },
      { label: "Next-day focus uplift", value: "+15%", trend: "up" },
      { label: "Sleep quality score", value: "81%", trend: "up" },
      { label: "Correlation strength", value: "r = 0.78", trend: "stable" },
    ],
    missingDataExplanation:
      "Sleep stage data is estimated from movement and heart rate, not clinical-grade monitoring.",
    chartData: [
      { label: "Wk 1", value: 68 },
      { label: "Wk 2", value: 71 },
      { label: "Wk 3", value: 74 },
      { label: "Wk 4", value: 78 },
      { label: "Wk 5", value: 79 },
      { label: "Wk 6", value: 81 },
    ],
    dataLimitations:
      "Wearable-derived sleep metrics may misclassify restful wakefulness. No caffeine intake data available.",
  },
  {
    id: "insight-3",
    title: "Meeting density erodes mid-week focus",
    observation:
      "Focus consistency drops 18% on days with more than 3 hours of scheduled meetings, peaking on Tuesdays and Wednesdays.",
    confidenceScore: 78,
    category: "Focus",
    supportingEvidence: [
      { label: "Tue/Wed focus avg", value: "64%", trend: "down" },
      { label: "Meeting hours (Tue/Wed)", value: "3.4 hrs avg", trend: "up" },
      { label: "Context switches/day", value: "28", trend: "up" },
      { label: "Recovery time needed", value: "45 min avg", trend: "stable" },
    ],
    missingDataExplanation:
      "Meeting quality and engagement levels are not tracked; duration alone is used as a proxy.",
    chartData: [
      { label: "Mon", value: 74 },
      { label: "Tue", value: 62 },
      { label: "Wed", value: 61 },
      { label: "Thu", value: 70 },
      { label: "Fri", value: 73 },
    ],
    dataLimitations:
      "Calendar data does not distinguish virtual vs. in-person meetings or include ad-hoc interruptions.",
  },
  {
    id: "insight-4",
    title: "Evening cutoff improves sleep onset",
    observation:
      "Implementing a 9 PM screen cutoff reduced average time-to-sleep by 22 minutes and improved sleep quality by 8%.",
    confidenceScore: 85,
    category: "Screen Time",
    supportingEvidence: [
      { label: "Post-cutoff screen time", value: "-18%", trend: "down" },
      { label: "Time to sleep", value: "22 min faster", trend: "down" },
      { label: "Sleep quality change", value: "+8%", trend: "up" },
      { label: "Adherence rate", value: "76%", trend: "up" },
    ],
    missingDataExplanation:
      "Screen content type (work vs. leisure) is not differentiated in usage tracking.",
    chartData: [
      { label: "Pre", value: 6.8 },
      { label: "Wk 1", value: 6.2 },
      { label: "Wk 2", value: 5.9 },
      { label: "Wk 3", value: 5.6 },
      { label: "Wk 4", value: 5.4 },
    ],
    dataLimitations:
      "TV and secondary device usage may be underreported. Cutoff adherence is self-reported for partial weeks.",
  },
  {
    id: "insight-5",
    title: "Weekend recovery patterns diverge from weekdays",
    observation:
      "Weekend screen time remains elevated while sleep quality plateaus, suggesting incomplete behavioral recovery.",
    confidenceScore: 71,
    category: "Behavior",
    supportingEvidence: [
      { label: "Weekend screen time", value: "7.2 hrs avg", trend: "stable" },
      { label: "Weekday screen time", value: "5.1 hrs avg", trend: "down" },
      { label: "Weekend sleep quality", value: "78%", trend: "stable" },
      { label: "Recovery gap", value: "14% below target", trend: "down" },
    ],
    missingDataExplanation:
      "Social and outdoor activity data is limited, preventing full context on weekend behavior.",
    chartData: [
      { label: "Mon", value: 5.2 },
      { label: "Tue", value: 5.0 },
      { label: "Wed", value: 5.1 },
      { label: "Thu", value: 5.3 },
      { label: "Fri", value: 5.8 },
      { label: "Sat", value: 7.4 },
      { label: "Sun", value: 7.0 },
    ],
    dataLimitations:
      "Small weekend sample size (8 weekends) reduces statistical confidence. Activity context is inferred.",
  },
  {
    id: "insight-6",
    title: "Exercise correlates with afternoon energy",
    observation:
      "Days with 30+ minutes of physical activity show 20% higher afternoon productivity compared to sedentary days.",
    confidenceScore: 74,
    category: "Productivity",
    supportingEvidence: [
      { label: "Active days/week", value: "3.5 avg", trend: "up" },
      { label: "Afternoon productivity uplift", value: "+20%", trend: "up" },
      { label: "Activity duration", value: "38 min avg", trend: "up" },
      { label: "Energy self-report", value: "7.2/10", trend: "up" },
    ],
    missingDataExplanation:
      "Activity intensity is estimated from step count and heart rate zones without sport-specific tracking.",
    chartData: [
      { label: "No activity", value: 58 },
      { label: "Light", value: 65 },
      { label: "Moderate", value: 74 },
      { label: "High", value: 82 },
    ],
    dataLimitations:
      "Self-reported energy levels introduce subjective bias. Weather and commute data not factored in.",
  },
];
