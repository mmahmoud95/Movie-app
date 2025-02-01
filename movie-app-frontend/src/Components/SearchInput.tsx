import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchValue) return; 
        navigate(`/movies?title=${searchValue}`);
        setSearchValue(''); 
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-lg"
            >
                <input
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                    className="flex-1 p-3 bg-gray-700 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="search"
                    type="text"
                    placeholder="Search for a movie"
                />
                <button
                    className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-200"
                    type="submit"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchInput;
