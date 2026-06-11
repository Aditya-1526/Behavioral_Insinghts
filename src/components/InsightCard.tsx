"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUp, ArrowDown, Minus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ConfidenceBar } from "@/components/ConfidenceBar";
import type { Insight } from "@/types";

interface InsightCardProps {
  insight: Insight;
  index?: number;
  onSelect: (insight: Insight) => void;
}

export function InsightCard({ insight, index = 0, onSelect }: InsightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Card
        className="group cursor-pointer transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
        onClick={() => onSelect(insight)}
      >
        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-3">
            <Badge variant="default">{insight.category}</Badge>
            <ArrowRight
              className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
            />
          </div>

          <h3 className="mt-3 text-base font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
            {insight.title}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {insight.observation}
          </p>

          <div className="mt-4">
            <ConfidenceBar value={insight.confidenceScore} label="Confidence" size="sm" />
          </div>

          <div className="mt-4 space-y-2">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Supporting Evidence
            </p>
            <ul className="space-y-1.5">
              {insight.supportingEvidence.slice(0, 2).map((evidence) => {
                const TrendIcon =
                  evidence.trend === "up"
                    ? ArrowUp
                    : evidence.trend === "down"
                      ? ArrowDown
                      : Minus;
                return (
                  <li
                    key={evidence.label}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-muted-foreground">{evidence.label}</span>
                    <span className="flex items-center gap-1 font-medium">
                      {evidence.value}
                      {evidence.trend && (
                        <TrendIcon className="h-3 w-3 text-muted-foreground" />
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <p className="mt-3 text-xs text-muted-foreground/80 line-clamp-1">
            Missing data: {insight.missingDataExplanation}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
