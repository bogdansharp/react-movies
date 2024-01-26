import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function BreadcrumbsElement({text, to, isHomeIcon}) {
    return (
        <li><div className="flex items-center">
            {! to ? (
                <span className="cursor-pointer font-medium text-gray-400 hover:text-indigo-500">
                    {isHomeIcon ?<FontAwesomeIcon icon={faHouse} className="sm:h-6 h-5"/> : text}
                </span>
            ) : (
                <>
                <Link to={to} className="mr-2 font-medium text-gray-700 hover:text-indigo-500"> 
                    {isHomeIcon ? <FontAwesomeIcon icon={faHouse} className="sm:h-6 h-5"/> : text}
                </Link>
                {/* <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg> */}
                <span 
                    className="pointer-events-none mx-2 select-none font-sans font-normal leading-normal text-gray-300 antialiased"
                    aria-hidden="true"
                > / </span>
                </>
            )}
        </div></li>
    );
}

export default function Breadcrumbs({list = [], isHomeIcon = 1}) {
    // list = [{text:'Home'}, {text:'Sub Home'}]
    return (
        <nav aria-label="Breadcrumb" className='text-lg sm:text-xl'>
            <ol className="flex flex-wrap sm:flex-nowrap items-center space-x-2 px-3 md:px-4 sm:px-1">
                {list.map((item, index) => (
                    <BreadcrumbsElement
                        key={index}
                        text={item.text}
                        to={item.to}
                        isHomeIcon={index === 0 && isHomeIcon ? 1 : 0}
                    />
                ))}
            </ol>
        </nav>
    );
}
