"use client";

import { useCallback } from "react";
import { CurveType } from "@unovis/ts";
import {
  VisXYContainer,
  VisAxis,
  VisArea,
  VisBulletLegend,
} from "@unovis/react";
import { data } from "./data";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";

const NonStackedArea = ({ height = 400 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const Country = {
    UnitedStates: "us",
    India: "in",
  };

  const countries = {
    [Country.UnitedStates]: {
      name: "United States",
      color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
    },
    [Country.India]: {
      name: "India",
      color: `hsl(${
        theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
      })`,
    },
  };

  const x = useCallback((_, i) => i, []);
  const accessors = (id) => ({
    y: useCallback((d) => d.cases[id], []),
    color: countries[id].color,
  });

  const xTicks = useCallback((i) => [data[i].month, data[i].year].join(""), []);
  const yTicks = Intl.NumberFormat(navigator.language, {
    notation: "compact",
  }).format;

  return (
    <VisXYContainer data={data} height={height}>
      <VisBulletLegend items={Object.values(countries)} />
      <VisArea
        {...accessors(Country.UnitedStates)}
        x={x}
        opacity={0.7}
        curveType={CurveType.Basis}
      />
      <VisArea
        {...accessors(Country.India)}
        x={x}
        opacity={0.7}
        curveType={CurveType.Basis}
      />
      <VisAxis
        type="x"
        tickFormat={xTicks}
        tickTextColor={`hsl(${
          theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
        })`}
      />
      <VisAxis
        type="y"
        tickFormat={yTicks}
        tickTextColor={`hsl(${
          theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
        })`}
      />
    </VisXYContainer>
  );
};

export default NonStackedArea;
