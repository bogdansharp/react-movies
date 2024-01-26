import './Pagination.css';
import React from 'react';
import { Link } from 'react-router-dom';

function PageLink({page, pageUrl, curPage}) {
    if (page < 0) return ( // ellipses
        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-400 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
    );
    if (curPage === page) return ( // disabled 
        <span
            aria-current="page" 
            className="relative select-none z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            {page}
        </span>
    );
    return ( // regular
        <Link 
            to={pageUrl}
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-indigo-50 focus:z-20 focus:outline-offset-0"
        >
            {page}
        </Link>
    );
}

export default function Pagination({page, totalResults, baseUrl, perPage}) {
    if (perPage <= 0) return null;
    const newPageUrl = (page) => baseUrl + (page === 1 ? '' : `&page=${page}`);
    const maxPage = Math.ceil(totalResults / perPage);
    const prevElement = (
        <>
            <span className="sr-only" >Previous</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
            </svg>
        </>
    );
    const nextElement = (
        <>
            <span className="sr-only">Next</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
        </>
    );
    let pages = [];
    if (maxPage <= 7) {
        pages = Array.from({ length: maxPage }, (_, index) => index + 1);
    } else if (page <= 2 || page >= maxPage - 1) {
        pages = [1, 2, 3, -1, maxPage-2, maxPage-1, maxPage];
    } else if (page === 3) {
        pages = [1, 2, 3, 4, -1, maxPage-1, maxPage];
    } else if (page === 3) {
        pages = [1, 2, -1, maxPage-3, maxPage-2, maxPage-1, maxPage];
    } else {
        pages = [1, -1, page-1, page, page+1, -2, maxPage];
    }

    return (
        <div className="pagination flex items-center justify-between bg-white px-3 md:px-4 mt-7 sm:px-1">

        <div className="flex flex-1 justify-between sm:hidden max-w-md ml-auto mr-auto">
            {page >  1 ? (
                <Link 
                    to={newPageUrl(page-1)}
                    className="page-prev-btn relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-indigo-50"
                >
                    Previous
                </Link>
            ) : (
                <span className="select-none page-prev-btn relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-200 ">Previous</span>
            )}
            {page < maxPage ? (
                <Link 
                    to={newPageUrl(page+1)}
                    className="page-next-btn relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-indigo-50"
                >
                    Next
                </Link>
            ) : (
                <span className="select-none page-next-btn relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-200 ">Next</span>
            ) }
        </div>

        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
                <p className="text-sm text-gray-700">
                    <span className='hidden md:inline'>Showing&nbsp;</span>
                    <span className="font-medium">{(page - 1) * perPage + 1}</span>
                    <span>&nbsp;to&nbsp;</span>
                    <span className="font-medium">{Math.min(page * perPage, totalResults)}</span>
                    <span>&nbsp;of&nbsp;</span>
                    <span className="font-medium">{totalResults}</span>
                    <span className='hidden md:inline'>&nbsp;results</span>
                </p>
            </div>

            <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                {page >  1 ? (
                    <Link 
                        to={newPageUrl(page-1)}
                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-indigo-50 focus:z-20 focus:outline-offset-0"
                    >
                        {prevElement}
                    </Link>
                ) : (
                    <span className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-300 ring-1 ring-inset ring-gray-300">
                        {prevElement}
                    </span>
                )}
                {pages.map((cur) => 
                    <PageLink key={cur} curPage={page} pageUrl={newPageUrl(cur)} page={cur} />)
                }
                {page < maxPage ? (
                    <Link
                        to={newPageUrl(page+1)}
                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-indigo-50 focus:z-20 focus:outline-offset-0"
                    >
                        {nextElement}
                    </Link>
                ) : (
                    <span className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-300 ring-1 ring-inset ring-gray-300">
                        {nextElement}
                    </span>
                ) }
            </nav>
            </div>
        </div>

        </div>
    );
}