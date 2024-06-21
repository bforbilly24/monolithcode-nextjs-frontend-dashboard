"use client";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { statuses } from "../data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { Icon } from "@iconify/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export function DataTableToolbar({ table }) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex flex-col md:flex-row  gap-4">
      <div className="flex-1 flex flex-col sm:flex-row sm:items-center  gap-3">
        <div className="flex items-center gap-3">
          <span className="text-base font-medium text-default-600">Show</span>
          <Select >
            <SelectTrigger className="w-20" size="md" radius="sm">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent className="w-20 min-w-[80px]" >
              {Array.from({ length: 9 }, (_, index) => {
                const number = index + 10;
                return <SelectItem key={number} value={number}>{number}</SelectItem>;
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="relative">
          <Input
            placeholder="Search Invoice..."
            value={table.getColumn("id")?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn("id")?.setFilterValue(event.target.value)
            }
            className="min-w-[200px] sm:max-w-[248px] pl-7 rounded"
          />
          <Icon icon="heroicons:magnifying-glass" className="w-3.5 h-3.5 absolute top-1/2 -translate-y-1/2 left-3 text-default-500" />
        </div>
      </div>
      <div className="flex-none flex flex-col sm:flex-row sm:items-center  gap-4">

        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Select Status"
            options={statuses}
          />
        )}

        {isFiltered && (
          <Button
            variant="outline"
            onClick={() => table.resetColumnFilters()}
            className=" px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}

        <Button asChild>
          <Link href="/create-invoice">
            <Plus className="w-5 h-5 mr-2" />
            Create Invoice
          </Link>
        </Button>
      </div>
    </div>

  );
}
