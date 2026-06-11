import type { TimelineMonth } from "@/types";

export const timelineMonths: TimelineMonth[] = [
  {
    id: "january",
    month: "January",
    sleepScore: 68,
    productivityScore: 65,
    screenTime: 7.2,
    summary:
      "January showed baseline behavioral patterns with elevated screen time and inconsistent sleep. Productivity remained below target as the new year routine was still forming.",
    keyDrivers: [
      "Holiday recovery period extended into early January",
      "Late-night screen usage averaging 7.2 hours daily",
      "Irregular sleep schedule with 45+ min bedtime variance",
      "Limited deep work blocks due to meeting backlog",
    ],
    confidenceScore: 72,
    behavioralChanges: [
      "Screen time peaked at 7.2 hrs/day during first two weeks",
      "Sleep quality dipped below 70% for 12 consecutive days",
      "Productivity plateaued around 65% with no clear weekly pattern",
      "Focus sessions averaged only 32 minutes before interruption",
    ],
  },
  {
    id: "february",
    month: "February",
    sleepScore: 74,
    productivityScore: 71,
    screenTime: 6.5,
    summary:
      "February marked gradual improvement as intentional routines took hold. Sleep consistency improved and productivity began climbing, though mid-month focus dips persisted.",
    keyDrivers: [
      "Introduction of morning deep work ritual",
      "Bedtime routine established around 10:30 PM",
      "Screen time reduced by 10% from January baseline",
      "Recurring Tuesday/Wednesday meeting clusters",
    ],
    confidenceScore: 78,
    behavioralChanges: [
      "Morning productivity sessions increased to 3.5 days/week",
      "Sleep score improved 6 points from January average",
      "Screen time dropped below 7 hours for first sustained period",
      "Mid-week focus dips emerged as a recurring pattern",
    ],
  },
  {
    id: "march",
    month: "March",
    sleepScore: 81,
    productivityScore: 78,
    screenTime: 5.4,
    summary:
      "March delivered the strongest behavioral performance to date. Sleep quality reached new highs, screen time fell below 6 hours, and productivity approached the 80% target threshold.",
    keyDrivers: [
      "9 PM screen cutoff implemented and maintained at 76% adherence",
      "Sleep variance narrowed to under 25 minutes",
      "Deep work blocks extended to 47 minutes on average",
      "Exercise routine added 3–4 days per week",
    ],
    confidenceScore: 87,
    behavioralChanges: [
      "Screen time reduced 18% after evening cutoff policy",
      "Sleep quality crossed 80% for the first time",
      "Productivity gained 7 points over February",
      "Afternoon energy improved on active days by 20%",
    ],
  },
  {
    id: "april",
    month: "April",
    sleepScore: 79,
    productivityScore: 76,
    screenTime: 5.8,
    summary:
      "April showed slight regression from March peaks as seasonal schedule shifts and project deadlines increased cognitive load. Core habits remained intact but optimization plateaued.",
    keyDrivers: [
      "Increased project deadline pressure in final two weeks",
      "Weekend screen time rebounded to 7+ hours",
      "Meeting density rose 22% compared to March",
      "Exercise frequency dropped to 2.5 days/week",
    ],
    confidenceScore: 81,
    behavioralChanges: [
      "Weekend recovery patterns weakened compared to March",
      "Screen time ticked up 0.4 hrs from March low",
      "Productivity held above 75% despite increased load",
      "Sleep quality remained stable near 79% baseline",
    ],
  },
];
