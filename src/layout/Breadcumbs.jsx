import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function BreadcrumbsElement({text, gotoFunc, isActive, isHomeIcon}) {
    return (
        <li><div className="flex items-center">
            {isActive ? (
                <span 
                    href="#" 
                    aria-current="page" 
                    className="cursor-pointer font-medium text-gray-400 hover:text-indigo-500"
                >
                    {isHomeIcon ?<FontAwesomeIcon icon={faHouse} className="sm:h-6 h-5"/> : text}
                </span>
            ) : (
                <>
                <a 
                    href="#" 
                    className="mr-2 font-medium text-gray-700 hover:text-indigo-500"
                    onClick={(e) => { e.preventDefault(); gotoFunc && gotoFunc(); }}
                > 
                    {isHomeIcon ? <FontAwesomeIcon icon={faHouse} className="sm:h-6 h-5"/> : text}
                </a>
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
            <ol role="list" className="flex flex-wrap sm:flex-nowrap items-center space-x-2 px-3 md:px-4 mt-7 sm:px-1">
                {/* <BreadcrumbsElement text='Men' isActive={0} isHomeIcon={1}/>
                <BreadcrumbsElement text='Clothing' isActive={0} isHomeIcon={0}/>
                <BreadcrumbsElement text='Basic Tee 6-Pack' isActive={1} isHomeIcon={0}/> */}
                {list.map((item, index) => (
                    <BreadcrumbsElement
                        key={index}
                        text={item.text}
                        isActive={index === list.length - 1 ? 1 : 0}
                        isHomeIcon={index === 0 && isHomeIcon ? 1 : 0}
                        gotoFunc={item.gotoFunc}
                    />
                ))}
            </ol>
        </nav>
    );
}
