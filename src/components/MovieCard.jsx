import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieCard({ Title, Year, imdbID, Type, Poster }) {
  return (
    <div className="movie-card mb-8 sm:mb-4 flex flex-col max-w-md rounded-md overflow-hidden shadow-lg mx-auto sm:mx-0 bg-indigo-50">
        <Link to={`/movie/${imdbID}`}>
          <div className="relative" style={{ paddingBottom: '150%', minHeight: '300px' }}>
            <div className="absolute inset-0 flex justify-start">
              <img
                src={!Poster || Poster === 'N/A' ? `https://placehold.co/100x150?text=${Title}` : Poster}
                alt={Title}
                className="absolute inset-0 w-full h-full object-contain"
                style={{ objectPosition: 'top' }}
              />
            </div>
          </div>
        </Link>

        <div className="px-4 pt-2 flex-grow flex flex-col">
          <Link to={`/movie/${imdbID}`}>
            <div className="font-bold text-xl">
              {Title}
            </div>
          </Link>
        </div>

        <div className="px-4 pt-2 text-base text-gray-700">
          <span className="float-left">
            {Year}
          </span>
          <span className="float-right">
            {Type}
          </span>
        </div>

        <div className="pb-4 pt-2 px-4 text-sm text-right">
          <a
            href={`https://www.imdb.com/title/${imdbID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:underline"
          >
            View on IMDB
          </a>
        </div>
    </div>
  );
}
