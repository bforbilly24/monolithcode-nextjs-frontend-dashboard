"use client";

import { useCallback } from "react";
import { Timeline } from "@unovis/ts";
import {
  VisXYContainer,
  VisBulletLegend,
  VisTooltip,
  VisTimeline,
  VisAxis,
} from "@unovis/react";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { productData } from "./data";

const labelWidth = 100;
const dateFormatter = Intl.DateTimeFormat().format;
const BasicTimeline = ({ height = 400 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const colors = [
    `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
    `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
    `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`,
    `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
  ];
  const ProductType = { App: "app", Hardware: "hardware", Service: "service" };
  const colorMap = {
    [ProductType.App]: colors[0],
    [ProductType.Hardware]: colors[1],
    [ProductType.Service]: colors[2],
  };
  const legendItems = Object.keys(ProductType).map((name) => ({
    name,
    color: colorMap[name],
  }));

  function getTooltipText(_, i) {
    const { startDate, endDate, description } = productData[i];
    return `
      <div style="width:${labelWidth}px">
        ${[startDate, endDate].map(dateFormatter).join(" - ")}
        ${description}
      </div>`;
  }

  return (
    <VisXYContainer data={productData} height={height}>
      <VisBulletLegend items={legendItems} />
      <VisTimeline
        x={useCallback((d) => d.startDate, [])}
        length={useCallback((d) => d.endDate - d.startDate, [])}
        type={useCallback((d) => d.name, [])}
        color={useCallback((d) => colorMap[d.type], [])}
        maxLabelWidth={labelWidth}
        showLabels={true}
        alternatingRowColors={true}
      />
      <VisTooltip
        triggers={{
          [Timeline.selectors.label]: getTooltipText,
        }}
      />
      <VisAxis
        type="x"
        tickFormat={dateFormatter}
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
  );
};

export default BasicTimeline;
