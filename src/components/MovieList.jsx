import React from 'react';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import EmptyResult from './EmptyResult';
import { useSearchParams } from 'react-router-dom';

export default function MovieList(args) {
    const totalResults = 'totalResults' in args ? Number(args['totalResults']) : 0;
    const movies = 'Search' in args ? args['Search'] : [];
    const [searchParams] = useSearchParams();
    const page = Number(searchParams.get('page')) || 1;
    const s = searchParams.get('s') || '';
    const type = searchParams.get('type') || '';

    return (
        <div className='search-result text-lg sm:text-xl'>
            {movies && movies.length ?
                <>
                    <div className='movies sm:text-left sm:grid sm:grid-cols1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                        {movies.map(movie => <MovieCard key={movie.imdbID} {...movie}/>)}
                    </div>
                    {totalResults > 10 && (
                        <Pagination 
                            page={page}
                            baseUrl={'?s=' + s + (type ? `&type=${type}` : '')}
                            totalResults={totalResults}
                            perPage={10}
                        />
                    )}
                </> : 
                <EmptyResult/> 
            }
        </div>
    );
}