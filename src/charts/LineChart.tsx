import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { year: "2018", rating: 6.8 },
    { year: "2019", rating: 7.0 },
    { year: "2020", rating: 7.2 },
    { year: "2021", rating: 7.5 },
    { year: "2022", rating: 7.7 },
    { year: "2023", rating: 7.8 },
];


export default function RatingChart() {
    return (
        <div className="card h-[320px]">
            <h3 className="text-lg font-semibold mb-4">
                Rating Trend
            </h3>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="rating"
                        stroke="#22C55E"
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );

}