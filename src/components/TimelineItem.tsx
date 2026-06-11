"use client";

import { motion } from "framer-motion";
import { Moon, TrendingUp, Monitor } from "lucide-react";

import { cn } from "@/lib/utils";
import type { TimelineMonth } from "@/types";

interface TimelineItemProps {
  month: TimelineMonth;
  isSelected: boolean;
  index: number;
  onSelect: (month: TimelineMonth) => void;
}

export function TimelineItem({
  month,
  isSelected,
  index,
  onSelect,
}: TimelineItemProps) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      onClick={() => onSelect(month)}
      className={cn(
        "w-full rounded-xl border p-4 text-left transition-all duration-300",
        isSelected
          ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
          : "border-border bg-surface hover:border-primary/30 hover:bg-surface-elevated"
      )}
    >
      <div className="flex items-center justify-between">
        <h3
          className={cn(
            "text-lg font-semibold",
            isSelected ? "text-primary" : "text-foreground"
          )}
        >
          {month.month}
        </h3>
        {isSelected && (
          <motion.div
            layoutId="timeline-indicator"
            className="h-2 w-2 rounded-full bg-primary"
          />
        )}
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="flex items-center gap-1.5">
          <Moon className="h-3.5 w-3.5 text-blue-400" />
          <div>
            <p className="text-xs text-muted-foreground">Sleep</p>
            <p className="text-sm font-semibold">{month.sleepScore}%</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <TrendingUp className="h-3.5 w-3.5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Productivity</p>
            <p className="text-sm font-semibold">{month.productivityScore}%</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <Monitor className="h-3.5 w-3.5 text-warning" />
          <div>
            <p className="text-xs text-muted-foreground">Screen</p>
            <p className="text-sm font-semibold">{month.screenTime}h</p>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
