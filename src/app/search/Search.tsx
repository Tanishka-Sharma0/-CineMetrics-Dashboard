import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import MovieCard from "../../components/ui/MovieCard";
import Skeleton from "../../components/ui/Skeleton";

export default function Search() {
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 500);
    const loading = false;

    const movies = [
        {
            title: "Inception",
            rating: 8.8,
            image:
                "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
        },
        {
            title: "Interstellar",
            rating: 8.6,
            image:
                "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        },
    ];
    return (
        <div className="space-y-6">

            <input
                value={query}
                placeholder="Search movies..."
                onChange={(e) => setQuery(e.target.value)}
                className="w-full p-3 rounded-lg border"
            />

            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
                {loading ?
                    Array.from({ length: 8 }).map((_, i) => (
                        <Skeleton key={i} />
                    ))
                    : movies.map((movie) => (
                        <MovieCard key={movie.title} {...movie} />
                    ))}
            </div>

        </div>
    );
}