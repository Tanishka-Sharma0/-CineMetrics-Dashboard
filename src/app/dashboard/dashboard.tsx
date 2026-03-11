import { filter } from "framer-motion/client";
import FilterBar from "../../components/filters/FilterBar";
import { useFilters } from "../../context/FilterContext";
import KpiGrid from "./widgets/KpiGrid";

import GenreChart from "../../charts/BarChart";
import RatingChart from "../../charts/LineChart";
import LanguageChart from "../../charts/PieChart";

export default function Dashboard() {
    const { filters } = useFilters();
    return (
        <div className="space-y-6">
            <FilterBar />
            <KpiGrid />
            <div className="grid gap-6 lg:grid-cols-2">
                <GenreChart />
                <LanguageChart />
            </div>
            <RatingChart />
        </div >
    );
}