"use client";

import { useState } from "react";
import { Clock } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { TimelineItem } from "@/components/TimelineItem";
import { TimelinePanel } from "@/components/TimelinePanel";
import { timelineMonths } from "@/data/timeline";
import type { TimelineMonth } from "@/types";

export default function TimelinePage() {
  const [selectedMonth, setSelectedMonth] = useState<TimelineMonth | null>(
    timelineMonths[2]
  );

  return (
    <div>
      <PageHeader
        title="Narrative Timeline"
        description="Explore monthly behavioral narratives, key drivers, and confidence scores."
        icon={Clock}
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="space-y-3 lg:col-span-2">
          {timelineMonths.map((month, index) => (
            <TimelineItem
              key={month.id}
              month={month}
              isSelected={selectedMonth?.id === month.id}
              index={index}
              onSelect={setSelectedMonth}
            />
          ))}
        </div>

        <div className="lg:col-span-3">
          <TimelinePanel month={selectedMonth} />
        </div>
      </div>
    </div>
  );
}
