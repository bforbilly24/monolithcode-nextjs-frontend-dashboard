"use client";
import Card from "@/components/ui/card-snippet";
import { Kbd } from "@/components/ui/kbd";

const Test = () => {
  return (
    <div className=" space-y-5">
      <Card title="default">
        <div className="flex gap-4">
          <Kbd keys={["command"]}>K</Kbd>
          <Kbd keys={["command", "shift"]}>N</Kbd>
          <Kbd keys={["option", "command"]}>P</Kbd>
        </div>
      </Card>
      <Card title="size">
        <div className="flex gap-4">
          <Kbd keys={["command"]} size="sm">
            K
          </Kbd>
          <Kbd keys={["command"]} size="md">
            K
          </Kbd>
          <Kbd keys={["command"]} size="lg">
            K
          </Kbd>
          <Kbd keys={["command"]} size="xl">
            K
          </Kbd>
        </div>
      </Card>
    </div>
  );
};

export default Test;
