"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const schema = z.object({
  checkboxes: z.array(z.boolean()).refine(arr => arr.includes(true), {
    message: "Please check at least one checkbox."
  }),
});

const ValidateCheckbox = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-primary-foreground">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <p className="text-sm mb-1 font-medium text-default-600">Select Size</p>
      <div className="flex items-center gap-2">
        <Checkbox id="sm" {...register('checkboxes[0]')} />
        <Label htmlFor="sm">Small Size</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="md" {...register('checkboxes[1]')} />
        <Label htmlFor="md">Midium Size</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="lg" {...register('checkboxes[2]')} />
        <Label htmlFor="lg">Large Size</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="xl" {...register('checkboxes[3]')} />
        <Label htmlFor="xl">Extra Large Size</Label>
      </div>
      {errors.checkboxes && (
        <p
          className={cn("text-xs", {
            "text-destructive": errors.checkboxes,
          })}
        >
          {errors.checkboxes.message}
        </p>
      )}
      <div className="mt-2">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default ValidateCheckbox;
