
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SubtitleInChart from "./subtitle-linechart";

const ChartsChartJsSubtitlePage = () => {
    return (
        <div className="grid xl:grid-cols-2  grid-cols-1 gap-6 ">
            <Card>
                <CardHeader>
                    <CardTitle>Subtitle In Chart(incompleted)</CardTitle>
                </CardHeader>
                <CardContent>
                    <SubtitleInChart />
                </CardContent>
            </Card>
        </div>
    );
};

export default ChartsChartJsSubtitlePage;
