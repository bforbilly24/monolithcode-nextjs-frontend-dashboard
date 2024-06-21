"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";

const SemiDonut = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);
  const series = [44, 55, 41, 17, 15];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    theme: {
      monochrome: {
        enabled: true,
      },
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
      },
    },
    dataLabels: {
      formatter(val, opts) {
        const name = opts.w.globals.labels[opts.seriesIndex];
        return [name, val.toFixed(1) + "%"];
      },
    },
    stroke: {
      width: 0
    },
    fill: {
      colors: [
        `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
        `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
        `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
        `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`,
        `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].muted})`,
      ],
    },
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    legend: {
      show: true,
      position: "bottom",
      labels: {
        colors: `hsl(${theme?.cssVars[
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
        type="donut"
        height={height}
        width={"100%"}
      />
    </>
  );
};

export default SemiDonut;
