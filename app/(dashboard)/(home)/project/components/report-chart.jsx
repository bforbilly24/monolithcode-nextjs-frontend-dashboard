"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Icon } from "@iconify/react";
import { getGridConfig } from "@/lib/appex-chart-options";
const ReportChart = ({ height = 360 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      name: "Completed Task",
      data: [45, 52, 38, 24, 33, 40],
    },
    {
      name: "Inprogress",
      data: [35, 41, 62, 42, 13, 35],
    },
    {
      name: "Overdue",
      data: [87, 57, 74, 99, 75, 50],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2],
      curve: "straight",
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].destructive})`,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    markers: {
      size: 4,
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),
    xaxis: {
      type: "category",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          fontSize: "12px",
          fontFamily: "inter",
          colors: `hsl(${
            theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
          })`,
        },
      },
    },
    yaxis: {
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          fontSize: "12px",
          fontFamily: "inter",
          colors: [
            `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel
            })`,
          ],
        },
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
    <Card>
      <CardHeader className="mb-0 border-none pt-6 pl-7 pb-0 flex-row flex-wrap items-center justify-between gap-4">
        <CardTitle className="whitespace-nowrap">Report Chart</CardTitle>
        <div className="w-[170px]">
          <Select>
            <SelectTrigger className="text-default-500 bg-transparent dark:bg-transparent">
              <Icon icon="heroicons:calendar-days" className="w-4 h-4" />
              <SelectValue placeholder="Select Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">Jan 10,2024</SelectItem>
              <SelectItem value="11">Jan 11,2024</SelectItem>
              <SelectItem value="12">Jan 12,2024</SelectItem>
              <SelectItem value="13">Jan 13,2024</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <Chart
          options={options}
          series={series}
          type="line"
          height={height}
          width={"100%"}
        />
      </CardContent>
    </Card>
  );
};

export default ReportChart;
