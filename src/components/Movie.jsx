import React from 'react';

export default function Movie({Title, Year, imdbID, Type, Poster}) {
    return (
        <div className="movie-card">
            <div className="max-w-md rounded overflow-hidden shadow-lg ml-auto mr-auto sm:ml-0 sm:mr-0 bg-indigo-50">
            <div className="relative" style={{ paddingBottom: '150%' }}>
                <img
                src={Poster === 'N/A' ? `https://placehold.co/300x450?text=${Title}` : Poster}
                alt={Title}
                className="absolute inset-0 w-full object-cover"
                />
            </div>

            <div className="px-4 py-4">
                <div className="font-bold text-xl mb-2 min-h-20">
                    {Title}
                </div>
                <span className="text-gray-700 text-base float-left">
                    {Year}
                </span>
                <span className="text-gray-700 text-base float-right">
                    {Type}
                </span>
            </div>

            <div className="px-4 py-4 text-sm text-right">
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
        </div>
      );
}

