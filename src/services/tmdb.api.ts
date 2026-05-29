const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;


interface Movie {
    id: number,
    title: string,
    poster_path: string,
    vote_average: number,
    release_date: string,
    genre_ids: number[],
};

export const tmdbApi = {
    async getTrending(): Promise<Movie[]> {
        const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
        const data = await res.json();
        return data.results;
    },
    async searchMovies(query: string): Promise<Movie[]> {
        const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
        const data = await res.json();
        return data.results;
    },
    async getMovieDetails(id: string): Promise<any> {
        const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits,recommendations`);
        return res.json();
    },
    async getDashboardStats(): Promise<any> {
        const trending = await this.getTrending();
        return {
            totalMovies: 12430,
            avgRatings: trending.reduce((sum, m) => sum + m.vote_average, 0) / trending.length,
            topGenres: ['Action', 'Drama', 'Sci-Fi'],
            activeUsers: 2300,
        };
    },
}