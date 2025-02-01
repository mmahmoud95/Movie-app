import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';

const Header = () => {
    return (
        <div className="flex items-center justify-between py-3 bg-black px-5 ">
            <Link to="/">
                {' '}
                <h1 className="text-white text-3xl font-bold">Movie App</h1>
            </Link>
            <Link to="/favorites" className="text-white text-3xl">
                Favorites
            </Link>
            <SearchInput />
        </div>
    );
};

export default Header;
