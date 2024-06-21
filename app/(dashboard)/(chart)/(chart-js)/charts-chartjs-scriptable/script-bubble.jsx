"use client";
import React from "react";
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
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { Bubble } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

function channelValue(x, y, values) {
  return x < 0 && y < 0
    ? values[0]
    : x < 0
    ? values[1]
    : y < 0
    ? values[2]
    : values[3];
}

function colorize(opaque, context) {
  const value = context.raw;
  const x = value.x / 100;
  const y = value.y / 100;
  const r = channelValue(x, y, [250, 150, 50, 0]);
  const g = channelValue(x, y, [0, 50, 150, 250]);
  const b = channelValue(x, y, [0, 150, 150, 250]);
  const a = opaque ? 1 : (0.5 * value.v) / 1000;

  return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}

const ScriptBubble = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "1st Dataset",
        data: [
          {
            x: 20,
            y: 30,
            r: 15,
          },
          {
            x: 40,
            y: 10,
            r: 10,
          },
        ],
      },
      {
        label: "2nd Dataset",
        data: [
          {
            x: 20,
            y: 60,
            r: 15,
          },
          {
            x: 40,
            y: 60,
            r: 10,
          },
        ],
      },
    ],
  };
  const options = {
    aspectRatio: 1,
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: `hsl(${
            theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
          })`,
        },
      },
    },
    elements: {
      point: {
        backgroundColor: function (context) {
          const index = context.dataIndex;
          const value = context.dataset.data[index];
          return value < 0 ? "red" : index % 2 ? "blue" : "green";
        },
      },
    },
    scales: {
      y: {
        grid: {
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
      <Bubble options={options} data={data} height={height} />
    </div>
  );
};

export default ScriptBubble;
