import { useDispatch, useSelector } from 'react-redux';
import { Movie } from '../utils/types';
import { RootState } from '../store/store';
import { addFavorite, removeFavorite } from '../store/slices/favoriteSlice';
import axios from 'axios';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { API_BASE } from '../utils/Constants';

const MovieCard = ({ movie }: { movie: Movie }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(
        (state: RootState) => state.favorites.favorites
    );
    const isFavorite = favorites.some(
        (fav: Movie) => fav.imdbID === movie.imdbID
    );

    const handleFavoriteToggle = async () => {
        if (isFavorite) {
            dispatch(removeFavorite(movie.imdbID));
            await axios.delete(`${API_BASE}/favorites/${movie.imdbID}`);
        } else {
            dispatch(addFavorite(movie));
            await axios.post(`${API_BASE}/favorites`, movie);
        }
    };

    return (
        <div
            key={movie.imdbID}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
        >
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
                    <button onClick={handleFavoriteToggle}>
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
