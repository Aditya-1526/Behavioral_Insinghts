"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { TrendDataPoint } from "@/types";

interface TrendChartProps {
  data: TrendDataPoint[];
  title?: string;
}

const chartColors = {
  productivity: "#8B5CF6",
  focus: "#22C55E",
  sleep: "#3B82F6",
  screenTime: "#F59E0B",
};

export function TrendChart({ data, title = "Behavioral Trends" }: TrendChartProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="productivityGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartColors.productivity} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={chartColors.productivity} stopOpacity={0} />
                </linearGradient>
                <linearGradient id="focusGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartColors.focus} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={chartColors.focus} stopOpacity={0} />
                </linearGradient>
                <linearGradient id="sleepGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartColors.sleep} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={chartColors.sleep} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis
                dataKey="date"
                tick={{ fill: "#94A3B8", fontSize: 12 }}
                axisLine={{ stroke: "#334155" }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "#94A3B8", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                domain={[50, 100]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1E293B",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                  color: "#F8FAFC",
                }}
              />
              <Legend
                wrapperStyle={{ fontSize: "12px", color: "#94A3B8" }}
              />
              <Area
                type="monotone"
                dataKey="productivity"
                name="Productivity"
                stroke={chartColors.productivity}
                fill="url(#productivityGrad)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="focus"
                name="Focus"
                stroke={chartColors.focus}
                fill="url(#focusGrad)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="sleep"
                name="Sleep"
                stroke={chartColors.sleep}
                fill="url(#sleepGrad)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
