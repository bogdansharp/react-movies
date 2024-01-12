import React from 'react';

export default function Movie({Title, Year, imdbID, Type, Poster}) {
    return (
        <div className="movie-card">
            <span>{Title}</span>
        </div>
      );
}