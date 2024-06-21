"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const CheckboxRight = () => {
  return (
    <div className="flex gap-6">
      <div className="flex items-center">
        <Label
          htmlFor="right_label_19"
          className="text-sm text-muted-foreground font-normal pr-2.5"
        >
          Right
        </Label>
        <Checkbox defaultChecked id="right_label_19" />
      </div>
      <div className="flex items-center">
        <Label
          htmlFor="right_label_20"
          className="text-sm text-muted-foreground font-normal pr-2.5"
        >
          Wrong
        </Label>
        <Checkbox id="right_label_20" />
      </div>
    </div>
  );
};

export default CheckboxRight;
