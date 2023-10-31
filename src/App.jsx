import { useEffect, useState } from 'react';
import { fetchDataFromApi } from './utils/api';
import { getApiConfiguration } from './store/homeSlice';

import { Home, Explore, SearchResult, Details, PageNotFound } from './pages';
import { useDispatch, useSelector } from 'react-redux';

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
      {url?.total_pages}
      <Home />
    </>
  );
}

export default App;
