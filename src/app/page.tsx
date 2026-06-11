import { LayoutDashboard } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { StatCard } from "@/components/StatCard";
import { TrendChart } from "@/components/TrendChart";
import { ConfidenceBar } from "@/components/ConfidenceBar";
import { RecentChanges } from "@/components/RecentChanges";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  kpiData,
  trendData,
  confidenceIndicators,
  recentChanges,
} from "@/data/trends";

export default function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Overview of your behavioral metrics, trends, and recent changes."
        icon={LayoutDashboard}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi, index) => (
          <StatCard key={kpi.id} kpi={kpi} index={index} />
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TrendChart data={trendData} />
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">
              Confidence Indicators
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {confidenceIndicators.map((indicator) => (
              <ConfidenceBar
                key={indicator.id}
                value={indicator.value}
                label={indicator.label}
              />
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <RecentChanges changes={recentChanges} />
      </div>
    </div>
  );
}
