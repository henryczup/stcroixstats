import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function StatsCard() {
    return (
        <Card>
            <CardHeader className="p-4">
                <CardTitle>Statistics</CardTitle>
                <CardDescription>Additional information related to the boat count.</CardDescription>
            </CardHeader>
            <CardContent className="p-4 flex items-center justify-center">
                <div className="grid gap-2 w-full">
                    <div className="flex items-center justify-between">
                        <div>Lowest boat count</div>
                        <div>12</div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>Highest boat count</div>
                        <div>42</div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>Average boat count</div>
                        <div>28</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}