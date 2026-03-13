import { filter } from "framer-motion/client";
import FilterBar from "../../components/filters/FilterBar";
import KpiGrid from "./widgets/KpiGrid";

import GenreChart from "../../charts/BarChart";
import RatingChart from "../../charts/LineChart";
import LanguageChart from "../../charts/PieChart";

export default function Dashboard() {
    return (
        <div className="space-y-8">
            <FilterBar />
            <KpiGrid />
            <div className="grid gap-6 xl:grid-cols-3">
                <div className="xl:col-span-2">
                    <GenreChart />
                </div>
                <LanguageChart />
            </div>
            <RatingChart />
        </div >
    );
}