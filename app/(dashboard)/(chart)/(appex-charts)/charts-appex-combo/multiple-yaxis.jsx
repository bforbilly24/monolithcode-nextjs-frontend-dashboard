"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { getGridConfig, getLabel } from "@/lib/appex-chart-options";

const MultipleYAxis = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      name: "Income",
      type: "column",
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
    },
    {
      name: "Cashflow",
      type: "column",
      data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
    },
    {
      name: "Revenue",
      type: "line",
      data: [20, 29, 37, 36, 44, 45, 50, 58],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: false,
    },
    stroke: {
      width: [1, 1, 4],
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
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
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: `hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
          })`,
        },
        labels: {
          style: {
            colors: `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
            })`,
          },
        },
        title: {
          text: "Income (thousand crores)",
          style: {
            color: `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].info
            })`,
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      {
        seriesName: "Income",
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: `hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
          })`,
        },
        labels: {
          style: {
            colors: `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].success
            })`,
          },
        },
        title: {
          text: "Operating Cashflow (thousand crores)",
          style: {
            color: `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
            })`,
          },
        },
      },
      {
        seriesName: "Revenue",
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: `hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
          })`,
        },
        labels: {
          style: {
            colors: `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
            })`,
          },
        },
        title: {
          text: "Revenue (thousand crores)",
          style: {
            color: `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
            })`,
          },
        },
      },
    ],

    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        endingShape: "rounded",
      },
    },

    legend: {
      labels: {
        colors: `hsl(${
          theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
        })`,
      },
    },
  };
  return (
    <>
      <Chart
        options={options}
        series={series}
        type="line"
        height={height}
        width={"100%"}
      />
    </>
  );
};

export default MultipleYAxis;
