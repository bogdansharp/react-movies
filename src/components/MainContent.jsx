import React, { useState } from 'react';
import StartContent from './StartContent';
import SearchPanel from './SearchPanel';
import SearchResult from './SearchResult';
import MovieFull from './MovieFull';
import Breadcrumbs from '../layout/Breadcumbs';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export default function MainContent() {
    const [isSearchDone, setSearchDone] = useState(false);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setLoading] = useState(false);
    const [totalResults, setTotalResults] = useState(0);
    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');
    const [movieDetails, setMovieDetails] = useState(null);
    const [movieTitle, setMovieTitle] = useState('');
    const [isMoviePage, setMoviePage] = useState(false);
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
    const getMovieDetails = function(id, title = '') {
        setLoading(true);
        setMoviePage(true);
        setMovieTitle(title);
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`)
            .then(response => response.json())
            .then(data => {
                if ('Response' in data && data.Response === 'True' && 'Title' in data) {
                    setMovieDetails(data);
                    setMovieTitle(data.Title);
                } else {
                    setMovieDetails(null);
                }
            })
            .catch(err => { 
                console.error(err);
                setMovieDetails(null);
            })
            .finally(() => setLoading(false));
    }
    const gotoHome = function() {
        setMoviePage(false);
        setSearchDone(false);
    }
    const gotoSearchResults = function() {
        setMoviePage(false);
    }
    return (
        <div className="main-wrap container mx-auto my-8">
            {isMoviePage ? (
                <>
                <Breadcrumbs
                    list={[
                        {text:'Home', gotoFunc:gotoHome},
                        {text:'Search Results: ' + search, gotoFunc:gotoSearchResults},
                        {text:movieTitle},
                    ]}
                    isHomeIcon={1}
                    isLoading={isLoading}
                />
                <MovieFull 
                    movie={movieDetails} 
                    isLoading={isLoading}
                />
                </>
            ) : (
                <>
                <SearchPanel
                    searchMovies={searchMovies}
                    setMovies={setMovies} 
                    setTotalResults={setTotalResults} 
                    setLoading={setLoading}
                />
                <div className='search-content mt-8 text-lg sm:text-xl'>
                    {isSearchDone ? 
                        <SearchResult 
                            movies={movies} 
                            search={search}
                            type={type}
                            page={page}
                            totalResults={totalResults}
                            searchMovies={searchMovies}
                            isLoading={isLoading}
                            gotoMovie={getMovieDetails}
                        /> : 
                        <StartContent/>}
                </div>
                </>
            )}
        </div>
    );
}