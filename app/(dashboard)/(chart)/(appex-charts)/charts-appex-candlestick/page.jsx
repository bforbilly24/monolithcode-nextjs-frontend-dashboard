import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicCandle from "./basic-candle";
import CategoryXAxis from "./category-xaxis";
import CandleStickWithLine from "./candle-stick-line";

const CandleStickChartPage = () => {
    return (
        <div className="grid xl:grid-cols-2  grid-cols-1 gap-6 ">
            <Card>
                <CardHeader>
                    <CardTitle>Basic Candlestick Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <BasicCandle />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Category X-Axis</CardTitle>
                </CardHeader>
                <CardContent>
                    <CategoryXAxis />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Candlestick with Line Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <CandleStickWithLine />
                </CardContent>
            </Card>
        </div>
    );
};

export default CandleStickChartPage;
