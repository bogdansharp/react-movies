import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';

export default function Header({title}) {
  return (
    <header>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="site-title-block flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link to='/'>
                  <FontAwesomeIcon 
                    icon={faClapperboard} 
                    className="sm:text-3xl text-xl h-6 sm:h-8 w-auto text-indigo-400 mr-3"
                  />
                  <h1 className='site-title sm:text-3xl text-xl text-indigo-400 inline'>
                    {title}
                  </h1>
                </Link>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <a href='https://github.com/bogdansharp/react-movies' target="_blank" rel="noreferrer">
                <FontAwesomeIcon 
                  className='text-white h-6' 
                  icon={faGithub} 
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
