import MovieCard from "../../../components/ui/MovieCard";

export default function SimilarMovies() {
    const movies = [
        {
            title: "Inception",
            rating: 8.8,
            image:
                "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
        },
    ];

    return (
        <div className="card">

            <h2 className="text-lg font-semibold mb-4">
                Similar Movies
            </h2>

            <div className="md:grid-cols-3 lg:grid-cols-4 grid gap-6 ">
                {movies.map((movie) => (
                    <MovieCard key={movie.title} {...movie} />
                ))}
            </div>

        </div>

    )
}