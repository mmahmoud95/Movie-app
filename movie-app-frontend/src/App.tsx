import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header'; 
import MovieList from './Components/MovieList';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './store/store';
import Favorites from './pages/Favorites';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
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
