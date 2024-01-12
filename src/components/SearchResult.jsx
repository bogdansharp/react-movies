import React, { useState } from 'react';
import Movie from './Movie';

export default function SearchResult({movies, page, totalResults, searchMovies, isLoading}) {
    return (
        <div className='search-result'>
            {isLoading ? (
                <div className="progress bg-indigo-100">
                    <div className="indeterminate bg-indigo-600"></div>
                </div>
            ) : ( movies.length ? (
                    <div className='movies sm:text-left grid sm:grid-cols1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                        {movies.map(movie => <Movie key={movie.imdbID} {...movie}/>)}
                    </div>
                ) : (
                    <div className="text-left">
                        <p>Nothing Found.</p>
                    </div>
                )
            )}
        </div>
    );
}