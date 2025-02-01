import { useLocation } from 'react-router-dom';
import MovieCard from './MovieCard';
import useMovieSearch from '../Hooks/useMovieSearch';

const MovieList = () => {
    const { search } = useLocation();
    const searchValue = new URLSearchParams(search).get('title');
    const { movies, loading, error } = useMovieSearch(searchValue);
    return (
        <div>
            {loading && (
                <div className="flex justify-center items-center py-8">
                    <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 rounded-full border-t-blue-500 border-transparent"></div>
                </div>
            )}
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="px-4 py-8">
                {loading ? (
                    <p className="text-center text-xl text-gray-500">
                        Loading...
                    </p>
                ) : movies?.Search?.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {movies?.Search?.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-xl text-gray-500">
                        No movies found.
                    </p>
                )}
            </div>
        </div>
    );
};

export default MovieList;
