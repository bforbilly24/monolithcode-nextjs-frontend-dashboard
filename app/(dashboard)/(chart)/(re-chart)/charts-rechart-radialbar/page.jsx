
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicRadialBar from "./basic-radial-bar";



const ChartJsRadialBarPage = () => {


    return (
        <div className="grid xl:grid-cols-2  grid-cols-1 gap-6 ">
            <Card>
                <CardHeader>
                    <CardTitle>Simple Radial Bar Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <BasicRadialBar />
                </CardContent>
            </Card>


        </div>
    );
};

export default ChartJsRadialBarPage;
