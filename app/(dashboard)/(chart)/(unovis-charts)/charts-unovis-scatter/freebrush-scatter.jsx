"use client";

import { useCallback, useState } from "react";
import { FreeBrushMode, Scale, Position } from "@unovis/ts";
import {
  VisXYContainer,
  VisScatter,
  VisAxis,
  VisBulletLegend,
  VisFreeBrush,
} from "@unovis/react";
import { brushChartData } from "./data";

import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";

const FreeBrushScatter = () => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const palette = [
    `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
    `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
    `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`,
    `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
  ];

  const categories = [...new Set(brushChartData.map((d) => d.category))].sort();
  const colorScale = Scale.scaleOrdinal(palette).domain(categories);
  const formatNumber = Intl.NumberFormat("en", { notation: "compact" }).format;

  const legendItems = categories.map((v) => ({
    name: v,
    color: colorScale(v),
  }));
  const [selection, setSelection] = useState(null);

  const scatterProps = {
    x: useCallback((d) => d.medianSalary, []),
    y: useCallback((d) => d.employmentRate, []),
    color: useCallback((d) => colorScale(d.category), []),
    size: useCallback((d) => d.total, []),
    label: useCallback((d) => d.major, []),
    id: useCallback((d) => d.major, []),
  };

  return (
    <>
      <VisBulletLegend items={legendItems} />
      <VisXYContainer className="minimap" data={brushChartData} height={125}>
        <VisScatter {...scatterProps} sizeRange={[3, 10]} label={undefined} />
        <VisFreeBrush
          selectionMinLength={[0, 0]}
          autoHide={false}
          onBrushEnd={useCallback(setSelection, [])}
          mode={FreeBrushMode.XY}
        />
      </VisXYContainer>
      <VisXYContainer
        data={brushChartData}
        xDomain={selection?.[0]}
        yDomain={selection?.[1]}
        height={"55vh"}
        scaleByDomain={true}
      >
        <VisScatter
          {...scatterProps}
          sizeRange={[20, 80]}
          labelPosition={Position.Bottom}
        />
        <VisAxis
          type="x"
          label="Median Salary ($)"
          tickFormat={formatNumber}
          gridLine={false}
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
          label="Employment Rate"
          tickPadding={0}
          gridLine={false}
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
    </>
  );
};

export default FreeBrushScatter;
