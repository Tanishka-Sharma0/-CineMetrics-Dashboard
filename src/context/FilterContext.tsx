import { createContext, useContext, useState, useMemo } from "react";


type Movie = {
    id: number;
    title: string;
    genre_ids?: number[];
    original_language?: string;
    release_date?: string;
    vote_average?: number;
};

type FilterState = {
    genre: string | null,
    year: number | null,
    rating: number | null,
    query: string;
};


type FilterContextType = {
    filters: FilterState,
    setGenre: (genre: string | null) => void,
    setYear: (year: number | null) => void,
    setRating: (rating: number | null) => void,
    resetFilters: () => void,
    setQuery: (query: string) => void;
    filteredMovies: Movie[];
    setSourceMovies: (movies: Movie[]) => void;
};

const FilterContext = createContext<FilterContextType | null>(null);

const GENRE_MAP: Record<number, string> = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    53: "Thriller",
    10752: "War",
};

export function FilterProvider({ children }: { children: React.ReactNode }) {
    const [filters, setFilters] = useState<FilterState>({
        genre: null,
        year: null,
        rating: null,
        query: "",
    });

    const [sourceMovies, setSourceMovies] = useState<Movie[]>([]);

    const setGenre = (genre: string | null) => setFilters((prev) => ({ ...prev, genre }));
    const setYear = (year: number | null) => setFilters((prev) => ({ ...prev, year }));
    const setRating = (rating: number | null) => setFilters((prev) => ({ ...prev, rating }));
    const setQuery = (query: string) => setFilters((prev) => ({ ...prev, query }));

    const resetFilters = () => setFilters({
        genre: null,
        year: null,
        rating: null,
        query: "",
    });

    const filteredMovies = useMemo(() => {

    });

    return (
        <FilterContext.Provider value={{ filters, setGenre, setYear, setRating, resetFilters }}>
            {children}
        </FilterContext.Provider>
    );
}

export function useFilters() {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error("useFilters must be used inside FilterProvider");
    };
    return context;

}