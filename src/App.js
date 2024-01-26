// import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider, defer } from "react-router-dom";
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Movie from './pages/Movie';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', 
        element: <Home />,
        loader: ({ request }) => {
          const urlParamsIdx = request.url.indexOf('?');
          const urlParams = urlParamsIdx >= 0 ? 
            request.url.substring(urlParamsIdx + 1) : '';
          const urlParamsObj = new URLSearchParams(urlParams);
          const s = urlParamsObj.get('s');
          const type = urlParamsObj.get('type') || 'all';
          const page = Number(urlParamsObj.get('page')) || 1;
          if (!s) return defer({}); // StartContent
          let typeStr = type === 'all' ? '' : `&type=${type}`;
          let pageStr = page === 1 ? '' : `&page=${page}`;
          const promise = fetch(`${API_URL}&s=${s}${typeStr}${pageStr}`)
            .then((response) => response.json());
          return defer({ promise });
        }
      },
      {
        path: 'movie/:movieId',
        element: <Movie />,
        loader : ({ params }) => {
          const promise = fetch(`${API_URL}&i=${params.movieId}&plot=full`)
            .then((response) => response.json());
          return defer({ promise });
        }
      },
      {
        path: '*',
        element: <NotFound />
      },
    ]
  }
], {
  basename: '/react-movies'
});

export default function App() {
  return <RouterProvider router={router} />;
}
