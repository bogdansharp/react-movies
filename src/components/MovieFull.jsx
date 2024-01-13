import './MovieFull.css';
import React from 'react';
import EmptyResult from './EmptyResult';
import Loading from './Loading';

function MovieDetails({movie}) {
    const {
        Title, Year, Rated, Released, Runtime, Genre, Director, Writer, 
        Actors, Plot, Language, Country, Awards, Poster, Ratings,
        Metascore, imdbRating, imdbVotes, imdbID, Type, DVD, BoxOffice,
        Production, Website, } = movie;
    return (
        <div className="flex flex-col md:flex-row sm:text-base text-sm">
            <div className="md:w-1/3 mb-8 text-center">
                <img 
                    src={Poster === 'N/A' ? `https://placehold.co/300x450?text=${Title}` : Poster}
                    alt={Title} 
                    className="w-full shadow-lg mx-auto max-w-md" 
                />
            </div>
            <div className="md:w-2/3 md:ml-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-8">{Title}</h1>
            <table className='text-left'><tbody>
                <tr>
                    <td className='py-1 movie-table-min-col min-w-32'><span className="font-bold">Ratings:</span></td>
                    <td className='py-1 flex justify-between min-w-full flex-col sm:flex-row'>
                        <span className=''>
                            <a href={`https://www.imdb.com/title/${imdbID}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-500 hover:underline">
                                IMDB
                            </a>: 
                            <span className='font-semibold'> {imdbRating} </span> 
                            {imdbVotes === 'N/A' ? '' : ` (${imdbVotes}) `}
                        </span>
                        <span className='sm:pl-5 xl:pl-10'>
                            <span>Metacritic</span>: 
                            <span className='font-semibold'> {Metascore} </span>
                        </span>
                        {Ratings
                            .filter((rating) => 
                                rating.Source !== 'Internet Movie Database' && 
                                rating.Source !== 'Metacritic')
                            .map((rating) => (
                            <span className='sm:pl-5 xl:pl-10' key={rating.Source}>
                                <span>{rating.Source}</span>: 
                                <span className='font-semibold'> {rating.Value} </span>
                            </span>
                        ))}
                    </td>
                </tr>
                <tr>
                    <td className='py-1'><span className="font-bold">Director:</span></td>
                    <td className='py-1'>{Director}</td>
                </tr>
                <tr>
                    <td className='py-1'><span className="font-bold">Writer:</span></td>
                    <td className='py-1'>{Writer}</td>
                </tr>
                <tr>
                    <td className='py-1'><span className="font-bold">Actors:</span></td>
                    <td className='py-1'>{Actors}</td>
                </tr>
                <tr>
                    <td className='py-1'><span className="font-bold">Genre:</span></td>
                    <td className='py-1'>{Genre}</td>
                </tr>
                <tr>
                    <td className='py-1'><span className="font-bold">Year:</span></td>
                    <td className='py-1'>{Year}</td>
                </tr>
                <tr>
                    <td className='py-1'><span className="font-bold">Rated:</span></td>
                    <td className='py-1'>{Rated}</td>
                </tr>
                <tr>
                    <td className='py-1'><span className="font-bold">Runtime:</span></td>
                    <td className='py-1'>{Runtime}</td>
                </tr>
                <tr>
                    <td className='py-1'><span className="font-bold">Language:</span></td>
                    <td className='py-1'>{Language}</td>
                </tr>
                <tr>
                    <td className='py-1'><span className="font-bold">Country:</span></td>
                    <td className='py-1'>{Country}</td>
                </tr>
            </tbody></table>
            {Plot !== 'N/A' && <p className="text-left mt-8">{Plot}</p>}
            </div>
        </div>
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
