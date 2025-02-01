import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../utils/types';
import { axiosInstance } from '../../utils/instanceAxios';
interface FavoritesState {
    favorites: Movie[];
}

const initialState: FavoritesState = {
    favorites: [],
};
export const fetchFavorites = createAsyncThunk(
    'favorites/fetchFavorites',
    async () => {
        try {
            const { data } = await axiosInstance.get(`/favorites`);
            return data;
        } catch (err: string | unknown) {
            console.error('Failed to fetch favorites...', err);
            throw new Error('Failed to fetch favorites...');
        }
    }
);
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
    extraReducers: (builder) => {
        builder.addCase(fetchFavorites.fulfilled, (state, action) => {
            state.favorites = action.payload;
        });
        builder.addCase(fetchFavorites.rejected, (state, action) => {
            console.error(`Failed to fetch favorites: ${action.error.message}`);
        });
    },
});

export const { addFavorite, removeFavorite, setFavorites } =
    favoriteSlice.actions;
export default favoriteSlice.reducer;
