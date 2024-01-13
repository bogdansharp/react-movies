import React, { useState } from 'react';
import Movie from './Movie';
import Pagination from '../layout/Pagination';
import Loading from './Loading';
import EmptyResult from './EmptyResult';

export default function SearchResult(
    {movies, page, search, type, totalResults, searchMovies, isLoading, gotoMovie} ) 
{
    const goToPage = function(page) {
        searchMovies(search, type, page);
    }
    return (
        <div className='search-result text-lg sm:text-xl'>
            {isLoading ? <Loading/> : ( movies.length ? ( 
                <>
                    <div className='movies sm:text-left grid sm:grid-cols1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                        {movies.map(movie => <Movie key={movie.imdbID} {...movie} gotoMovie={gotoMovie}/>)}
                    </div>
                    {totalResults > 10 && (
                        <Pagination 
                            page={page}
                            goToPage={goToPage}
                            totalResults={totalResults}
                        />
                    )}
                </>
            ) : <EmptyResult/> )}
        </div>
    );
}