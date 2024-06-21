"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";

const schema = z.object({
  message: z.string().min(1, { message: "Please select a subject to display." }),
});

const ValidateRadio = () => {
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
      <p className="text-sm mb-1 font-medium text-default-600">Notify me about...</p>
      <RadioGroup
        {...register("message")}
      >
        <RadioGroupItem value="rad_1" id="rad_1" color="default">
          All new messages
        </RadioGroupItem>
        <RadioGroupItem value="rad_2" id="rad_2">
          Direct messages and mentions
        </RadioGroupItem>
        <RadioGroupItem value="rad_3" id="rad_3">
          Nothing
        </RadioGroupItem>
      </RadioGroup>
      {errors.message && <p>{errors.message.message}</p>}
      <div className="mt-2">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default ValidateRadio;
