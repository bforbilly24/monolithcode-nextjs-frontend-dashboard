
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicScatterChart from "./basic-scatter";
import FreeBrushScatter from "./freebrush-scatter";

const ChartsUnovisScatterPage = () => {
    return (
        <div className="grid grid-cols-1 gap-6 ">
            <Card>
                <CardHeader>
                    <CardTitle>Basic Scatter Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <BasicScatterChart />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Basic Scatter Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <FreeBrushScatter />
                </CardContent>
            </Card>
        </div>
    );
};

export default ChartsUnovisScatterPage;
