import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReLineBarAreaComposedChart from "./linebar-area-composedchart";
import ReSameDataComposedChart from "./damedata-composed-chart";
import ReVerticalComposedChart from "./vertical-composed-chart";
import ReComposedChartWithAxisLabels from "./composedchart-with-axislabels";
import ReScatterAndLineOfBestFit from "./scatter-line-bestfit";

const ChartJsRechartComposed = () => {

  return (
    <div className="grid xl:grid-cols-2  grid-cols-1 gap-6 ">
      <Card>
        <CardHeader>
          <CardTitle>Line Bar Area Composed Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <ReLineBarAreaComposedChart />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Same Data Composed Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <ReSameDataComposedChart />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Vertical Composed Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <ReVerticalComposedChart />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Composed Chart With Axis Labels</CardTitle>
        </CardHeader>
        <CardContent>
          <ReComposedChartWithAxisLabels />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Scatter And Line Of Best Fit</CardTitle>
        </CardHeader>
        <CardContent>
          <ReScatterAndLineOfBestFit />
        </CardContent>
      </Card>
    </div>
  );
};

export default ChartJsRechartComposed;
