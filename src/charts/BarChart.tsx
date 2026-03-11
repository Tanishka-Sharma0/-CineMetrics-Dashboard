import { BarChart, ResponsiveContainer, Bar, Tooltip, XAxis, YAxis } from "recharts";

const data = [
    { genre: "Action", count: 40 },
    { genre: "Drama", count: 28 },
    { genre: "Comedy", count: 35 },
    { genre: "Sci-Fi", count: 18 },
    { genre: "Horror", count: 12 },
];

export default function GenreChart() {
    return (
        <div className="card h-[320px]">
            <h3 className="text-lg font-semibold mb-4">
                Genre Distribution
            </h3>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <XAxis dataKey="genre" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                        dataKey="count"
                        fill="#6366F1"
                        radius={[6, 6, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>

        </div>
    )
}