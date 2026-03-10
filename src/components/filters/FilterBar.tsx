import GenreFilter from "./GenreFilter";
import YearFilter from "./YearFilter";
import RatingFilter from "./RatingsFilter";
import { useFilters } from "../../context/FilterContext";


export default function FilterBar() {
    const { resetFilters } = useFilters();
    return (
        <div>
            <GenreFilter />
            <YearFilter />
            <RatingFilter />

            <button onClick={resetFilters} className="btn btn-secondary h-fit mt-6">Reset Filters</button>
        </div>
    )
}