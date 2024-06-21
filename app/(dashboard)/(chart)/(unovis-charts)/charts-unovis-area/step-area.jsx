"use client";

import { useCallback, useMemo, useState } from "react";
import {
  VisXYContainer,
  VisArea,
  VisAxis,
  VisBulletLegend,
} from "@unovis/react";
import { CurveType } from "@unovis/ts";
import { useTheme } from "next-themes";
import { useThemeStore } from "@/store";
import { themes } from "@/config/thems";
import { stepData } from "./data";

const candidates = ["Hillary Clinton", "Donald Trump"].map((c) => ({
  name: c,
  color: "var(--vis-color-grey)",
}));

const StepAreaChart = () => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const [curr, setCurr] = useState(candidates[0].name);
  const items = useMemo(
    () => candidates.map((c) => ({ ...c, inactive: curr !== c.name })),
    [curr]
  );

  return (
    <div className="step-area-chart">
      <div className="panel">
        <VisBulletLegend
          items={Object.keys(stepData[0][curr]).map((d) => ({ name: d }))}
        />
        <div className="legendSwitch">
          <VisBulletLegend
            items={items}
            onLegendItemClick={(i) => setCurr(i.name)}
          />
        </div>
      </div>
      <VisXYContainer data={stepData} height={"50vh"} yDomain={[0, 42]}>
        <VisArea
          x={useCallback((d) => d.year, [])}
          y={[
            useCallback((d) => d[curr].neutral, [curr]),
            useCallback((d) => d[curr].negative, [curr]),
            useCallback((d) => d[curr].positive, [curr]),
          ]}
          curveType={CurveType.StepAfter}
        />
        <VisAxis
          type="x"
          label="Month"
          tickTextColor={`hsl(${
            theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
          })`}
          labelColor={`hsl(${
            theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
          })`}
        />
        <VisAxis
          type="y"
          label="Number of Mentions"
          tickTextColor={`hsl(${
            theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
          })`}
          labelColor={`hsl(${
            theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
          })`}
        />
      </VisXYContainer>
    </div>
  );
};

export default StepAreaChart;
