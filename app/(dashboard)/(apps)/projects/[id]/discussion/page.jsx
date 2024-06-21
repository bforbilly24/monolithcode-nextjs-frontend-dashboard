"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Messages from "./messages";
import MessageFooter from "./messages-footer";
import { ScrollArea } from "@/components/ui/scroll-area";

const Discussion = () => {
  return (
    <Card>
      <CardContent className="p-0 pt-2">
        <div className="h-[calc(100vh-260px)]">
          <ScrollArea className="h-full">
            <div className="px-6 pt-4">
              <Messages />
            </div>
          </ScrollArea>
        </div>
      </CardContent>
      <CardFooter className="py-2 shadow-[0_-2px_10px_#9595952b] dark:shadow-[0_-2px_10px_#0000004d]">
        <MessageFooter />
      </CardFooter>
    </Card>
  );
};

export default Discussion;
