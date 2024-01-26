import React, { Suspense } from 'react';
import { useLoaderData, Await } from "react-router-dom";
import Loading from '../components/Loading';
// import Breadcrumbs from '../components/Breadcumbs';
import EmptyResult from '../components/EmptyResult';
import MovieDetails from '../components/MovieDetails';

export default function Movie() {
    const { promise } = useLoaderData();

    return (
        <Suspense fallback={<Loading />}>
            {/* <Breadcrumbs
                list={[
                    {text:'Home', to:'/'},
                    {text:'Search Results: ' + search, to:''},
                    {text:'movie'},
                ]}
                isHomeIcon={1}
            /> */}
            <Await resolve={promise} errorElement={<EmptyResult />}>
                {(result) => ( <MovieDetails {...result} />)}
            </Await>
        </Suspense>
    );
}