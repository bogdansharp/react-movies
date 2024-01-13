import React, { useState } from 'react';
import Movie from './Movie';
import Pagination from './Pagination';

export default function SearchResult({movies, page, search, type, totalResults, searchMovies, isLoading}) {
    const goToPage = function(page) {
        searchMovies(search, type, page);
    }
    return (
        <div className='search-result'>
            {isLoading ? (
                <div className="progress bg-indigo-100">
                    <div className="indeterminate bg-indigo-600"></div>
                </div>
            ) : ( movies.length ? (
                    <>
                        <div className='movies sm:text-left grid sm:grid-cols1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                            {movies.map(movie => <Movie key={movie.imdbID} {...movie}/>)}
                        </div>
                        {totalResults > 10 && (
                            <Pagination 
                                page={page}
                                goToPage={goToPage}
                                totalResults={totalResults}
                            />
                        )}
                    </>
                ) : (
                    <div className="text-left">
                        <p>Nothing Found.</p>
                    </div>
                )
            )}
        </div>
    );
}