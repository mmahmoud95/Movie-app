import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import MovieCard from '../Components/MovieCard';
import { Movie } from '../utils/types';

const Favorites = () => {
    const favorites = useSelector(
        (state: RootState) => state.favorites.favorites
    );

    return (
        <div className="px-6 pt-5">
            {favorites.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {favorites.map((movie: Movie) => (
                        <MovieCard movie={movie} key={movie.imdbID} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-xl text-gray-500">
                    No favorites added yet.
                </p>
            )}
        </div>
    );
};

export default Favorites;
