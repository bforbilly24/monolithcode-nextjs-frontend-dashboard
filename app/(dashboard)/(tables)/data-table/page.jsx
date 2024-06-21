"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BasicDataTable from "./basic-table";
import AdvancedTable from "./advanced";

const DataTablePage = () => {
  return (
    <div className=" space-y-5">
      <Card>
        <CardHeader>
          <CardTitle>Basic</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <BasicDataTable />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Advanced Table</CardTitle>
        </CardHeader>
        <CardContent >
          <AdvancedTable />
        </CardContent>
      </Card>

    </div>
  );
};

export default DataTablePage;
