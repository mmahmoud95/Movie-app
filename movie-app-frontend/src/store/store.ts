import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './slices/favoriteSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
    reducer: {
        favorites: favoriteReducer,
    },
});

export default store;
