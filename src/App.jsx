import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFromApi } from './utils/api';
import { getApiConfiguration, getGenres } from './store/homeSlice';

import {
  Home,
  Explore,
  SearchResult,
  Details,
  PageNotFound,
  OutletLayout,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <OutletLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/:mediaType/:id',
        element: <Details />,
      },
      {
        path: '/search/:query',
        element: <SearchResult />,
      },
      {
        path: '/explore/:mediaType',
        element: <Explore />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  const { url } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration').then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + 'original',
        poster: res.images.secure_base_url + 'original',
        profile: res.images.secure_base_url + 'original',
      };

      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endpoint = ['tv', 'movie'];
    let allGenres = {};

    endpoint.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });
    dispatch(getGenres(allGenres));
  };

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
