import {
    PieChart,
    Pie,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "English", value: 60, fill: "#6366F1" },
    { name: "Spanish", value: 15, fill: "#22C55E" },
    { name: "French", value: 10, fill: "#F59E0B" },
    { name: "Japanese", value: 8, fill: "#06B6D4" },
    { name: "Others", value: 7, fill: "#EF4444" },
];

export default function LanguageChart() {
    return (
        <div className="card h-[320px]">

            <h3 className="text-lg font-semibold mb-4">
                Language Distribution
            </h3>

            <ResponsiveContainer width="100%" height="100%">

                <PieChart>

                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={100}
                    />

                    <Tooltip />

                </PieChart>

            </ResponsiveContainer>

        </div>
    );
}