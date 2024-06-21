"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const OutlineCircleCheckbox = () => {
  return (
    <div className="flex gap-6">
      <div className="flex items-center">
        <Checkbox
          defaultChecked
          radius="xl"
          variant="outline"
          id="outline_circle_17"
        >
          Right
        </Checkbox>
      </div>
      <div className="flex items-center">
        <Checkbox radius="xl" variant="outline" id="outline_circle_18" />
        <Label
          htmlFor="outline_circle_18"
          className="text-sm text-muted-foreground font-normal pl-2.5"
        >
          Wrong
        </Label>
      </div>
    </div>
  );
};

export default OutlineCircleCheckbox;
