"use client";

import { useCallback, useEffect, useState, useMemo } from "react";
import {
  VisXYContainer,
  VisLine,
  VisAxis,
  VisXYLabels,
  VisBulletLegend,
} from "@unovis/react";
import { countries, countriesData, legendItems } from "./data";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";

const DataGapsLine = ({ height = 400 }) => {
  const [current, setCurrent] = useState(0);
  const [fallbackValue, setFallbackValue] = useState();
  const [items, setLegendItems] = useState([]);

  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const getY = useCallback((c) => (d) => d[c.id], []);

  useEffect(() => {
    setFallbackValue(legendItems[current].value);
    setLegendItems(
      legendItems.map((o, i) => ({
        name: o.name,
        inactive: current !== i,
        color: countries[0].color,
      }))
    );
  }, [current]);

  return (
    <>
      <div>
        <span className="text-sm font-medium text-card-foreground">
          Select a fallback value for missing data points
        </span>
        <VisBulletLegend
          items={items}
          onLegendItemClick={useCallback((_, i) => setCurrent(i), [])}
        />
      </div>
      <VisXYContainer
        duration={0}
        height={height}
        xDomain={[1961, 2022]}
        yDomain={[0, 650]}
      >
        <VisLine
          data={countriesData}
          x={useCallback((d) => d.year, [])}
          y={useMemo(() => countries.map(getY), [])}
          fallbackValue={fallbackValue}
          color={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
          })`}
        />

        <VisXYLabels
          data={countries}
          x={2019.5}
          y={useCallback(
            (c) => getY(c)(countriesData[countriesData.length - 1]),
            []
          )}
          label={useCallback((c) => c.label, [])}
          backgroundColor="none"
        />

        <VisAxis
          type="x"
          numTicks={10}
          tickTextColor={`hsl(${
            theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
          })`}
        />
        <VisAxis
          type="y"
          tickFormat={(d) => `${d}${d ? "M" : ""}`}
          tickValues={[0, 200, 400, fallbackValue || undefined, 600]}
          tickTextColor={`hsl(${
            theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
          })`}
        />
      </VisXYContainer>
    </>
  );
};

export default DataGapsLine;
