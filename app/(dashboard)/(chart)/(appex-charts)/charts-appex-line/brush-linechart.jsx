"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { getGridConfig, getLabel } from "@/lib/appex-chart-options";

const BrushLinechart = () => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  // const themeObj = themes.find((theme) => theme.name === theme.name);

  const theme = themes.find((theme) => theme.name === config);

  function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
  var data = generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 185, {
    min: 30,
    max: 90,
  });
  const series = [
    {
      data: data,
    },
  ];

  const options = {
    chart: {
      id: "chart2",

      height: 230,
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
    ],
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),
    stroke: {
      width: 3,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: getLabel(
        `hsl(${
          theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
        })`
      ),
    },
    yaxis: {
      tickAmount: 2,
      labels: getLabel(
        `hsl(${
          theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
        })`
      ),
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };

  const seriesLine = [
    {
      data: data, // Assuming 'data' is defined elsewhere
    },
  ];

  const optionsLine = {
    chart: {
      id: "chart1",
      height: 130,
      brush: {
        target: "chart2",
        enabled: true,
      },
      selection: {
        enabled: true,
        xaxis: {
          min: new Date("19 Jun 2017").getTime(),
          max: new Date("14 Aug 2017").getTime(),
        },
      },
    },
    colors: [`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`],
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.91,
        opacityTo: 0.1,
      },
    },
    xaxis: {
      type: "datetime",
      tooltip: {
        enabled: false,
      },
      labels: getLabel(
        `hsl(${
          theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
        })`
      ),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 2,
      labels: getLabel(
        `hsl(${
          theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
        })`
      ),
    },
  };

  return (
    <div id="wrapper">
      <div id="chart-line2">
        <Chart
          options={options}
          series={series}
          type="line"
          height={230}
          width={"100%"}
        />
      </div>
      <div id="chart-line">
        <Chart
          options={optionsLine}
          series={seriesLine}
          type="area"
          height={130}
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default BrushLinechart;
