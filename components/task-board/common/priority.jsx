"use client";

import { useState } from "react"; // Import useState hook
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateTaskAction } from "@/action/project-action";

const Priority = ({ task, taskId }) => {
  const [selectedPriority, setSelectedPriority] = useState(task?.priority);

  const handlePriorityChange = async (value) => {
    try {
      const newData = {
        ...task,
        priority: value,
      };

      await updateTaskAction(taskId, newData);
    } catch (error) {
      console.log(error);
    }

    setSelectedPriority(value);
  };

  return (
    <>
      <div className="w-[100px]">
        <Select value={selectedPriority} onValueChange={handlePriorityChange}>
          <SelectTrigger size="sm" variant="flat" color="primary">
            <SelectValue placeholder="select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default Priority;
