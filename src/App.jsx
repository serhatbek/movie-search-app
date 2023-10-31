import { useEffect, useState } from 'react';
import { fetchDataFromApi } from './utils/api';

import { Home, Explore, SearchResult, Details, PageNotFound } from './pages';

function App() {
  const apiTesting = () => {
    fetchDataFromApi('/movie/popular').then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    apiTesting();
  }, []);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
