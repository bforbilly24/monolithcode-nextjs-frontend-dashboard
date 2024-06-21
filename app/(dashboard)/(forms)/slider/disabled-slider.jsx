"use client"
import { Slider } from "@/components/ui/slider";
const DisabledSlider = () => {
  return (
    <div>
      <Slider defaultValue={[70]} disabled />
    </div>

  );
};

export default DisabledSlider;