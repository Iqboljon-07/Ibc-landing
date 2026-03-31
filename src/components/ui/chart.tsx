"use client";

import * as React from "react";
import {
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

/* ---------------- TYPES ---------------- */

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode;
    color?: string;
  }
>;

/* ---------------- CONTEXT ---------------- */

const ChartContext = React.createContext<ChartConfig | null>(null);

const useChart = () => {
  const ctx = React.useContext(ChartContext);
  if (!ctx) throw new Error("Chart must be inside ChartContainer");
  return ctx;
};

/* ---------------- CHART CONTAINER ---------------- */

export function ChartContainer({
  config,
  children,
  height = 300,
  className,
}: {
  config: ChartConfig;
  children: React.ReactNode;
  height?: number;
  className?: string;
}) {
  return (
    <ChartContext.Provider value={config}>
      <div className={className}>
        <ResponsiveContainer width="100%" height={height}>
          {children as any}
        </ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

/* ---------------- TOOLTIP ---------------- */

export const ChartTooltipContent = ({
  active,
  payload,
  label,
}: any) => {
  const config = useChart();

  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-md border bg-background p-2 text-xs shadow-md">
      {label && (
        <div className="mb-2 font-medium text-foreground">
          {label}
        </div>
      )}

      <div className="space-y-1">
        {payload.map((item: any, index: number) => {
          const cfg = config[item.dataKey];

          return (
            <div
              key={index}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-2 w-2 rounded"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-muted-foreground">
                  {cfg?.label || item.dataKey}
                </span>
              </div>

              <span className="font-mono font-medium">
                {item.value?.toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ---------------- LEGEND ---------------- */

export const ChartLegendContent = ({ payload }: any) => {
  const config = useChart();

  if (!payload?.length) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
      {payload.map((item: any, index: number) => {
        const cfg = config[item.dataKey];

        return (
          <div key={index} className="flex items-center gap-2">
            <div
              className="h-2 w-2 rounded"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-muted-foreground">
              {cfg?.label || item.value}
            </span>
          </div>
        );
      })}
    </div>
  );
};

/* ---------------- EXPORTS ---------------- */

export {
  Tooltip as ChartTooltip,
  Legend as ChartLegend,
};