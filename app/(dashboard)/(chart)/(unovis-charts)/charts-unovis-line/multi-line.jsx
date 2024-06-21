"use client";
import React, { useCallback, useMemo } from "react";
import { Scale } from "@unovis/ts";
import {
  VisXYContainer,
  VisLine,
  VisAxis,
  VisBulletLegend,
} from "@unovis/react";
import { data } from "./data";

import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";

const MultiLineChart = ({ height = 400 }) => {
  const xScale = useMemo(() => Scale.scaleTime(), []);
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const items = [
    {
      name: "Austin",
      color: `hsl(${
        theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
      })`,
    },
    {
      name: "New York",
      color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
    },
    {
      name: "San francisco",
      color: `hsl(${
        theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
      })`,
    },
  ];
  return (
    <>
      <VisBulletLegend items={items} />
      <VisXYContainer data={data} height={height} xScale={xScale}>
        <VisLine
          x={useCallback((d) => +new Date(d.date), [])}
          y={[
            useCallback((d) => d.austin, []),
            useCallback((d) => d.ny, []),
            useCallback((d) => d.sf, []),
          ]}
        />
        <VisAxis
          type="x"
          label="Date"
          numTicks={6}
          gridLine={false}
          tickFormat={Intl.DateTimeFormat().format}
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
          label="Temperature (celsius)"
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

export default MultiLineChart;
