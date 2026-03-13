import MovieHero from "./sections/MovieHero";
import CastCarousel from "./sections/CastCarousel";
import SimilarMovies from "./sections/SimilarMovies";


export default function MovieDetail() {
    return (
        <div className="space-y-8">
            <MovieHero />
            <CastCarousel />
            <SimilarMovies />
        </div>
    );
}