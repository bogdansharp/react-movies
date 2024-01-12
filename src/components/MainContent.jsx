import React, { useState } from 'react';
import StartContent from './StartContent';
import SearchPanel from './SearchPanel';
import SearchResult from './SearchResult';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export default function MainContent() {
    const [isSearchDone, setSearchDone] = useState(false);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setLoading] = useState(false);
    const [totalResults, setTotalResults] = useState(0);
    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');
    const searchMovies = function(s, type = 'all', page = 1) {
        let typeStr = type === 'all' ? '' : `&type=${type}`;
        let pageStr = page === 1 ? '' : `&page=${page}`;
        setLoading(true);
        setSearchDone(true);
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${s}${typeStr}${pageStr}`)
            .then(response => response.json())
            .then(data => {
                if ('Response' in data && data.Response === 'True' && 
                    'Search' in data && 'totalResults' in data)
                {
                    setMovies(data.Search);
                    setTotalResults(+data.totalResults);
                    setSearch(s);
                    setType(type);
                    setPage(page);
                } else {
                    setMovies([]);
                    setTotalResults(0);
                    setSearch('');
                    setType('all');
                    setPage(1);
                }
            })
            .catch(err => { 
                console.error(err); 
                setMovies([]);
                setTotalResults(0);
            })
            .finally(() => setLoading(false));
    }
    return (
        <div className="main-wrap container mx-auto mt-7">
            <SearchPanel
                searchMovies={searchMovies}
                setMovies={setMovies} 
                setTotalResults={setTotalResults} 
                setLoading={setLoading}
            />
            <div className='main-content mt-7 mb-7 text-lg sm:text-xl'>
                {isSearchDone ? 
                    <SearchResult 
                        movies={movies} 
                        search={search}
                        type={type}
                        page={page}
                        totalResults={totalResults}
                        searchMovies={searchMovies}
                        isLoading={isLoading}
                    /> : 
                    <StartContent/>}
            </div>
        </div>
    );
}