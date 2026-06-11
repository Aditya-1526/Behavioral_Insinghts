"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { BehavioralChange } from "@/types";

interface RecentChangesProps {
  changes: BehavioralChange[];
}

const impactConfig = {
  positive: { variant: "success" as const, icon: TrendingUp },
  negative: { variant: "warning" as const, icon: TrendingDown },
  neutral: { variant: "outline" as const, icon: Minus },
};

export function RecentChanges({ changes }: RecentChangesProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">
          Recent Behavioral Changes
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {changes.map((change, index) => {
          const config = impactConfig[change.impact];
          const ImpactIcon = config.icon;

          return (
            <motion.div
              key={change.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className="rounded-lg border border-border bg-surface-elevated/50 p-4 transition-colors hover:border-primary/20"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <ImpactIcon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-sm font-semibold text-foreground">
                        {change.title}
                      </h4>
                      <Badge variant={config.variant}>{change.category}</Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {change.description}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground/70">
                      {change.date}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </CardContent>
    </Card>
  );
}
