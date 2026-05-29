import { create } from "zustand";
import { tmdbApi } from "../services/tmdb.api";


interface MoviesStore {
    movies: any[];
    stats: any;
    loading: boolean;
    fetchDashboardData: () => Promise<void>;
    SearchMovies: (query: string) => Promise<void>;
};


export const useMovieStore = create<MoviesStore>((set, get) => ({
    movies: [],
    stats: {},
    loading: false,

    fetchDashboardData: async () => {
        set({ loading: true });
        try {
            const stats = await tmdbApi.getDashboardStats();
            const movies = await tmdbApi.getTrending();
            set({ stats, movies, loading: false });

        } catch (error) {
            console.error('Failed to fetch data:', error);
            set({ loading: false });
        }
    },
    SearchMovies: async (query: string) => {
        set({ loading: true });
        try {
            const movies = await tmdbApi.searchMovies(query);
            set({ movies, loading: false });

        } catch (error) {
            set({ loading: false });
        }
    }

}));

