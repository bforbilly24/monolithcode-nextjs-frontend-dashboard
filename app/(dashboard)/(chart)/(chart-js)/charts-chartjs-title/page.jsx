import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TitleAlignment from "./title-alignment";

const ChartsChartJsTitlePage = () => {
    return (
        <div className="grid xl:grid-cols-2  grid-cols-1 gap-6 ">
            <Card>
                <CardHeader>
                    <CardTitle>Alignment</CardTitle>
                </CardHeader>
                <CardContent>
                    <TitleAlignment />
                </CardContent>
            </Card>
        </div>
    );
};

export default ChartsChartJsTitlePage;
