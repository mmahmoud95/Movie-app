import { Movie } from '../utils/types';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import useFavorite from '../Hooks/useMovieFavorites';

const MovieCard = ({ movie }: { movie: Movie }) => {
    const { isFavorite, toggleFavorite, loading } = useFavorite(movie);

    return (
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img
                src={
                    movie.Poster !== 'N/A' ? movie.Poster : 'default-poster.jpg'
                }
                alt={movie.Title}
                className="w-full h-80 object-cover rounded-md mb-4 transition-all duration-300 ease-in-out transform"
            />
            <div className="px-2 pb-1">
                <div className="flex justify-between px-2">
                    <div>
                        <h3 className="mt-2 text-xl font-semibold text-gray-800">
                            {movie.Title}
                        </h3>
                        <p className="text-gray-500">{movie.Year}</p>
                    </div>
                    <button onClick={toggleFavorite} disabled={loading}>
                        {isFavorite ? (
                            <FaHeart className="text-red-500" />
                        ) : (
                            <FaRegHeart />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
