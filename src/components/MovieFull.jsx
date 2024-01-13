import React from 'react';
import EmptyResult from './EmptyResult';
import Loading from './Loading';

function MovieDetails({movie}) {
    const {
        Title,
        Year,
        Rated,
        Released,
        Runtime,
        Genre,
        Director,
        Writer,
        Actors,
        Plot,
        Language,
        Country,
        Awards,
        Poster,
        Ratings,
        Metascore,
        imdbRating,
        imdbVotes,
        imdbID,
        Type,
        DVD,
        BoxOffice,
        Production,
        Website,
        } = movie;
    return (
        <>
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
            <img 
                src={Poster === 'N/A' ? `https://placehold.co/300x450?text=${Title}` : Poster}
                alt={Title} 
                className="w-full rounded-lg shadow-lg" 
            />
            </div>
            <div className="md:w-2/3 md:ml-8">
            <h1 className="text-3xl font-bold mb-2">{Title}</h1>
            <p className="text-lg">{Plot}</p>
            <div className="mt-4">
                <p>
                <span className="font-bold">Director:</span> {Director}
                </p>
                <p>
                <span className="font-bold">Genre:</span> {Genre}
                </p>
                <p>
                <span className="font-bold">Year:</span> {Year}
                </p>
                <p>
                <span className="font-bold">Rated:</span> {Rated}
                </p>
                <p>
                <span className="font-bold">Runtime:</span> {Runtime}
                </p>
                <p>
                <span className="font-bold">Language:</span> {Language}
                </p>
                <p>
                <span className="font-bold">Country:</span> {Country}
                </p>
            </div>
            </div>
        </div>
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Ratings</h2>
            {Ratings.map((rating) => (
            <p key={rating.Source}>
                <span className="font-bold">{rating.Source}:</span> {rating.Value}
            </p>
            ))}
            <p>
            <span className="font-bold">Metascore:</span> {Metascore}
            </p>
            <p>
            <span className="font-bold">IMDb Rating:</span> {imdbRating}
            </p>
            <p>
            <span className="font-bold">IMDb Votes:</span> {imdbVotes}
            </p>
        </div>
        </>
    );
}

export default function MovieFull({movie, isLoading}) {
    return (
        <div className="main-movie mt-8">
        {isLoading ? <Loading/> : 
            movie ? <MovieDetails movie={movie}/>: 
                <EmptyResult/>}
        </div>
    );
}
