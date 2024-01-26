import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';

export default function SearchPanel() {
    const navigate = useNavigate();
    const [searchStr, setSearchStr] = useState('');
    const [typeStr, setTypeStr] = useState('all');
    const location = useLocation();

    useEffect(() => {
      const params = new URLSearchParams(location.search);
      const s = params.get('s') || '';
      const type = params.get('type') || 'all';
      if (s !== searchStr) setSearchStr(s);
      if (type !== typeStr) setTypeStr(type);
      // eslint-disable-next-line
    }, [location]);

    const gotoSearchResult = () => {
        let typeParam = typeStr === 'all' ? '' : `&type=${typeStr}`;
        navigate(`?s=${searchStr}${typeParam}`);
    }
    const searchBtnClick = () => gotoSearchResult();
    const searchInputKeyDown = (e) => e.key === 'Enter' && gotoSearchResult();

    return (
        <div className='search-panel sm:flex gap-2 mb-8'>
            <div className='sm:flex-1'>
                <div className="relative rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 text-lg sm:text-xl">
                        <FontAwesomeIcon 
                            icon={faFilm} 
                        />
                        </span>
                    </div>
                    <input 
                        type="text" 
                        name="search-input" 
                        id="search-input" 
                        className="block w-full rounded-md border-0 py-2 sm:pl-11 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg sm:text-xl sm:leading-6"
                        onKeyDown={searchInputKeyDown}
                        value={searchStr}
                        onChange={(e) => setSearchStr(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                    <label htmlFor="search-type" className="sr-only">Type</label>
                    <select 
                        id="search-type" 
                        name="search-type" 
                        className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        value={typeStr}
                        onChange={(e) => setTypeStr(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                        <option value="episode">Episode</option>
                    </select>
                    </div>
                </div>
            </div>
            <div className='sm:flex-shrink-0 text-center mt-8 sm:mt-0'>
                <button 
                    className="sm:flex w-24 font-semibold text-lg sm:text-xl justify-center rounded-md bg-indigo-600 px-3 py-1.5 leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                    onClick={searchBtnClick}
                >
                    Search
                </button>
            </div>
        </div>
    );
}