"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Target, RefreshCw } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ConfidenceBar } from "@/components/ConfidenceBar";
import type { TimelineMonth } from "@/types";

interface TimelinePanelProps {
  month: TimelineMonth | null;
}

export function TimelinePanel({ month }: TimelinePanelProps) {
  return (
    <AnimatePresence mode="wait">
      {month ? (
        <motion.div
          key={month.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Sparkles className="h-5 w-5 text-primary" />
                {month.month} Narrative
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section>
                <h4 className="text-sm font-semibold text-foreground mb-2">Summary</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {month.summary}
                </p>
              </section>

              <section>
                <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                  <Target className="h-4 w-4 text-primary" />
                  Key Drivers
                </h4>
                <ul className="space-y-2">
                  {month.keyDrivers.map((driver) => (
                    <li
                      key={driver}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {driver}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <ConfidenceBar
                  value={month.confidenceScore}
                  label="Narrative Confidence"
                />
              </section>

              <section>
                <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                  <RefreshCw className="h-4 w-4 text-success" />
                  Behavioral Changes
                </h4>
                <ul className="space-y-2">
                  {month.behavioralChanges.map((change) => (
                    <li
                      key={change}
                      className="rounded-lg bg-surface-elevated px-4 py-3 text-sm text-muted-foreground"
                    >
                      {change}
                    </li>
                  ))}
                </ul>
              </section>
            </CardContent>
          </Card>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex h-full min-h-[400px] items-center justify-center rounded-xl border border-dashed border-border bg-surface/50"
        >
          <p className="text-sm text-muted-foreground">
            Select a month to view its behavioral narrative
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
