"use client";

import { useState } from "react";
import { Lightbulb } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { InsightCard } from "@/components/InsightCard";
import { InsightModal } from "@/components/InsightModal";
import { insights } from "@/data/insights";
import type { Insight } from "@/types";

export default function InsightsPage() {
  const [selectedInsight, setSelectedInsight] = useState<Insight | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSelect = (insight: Insight) => {
    setSelectedInsight(insight);
    setModalOpen(true);
  };

  return (
    <div>
      <PageHeader
        title="Insight Explorer"
        description="Browse behavioral insights with confidence scores, evidence, and data limitations."
        icon={Lightbulb}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {insights.map((insight, index) => (
          <InsightCard
            key={insight.id}
            insight={insight}
            index={index}
            onSelect={handleSelect}
          />
        ))}
      </div>

      <InsightModal
        insight={selectedInsight}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
}
