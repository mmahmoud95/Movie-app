import { useDispatch, useSelector } from 'react-redux';
import { useState, useCallback } from 'react';
import { addFavorite, removeFavorite } from '../store/slices/favoriteSlice';
import { axiosInstance } from '../utils/instanceAxios';
import { Movie } from '../utils/types';
import { RootState } from '../store/store';

const useFavorite = (movie: Movie) => {
    const dispatch = useDispatch();
    const favorites = useSelector(
        (state: RootState) => state.favorites.favorites
    );
    const [loading, setLoading] = useState<boolean>(false);

    const isFavorite: boolean = favorites.some(
        (fav: Movie) => fav.imdbID === movie.imdbID
    );

    const toggleFavorite = async (): Promise<void> => {
        setLoading(true);
        try {
            if (isFavorite) {
                dispatch(removeFavorite(movie.imdbID));
                await axiosInstance.delete(`/favorites/${movie.imdbID}`);
            } else {
                dispatch(addFavorite(movie));
                await axiosInstance.post(`/favorites`, {
                    movieId: movie.imdbID,
                    title: movie.Title,
                    year: movie.Year,
                    poster: movie.Poster,
                });
            }
        } catch (error) {
            console.error('Error updating favorites:', error);
        } finally {
            setLoading(false);
        }
    };

    return { isFavorite, toggleFavorite, loading };
};

export default useFavorite;
