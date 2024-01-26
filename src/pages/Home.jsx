import React, { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';
import StartContent from '../components/StartContent';
import SearchPanel from '../components/SearchPanel';
import MovieList from '../components/MovieList';
import Loading from '../components/Loading';
import EmptyResult from '../components/EmptyResult';

export default function Home() {
    const { promise } = useLoaderData();

    return (
        <>
            <SearchPanel />
            {promise ? (<Suspense fallback={<Loading />}>
                <Await resolve={promise} errorElement={<EmptyResult />}>
                    {(result) => ( <MovieList {...result} />)}
                </Await>
            </Suspense> ) : <StartContent />}
        </>
    );
}
