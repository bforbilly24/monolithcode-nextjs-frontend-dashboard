"use client"
import { Slider } from "@/components/ui/slider";
const MinMaxSlider = () => {
  return (
    <div>
      <Slider defaultValue={[50]} min={30} max={80} />
    </div>

  );
};

export default MinMaxSlider;