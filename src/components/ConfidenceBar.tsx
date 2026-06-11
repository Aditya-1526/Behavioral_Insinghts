"use client";

import { cn, formatPercent } from "@/lib/utils";

interface ConfidenceBarProps {
  value: number;
  label?: string;
  showValue?: boolean;
  size?: "sm" | "md";
  className?: string;
}

function getConfidenceColor(value: number): string {
  if (value >= 85) return "bg-success";
  if (value >= 70) return "bg-primary";
  return "bg-warning";
}

export function ConfidenceBar({
  value,
  label,
  showValue = true,
  size = "md",
  className,
}: ConfidenceBarProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between text-xs">
          {label && <span className="text-muted-foreground">{label}</span>}
          {showValue && (
            <span className="font-medium text-foreground">{formatPercent(value)}</span>
          )}
        </div>
      )}
      <div
        className={cn(
          "w-full overflow-hidden rounded-full bg-surface-elevated",
          size === "sm" ? "h-1.5" : "h-2"
        )}
      >
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500 ease-out",
            getConfidenceColor(value)
          )}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
