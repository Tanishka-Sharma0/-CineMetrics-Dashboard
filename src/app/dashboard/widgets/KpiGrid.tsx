import KpiCard from "./Kpicard";

export default function KpiGrid() {
    const stats = [
        { title: "Total Movies", value: 12430 },
        { title: "Average Rating", value: 7.8, suffix: " ⭐" },
        { title: "Total Genres", value: 18 },
        { title: "Active Users", value: 2300 },
    ];
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 ">
            {stats.map((stat) => (
                <KpiCard
                    key={stat.title}
                    title={stat.title}
                    value={stat.value}
                    suffix={stat.suffix}
                />
            ))}
        </div>
    );
}