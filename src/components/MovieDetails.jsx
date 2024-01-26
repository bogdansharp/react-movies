import './MovieDetails.css';
import React from 'react';
import EmptyResult from './EmptyResult';

export default function MovieDetails(movie) {
    // if (!('Response' in movie) || movie.Response !== 'True' || ! ('Title' in movie))
    //     throw new Error('Bad movie details');
    const { Title, Plot, Poster, Ratings, Metascore, imdbRating, imdbVotes, imdbID
    } = movie;
    const details = ['Director', 'Writer', 'Actors', 'Genre', 'Year', 'Rated', 
        'Runtime', 'Language', 'Country', 'Awards', 'BoxOffice', 'Production', 'Website'];

    return (
        'Response' in movie && movie.Response === 'True' ? (
        <div className="main-movie">
            <div className="flex flex-col md:flex-row sm:text-base text-sm px-2">
                <div className="md:w-1/3 mb-8 text-center">
                    <img 
                        src={Poster === 'N/A' ? `https://placehold.co/100x150?text=${Title}` : Poster}
                        alt={Title} 
                        className="w-full shadow-lg mx-auto max-w-md" 
                    />
                </div>
                <div className="md:w-2/3 md:ml-8">
                <h1 className="text-2xl sm:text-3xl font-bold mb-8">{Title}</h1>
                <table className='text-left'><tbody>
                    <tr>
                        <td className='py-1 align-top movie-table-min-col min-w-32'>
                            <span className="font-bold">Ratings:</span>
                        </td>
                        <td className='py-1 align-top flex justify-between min-w-full flex-col sm:flex-row'>
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
                    {details.map( name => name in movie && movie[name] && movie[name] !== 'N/A' ?
                        <tr key={name}>
                            <td className='py-1 align-top'><span className="font-bold">{name}:</span></td>
                            <td className='py-1 align-top'>{movie[name]}</td>
                        </tr> : null)
                    }
                </tbody></table>
                {Plot !== 'N/A' && <p className="text-left mt-8">{Plot}</p>}
                </div>
            </div>
        </div> 
        ) : <EmptyResult />
    );
}