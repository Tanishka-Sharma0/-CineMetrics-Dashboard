import { useFilters } from "../../context/FilterContext";

export default function RatingFilter() {
    const { filters, setRating } = useFilters();

    return (
        <div className="card">
            <label className="block text-sm font-medium mb-2">
                Minimum Rating
            </label>

            <input
                type="range"
                min="0"
                max="10"
                step="1"
                value={filters.rating ?? ""}
                onChange={(e) => setRating(Number(e.target.value))}
                className="w-full"
            />

            <p className="text-sm mt-2">
                {filters.rating ?? 0}/10
            </p>
        </div>
    );

}

