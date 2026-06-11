"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  Minus,
  Brain,
  Monitor,
  Moon,
  Target,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { ConfidenceBar } from "@/components/ConfidenceBar";
import type { KPI } from "@/types";
import { formatChange } from "@/lib/utils";

const kpiIcons = {
  productivity: Target,
  focus: Brain,
  sleep: Moon,
  screen: Monitor,
};

interface StatCardProps {
  kpi: KPI;
  index?: number;
}

export function StatCard({ kpi, index = 0 }: StatCardProps) {
  const Icon = kpiIcons[kpi.id as keyof typeof kpiIcons] ?? Target;
  const TrendIcon =
    kpi.direction === "up" ? ArrowUp : kpi.direction === "down" ? ArrowDown : Minus;

  const trendColor =
    kpi.id === "screen"
      ? kpi.direction === "up"
        ? "text-success"
        : "text-warning"
      : kpi.direction === "up"
        ? "text-success"
        : kpi.direction === "down"
          ? "text-warning"
          : "text-muted-foreground";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Card className="group transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
        <CardContent className="p-5">
          <div className="flex items-start justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div className={`flex items-center gap-1 text-sm font-medium ${trendColor}`}>
              <TrendIcon className="h-3.5 w-3.5" />
              {formatChange(kpi.change)}
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm text-muted-foreground">{kpi.label}</p>
            <p className="mt-1 text-3xl font-bold tracking-tight">
              {kpi.value}
              {kpi.unit && (
                <span className="ml-1 text-lg font-medium text-muted-foreground">
                  {kpi.unit}
                </span>
              )}
            </p>
          </div>

          <div className="mt-4">
            <ConfidenceBar value={kpi.confidence} label="Confidence" size="sm" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
