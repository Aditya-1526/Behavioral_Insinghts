"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ConfidenceBar } from "@/components/ConfidenceBar";
import type { Insight } from "@/types";
import { cn } from "@/lib/utils";

interface InsightModalProps {
  insight: Insight | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function InsightModal({ insight, open, onOpenChange }: InsightModalProps) {
  if (!insight) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Badge variant="default">{insight.category}</Badge>
          </div>
          <DialogTitle className="text-xl pt-2">{insight.title}</DialogTitle>
          <DialogDescription className="text-base leading-relaxed">
            {insight.observation}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-2">
          <section>
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Confidence Visualization
            </h4>
            <ConfidenceBar value={insight.confidenceScore} label="Model Confidence" />
            <p className="mt-2 text-xs text-muted-foreground">
              Based on data coverage, signal clarity, and cross-metric alignment.
            </p>
          </section>

          <section>
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Supporting Evidence
            </h4>
            <ul className="space-y-3">
              {insight.supportingEvidence.map((evidence) => {
                const TrendIcon =
                  evidence.trend === "up"
                    ? ArrowUp
                    : evidence.trend === "down"
                      ? ArrowDown
                      : Minus;
                const trendColor =
                  evidence.trend === "up"
                    ? "text-success"
                    : evidence.trend === "down"
                      ? "text-warning"
                      : "text-muted-foreground";

                return (
                  <li
                    key={evidence.label}
                    className="flex items-center justify-between rounded-lg bg-surface-elevated px-4 py-3"
                  >
                    <span className="text-sm text-muted-foreground">
                      {evidence.label}
                    </span>
                    <span className="flex items-center gap-2 text-sm font-semibold">
                      {evidence.value}
                      {evidence.trend && (
                        <TrendIcon className={cn("h-3.5 w-3.5", trendColor)} />
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>

          <section>
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Supporting Chart
            </h4>
            <div className="h-[200px] w-full rounded-lg bg-surface-elevated p-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={insight.chartData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                  <XAxis
                    dataKey="label"
                    tick={{ fill: "#94A3B8", fontSize: 11 }}
                    axisLine={{ stroke: "#334155" }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#94A3B8", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1E293B",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                      color: "#F8FAFC",
                    }}
                  />
                  <Bar dataKey="value" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section>
            <h4 className="text-sm font-semibold text-foreground mb-2">
              Data Limitations
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed rounded-lg bg-warning/10 border border-warning/20 px-4 py-3">
              {insight.dataLimitations}
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              <span className="font-medium text-foreground">Missing data: </span>
              {insight.missingDataExplanation}
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
