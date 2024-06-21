"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import SubtaskDetailsSheet from "./subtask-details";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import TaskItem from "./task-item";
import AddSubTask from "./add-sub-task";

const SubTasks = ({ subTasks, taskId }) => {
  const [showComplete, setShowComplete] = useState(false);
  const filteredSubtasks = subTasks.filter((st) => st.taskId === taskId);
  const completedSubtasks = filteredSubtasks.filter(
    (taskItem) => taskItem.completed === true
  );

  const handleShowCompleteTask = () => setShowComplete(!showComplete);
  const [open, setOpen] = useState(false);

  const handleOpenSubTaskSheet = () => setOpen(true);
  const handleCloseSubtaskSheet = () => setOpen(false);

  const totalSubtasks = filteredSubtasks.length;

  return (
    <>
      <div className="pt-3">
        <div className="flex mb-2 px-6">
          <div className="flex-1 text-base font-medium text-default-700 capitalize">
            Progress
          </div>
          <div className="flex-1 flex items-center gap-2">
            <div className="flex-none text-xs font-medium text-default-500">
              {completedSubtasks.length}/{totalSubtasks}
            </div>
            <div className="flex-1">
              <Progress
                value={
                  totalSubtasks > 0
                    ? (completedSubtasks.length / totalSubtasks) * 100
                    : 0
                }
                size="sm"
              />
            </div>
          </div>
        </div>
        <div>
          {filteredSubtasks
            .filter((taskItem) => !taskItem.completed)
            .map((subtask) => (
              <TaskItem
                subtask={subtask}
                key={`task-item-key-${subtask.id}`}
                handlerSubSheet={handleOpenSubTaskSheet}
              />
            ))}
        </div>
        <AddSubTask taskId={taskId} />
        <div
          className="px-6 py-4 cursor-pointer text-xs font-medium text-default-500 flex items-center gap-1"
          onClick={handleShowCompleteTask}
        >
          {completedSubtasks.length} Completed Subtask{" "}
          <ChevronDown className="w-4 h-4" />
        </div>

        <Collapsible open={showComplete} onOpenChange={setShowComplete}>
          <CollapsibleContent className="CollapsibleContent">
            {completedSubtasks.map((subtask) => (
              <TaskItem
                subtask={subtask}
                key={`task-item-complete-key-${subtask.id}`}
                handlerSubSheet={handleOpenSubTaskSheet}
              />
            ))}
          </CollapsibleContent>
        </Collapsible>
      </div>
      <SubtaskDetailsSheet open={open} onClose={handleCloseSubtaskSheet} />
    </>
  );
};

export default SubTasks;
