import React from 'react';

export default function Movie({ Title, Year, imdbID, Type, Poster, gotoMovie }) {
  const gotoMoviePage = function (e) {
    e.preventDefault();
    gotoMovie(imdbID);
  };

  return (
    <div className="movie-card">
      <div className="max-w-md rounded-md overflow-hidden shadow-lg mx-auto sm:mx-0 bg-indigo-50">
        <a onClick={gotoMoviePage} href="#">
          <div className="relative" style={{ paddingBottom: '150%', minHeight: '300px' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={Poster === 'N/A' ? `https://placehold.co/100x150?text=${Title}` : Poster}
                alt={Title}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
        </a>

        <div className="px-4 py-4">
          <a onClick={gotoMoviePage} href="#">
            <div className="font-bold text-xl mb-2 min-h-20">
              {Title}
            </div>
          </a>
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
