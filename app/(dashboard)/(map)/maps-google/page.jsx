import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicMap from "./basic-map";

const MapsGooglePage = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Google Map</CardTitle>
            </CardHeader>
            <CardContent>
                <BasicMap />
            </CardContent>
        </Card>
    );
};

export default MapsGooglePage;
