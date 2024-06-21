"use client";

import WelcomeBlock from "./components/welcome-block";
import ReportsCard from "./components/reports";
import ReportChart from "./components/report-chart";
import Workload from "./components/workload";
import ProjectBudget from "./components/project-budget";
import WorksNote from "./components/works-note";
import OverdueTask from "./components/overdue-task";
import ProjectBudgetBar from "./components/project-budget-bar";
import UpcomingDeadline from "./components/upcoming-deadlines";
import RecentActivity from "./components/recent-activity";
import TopContributer from "./components/top-contributer";
import ActiveTask from "./components/active-task";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DatePickerWithRange from "@/components/date-picker-with-range";
const ProjectPages = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center flex-wrap justify-between gap-4">
        <div className="text-2xl font-medium text-default-800">
          Project Dashboard
        </div>
        <DatePickerWithRange />
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4 mt-10 md:mt-0">
          <WelcomeBlock />
        </div>
        <div className="col-span-12 md:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4">
            <ReportsCard />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 2xl:col-span-8 grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <ReportChart />
          </div>
          <div className="col-span-12 xl:col-span-7 ">
            <Workload />
          </div>
          <div className="col-span-12 xl:col-span-5">
            <ProjectBudget />
          </div>
        </div>
        <div className="col-span-12 2xl:col-span-4">
          <WorksNote />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6 xl:col-span-5">
          <OverdueTask />
        </div>
        <div className="col-span-12 lg:col-span-6 xl:col-span-7">
          <ProjectBudgetBar />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6 xl:col-span-7">
          <Card>
            <CardHeader className="border-none pt-6">
              <CardTitle>Active Task</CardTitle>
            </CardHeader>
            <CardContent className="px-3">
              <ActiveTask />
            </CardContent>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-6 xl:col-span-5">
          <UpcomingDeadline />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6 xl:col-span-5">
          <RecentActivity />
        </div>
        <div className="col-span-12 lg:col-span-6 xl:col-span-7">
          <TopContributer />
        </div>
      </div>
    </div>
  );
};

export default ProjectPages;
