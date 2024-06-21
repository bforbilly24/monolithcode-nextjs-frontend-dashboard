"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import {
  getGridConfig,
  getLabel,
  getYAxisConfig,
} from "@/lib/appex-chart-options";

const GroupRows = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);
  const series = [
    // George Washington
    {
      name: "George Washington",
      data: [
        {
          x: "President",
          y: [new Date(1789, 3, 30).getTime(), new Date(1797, 2, 4).getTime()],
        },
      ],
    },
    // John Adams
    {
      name: "John Adams",
      data: [
        {
          x: "President",
          y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()],
        },
        {
          x: "Vice President",
          y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()],
        },
      ],
    },
    // Thomas Jefferson
    {
      name: "Thomas Jefferson",
      data: [
        {
          x: "President",
          y: [new Date(1801, 2, 4).getTime(), new Date(1809, 2, 4).getTime()],
        },
        {
          x: "Vice President",
          y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()],
        },
        {
          x: "Secretary of State",
          y: [
            new Date(1790, 2, 22).getTime(),
            new Date(1793, 11, 31).getTime(),
          ],
        },
      ],
    },
    // Aaron Burr
    {
      name: "Aaron Burr",
      data: [
        {
          x: "Vice President",
          y: [new Date(1801, 2, 4).getTime(), new Date(1805, 2, 4).getTime()],
        },
      ],
    },
    // George Clinton
    {
      name: "George Clinton",
      data: [
        {
          x: "Vice President",
          y: [new Date(1805, 2, 4).getTime(), new Date(1812, 3, 20).getTime()],
        },
      ],
    },
    // John Jay
    {
      name: "John Jay",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1789, 8, 25).getTime(), new Date(1790, 2, 22).getTime()],
        },
      ],
    },
    // Edmund Randolph
    {
      name: "Edmund Randolph",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1794, 0, 2).getTime(), new Date(1795, 7, 20).getTime()],
        },
      ],
    },
    // Timothy Pickering
    {
      name: "Timothy Pickering",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1795, 7, 20).getTime(), new Date(1800, 4, 12).getTime()],
        },
      ],
    },
    // Charles Lee
    {
      name: "Charles Lee",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1800, 4, 13).getTime(), new Date(1800, 5, 5).getTime()],
        },
      ],
    },
    // John Marshall
    {
      name: "John Marshall",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1800, 5, 13).getTime(), new Date(1801, 2, 4).getTime()],
        },
      ],
    },
    // Levi Lincoln
    {
      name: "Levi Lincoln",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1801, 2, 5).getTime(), new Date(1801, 4, 1).getTime()],
        },
      ],
    },
    // James Madison
    {
      name: "James Madison",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1801, 4, 2).getTime(), new Date(1809, 2, 3).getTime()],
        },
      ],
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
        rangeBarGroupRows: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "solid",
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),

    xaxis: {
      type: "datetime",
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
    yaxis: getYAxisConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`
    ),
    legend: {
      position: "right",
      horizontalAlign: "right",
      labels: {
        colors: `hsl(${
          theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
        })`,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };
  return (
    <>
      <Chart
        options={options}
        series={series}
        type="rangeBar"
        height={height}
        width={"100%"}
      />
    </>
  );
};

export default GroupRows;
