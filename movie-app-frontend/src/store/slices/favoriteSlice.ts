import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../utils/types';


interface FavoritesState {
    favorites: Movie[];
}

const initialState: FavoritesState = {
    favorites: [],
};

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Movie>) => {
            state.favorites.push(action.payload);
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favorites = state.favorites.filter(
                (movie) => movie.imdbID !== action.payload
            );
        },
        setFavorites: (state, action: PayloadAction<Movie[]>) => {
            state.favorites = action.payload;
        },
    },
});

export const { addFavorite, removeFavorite, setFavorites } =
    favoriteSlice.actions;
export default favoriteSlice.reducer;
