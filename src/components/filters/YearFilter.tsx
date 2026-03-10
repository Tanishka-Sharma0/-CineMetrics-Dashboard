import { useFilters } from "../../context/FilterContext";

export default function YearFilter() {
    const { filters, setYear } = useFilters();

    return (
        <div className="card">
            <label className="block text-sm font-medium mb-2">
                Release Year
            </label>

            <input
                type="number"
                value={filters.year ?? ""}
                onChange={(e) => setYear(e.target.value ? Number(e.target.value) : null)}
                placeholder="e.g. 2020"
                className="w-full p-2 rounded-lg border"
            />
        </div>
    );

}

