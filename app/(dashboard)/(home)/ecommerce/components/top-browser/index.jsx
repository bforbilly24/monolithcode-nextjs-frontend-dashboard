
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TopBrowserChart from "./top-browser-chart";

const TopBrowser = () => {
  return (
    <Card className="py-2.5">
      <CardHeader className="flex-row items-center justify-between gap-4 border-none">
        <CardTitle>Top Browser</CardTitle>
      </CardHeader>
      <CardContent className="px-0 pb-8">
        <TopBrowserChart />
      </CardContent>
    </Card>
  );
};

export default TopBrowser;