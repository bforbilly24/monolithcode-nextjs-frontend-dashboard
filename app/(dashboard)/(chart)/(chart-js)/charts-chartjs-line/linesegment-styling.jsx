"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import { hslToHex, hexToRGB } from "@/lib/utils";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const LineSegmentStyling = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const skipped = (ctx, value) =>
    ctx.p0.skip || ctx.p1.skip ? value : undefined;
  const down = (ctx, value) =>
    ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;

  const hslPrimary = `hsla(${
    theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
  })`;
  const hslInfo = `hsla(${
    theme?.cssVars[mode === "dark" ? "dark" : "light"].info
  })`;
  const hslDestructive = `hsla(${
    theme?.cssVars[mode === "dark" ? "dark" : "light"].destructive
  })`;

  const hexPrimary = hslToHex(hslPrimary);
  const hexDestructive = hslToHex(hslDestructive);
  const hexInfo = hslToHex(hslInfo);

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, NaN, 48, 56, 57, 40],
        borderColor: hexToRGB(hexInfo, 0.5),
        segment: {
          borderColor: (ctx) =>
            skipped(ctx, hexPrimary) || down(ctx, hexDestructive),
          borderDash: (ctx) => skipped(ctx, [6, 6]),
        },
        spanGaps: true,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: mode === "dark" ? "#cbd5e1" : "#475569",
        },
      },
    },

    scales: {
      y: {
        grid: {
          drawTicks: false,
          color: `hsl(${
            theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartGird
          })`,
        },
        ticks: {
          color: `hsl(${
            theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
          })`,
        },
      },
      x: {
        grid: {
          drawTicks: false,
          color: `hsl(${
            theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartGird
          })`,
        },

        ticks: {
          color: `hsl(${
            theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
          })`,
        },
      },
    },

    maintainAspectRatio: false,
  };
  return (
    <div>
      <Line options={options} data={data} height={height} />
    </div>
  );
};

export default LineSegmentStyling;
