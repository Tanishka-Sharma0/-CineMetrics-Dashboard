import { useFilters } from "../../context/FilterContext";

const genre = ["Action", "Comedy", "Drama", "Sci-Fi", "Horror"];

export default function GenreFilter() {
    const { filters, setGenre } = useFilters();

    return (
        <div className="card">
            <label className="block text-sm font-medium mb-2">
                Genre
            </label>

            <select
                value={filters.genre ?? ""}
                onChange={(e) => setGenre(e.target.value || null)}
                className="w-full p-2 boder rounded-lg"
            >
                <option value="">All</option>

                {genre.map((genre) => (
                    <option key={genre} value={genre}>{genre}</option>
                ))}
            </select>
        </div>
    );

}

