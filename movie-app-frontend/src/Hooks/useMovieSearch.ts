import { useState, useEffect } from 'react';
import { Movie } from '../utils/types';
import { axiosInstance } from '../utils/instanceAxios';

interface MovieSearch {
    Search: Movie[];
}

const useMovieSearch = (searchValue: string | null) => {
    const [movies, setMovies] = useState<MovieSearch>({ Search: [] });
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!searchValue) return;

        const fetchMovies = async () => {
            setLoading(true);
            try {
                const { data } = await axiosInstance.get(
                    `/movies/search?title=${searchValue}`
                );
                setMovies(data);
            } catch (err) {
                console.log(err);
                setError('Failed to fetch movies. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [searchValue]);

    return { movies, loading, error };
};

export default useMovieSearch;
