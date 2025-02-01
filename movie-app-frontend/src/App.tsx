import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import store from './store/store';
import { fetchFavorites } from './store/slices/favoriteSlice';
import Header from './Components/Header';
import MovieList from './Components/MovieList';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <LoadFavorites />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<MovieList />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
const LoadFavorites = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchFavorites());
    }, []);
    return null;
};
