import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFromApi } from './utils/api';
import { getApiConfiguration } from './store/homeSlice';
import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from 'react-router-dom';

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
    ],
  },
]);

function App() {
  const { url } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  console.log('home url data', url);

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular').then((res) => {
      dispatch(getApiConfiguration(res));
    });
  };

  useEffect(() => {
    apiTesting();
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
