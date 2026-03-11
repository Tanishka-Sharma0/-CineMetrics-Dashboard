import { filter } from "framer-motion/client";
import FilterBar from "../../components/filters/FilterBar";
import { useFilters } from "../../context/FilterContext";
import KpiGrid from "./widgets/KpiGrid";

export default function Dashboard() {
    const { filters } = useFilters();
    return (
        <div className="space-y-6">
            <FilterBar />
            <KpiGrid />
            <div className="card">
                <h2 className="text-lg font-semibold mb-2">
                    Active Filters
                </h2>

                <pre>
                    {JSON.stringify(filters, null, 2)}
                </pre>
            </div>

        </div >
    );
}