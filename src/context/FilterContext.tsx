import { createContext, useContext, useState } from "react";

type FilterState = {
    genre: string | null,
    year: number | null,
    rating: number | null,
};


type FilterContextType = {
    filters: FilterState,
    setGenre: (genre: string | null) => void,
    setYear: (year: number | null) => void,
    setRating: (rating: number | null) => void,
    resetFilters: () => void,
};

const FilterContext = createContext<FilterContextType | null>(null);

export function FilterProvider({ children }: { children: React.ReactNode }) {
    const [filters, setFilters] = useState<FilterState>({
        genre: null,
        year: null,
        rating: null,
    });

    const setGenre = (genre: string | null) => setFilters((prev) => ({ ...prev, genre }));
    const setYear = (year: number | null) => setFilters((prev) => ({ ...prev, year }));
    const setRating = (rating: number | null) => setFilters((prev) => ({ ...prev, rating }));

    const resetFilters = () => setFilters({
        genre: null,
        year: null,
        rating: null,
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