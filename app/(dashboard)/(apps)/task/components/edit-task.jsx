
"use client"
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { CalendarDays, X } from "lucide-react";
import { useEffect, useState } from "react";
import Select from "react-select";

const users = [
  { value: "202", label: "Cleopetra" },
  { value: "203", label: "Nicolas" },
  { value: "204", label: "John Doe" },
];
const statuses = [
  { value: "todo", label: "To do" },
  { value: "inprogress", label: "In Progress" },
  { value: "completed", label: "Completed" },
];
const prioriy = [
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

const styles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: "14px",
  }),
};
const EditTask = ({ open, onClose }) => {

  const [openDate, setOPenDate] = useState(true);
  const toggleOpenDate = () => setOPenDate(!openDate);
  const [date, setDate] = useState(new Date());
  const formatDate = new Date(date);
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(formatDate);

  useEffect(() => {
    toggleOpenDate();
  }, [date])


  return (
    <Sheet
      open={open}
      onOpenChange={onClose}
    >
      <SheetContent className="pt-5">
        <SheetHeader className="flex-row items-center justify-between mb-4">
          <span className="text-lg font-semibold text-default-900">Create Task</span>
        </SheetHeader>
        <form className=" h-full flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <Label htmlFor="boardTitle" className="mb-1.5 text-default-600">Board Title</Label>
              <Input id="boardTitle" placeholder="Board Title" />
            </div>
            <div>
              <Label htmlFor="assignedMember" className="mb-1.5 text-default-600">Assigned To</Label>
              <Select
                className="react-select"
                classNamePrefix="select"
                options={users}
                styles={styles}
                isMulti
              />
            </div>

            <div>
              <Label
                htmlFor="status"
                className="mb-1.5 text-default-600">
                Status
              </Label>
              <Select
                className="react-select"
                classNamePrefix="select"
                options={statuses}
                styles={styles}
              />
            </div>
            <div>
              <Label
                htmlFor="priority"
                className="mb-1.5 text-default-600">
                Priority
              </Label>
              <Select
                className="react-select"
                classNamePrefix="select"
                options={prioriy}
                styles={styles}
              />
            </div>

            <div>
              <Label
                htmlFor="priority"
                className="mb-1.5 text-default-600">
                Due Date
              </Label>

              <div className="relative">
                <Input
                  placeholder="Select Date"
                  onFocus={toggleOpenDate}
                  value={formattedDate} />
                <CalendarDays
                  className="w-4 h-4 text-default-400 absolute top-1/2 right-2 -translate-y-1/2"
                />
                <div
                  className={cn("absolute bottom-10 left-0 w-[300px] bg-background z-20 hidden", {
                    "block": openDate
                  })}
                >
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="border border-default-200 rounded-md shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          <SheetFooter className="pb-10">
            <SheetClose>
              <Button type="button" color="warning">Cancel</Button>
            </SheetClose>
            <Button>Create Task</Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default EditTask;

