import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactQuery from './components/ReactQuery';
import InfiniteQueries from './components/InfiniteQueries';
import Reactmobilestylepicker from './components/Reactmobilestylepicker';
import './styles/App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 120000,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Reactmobilestylepicker />
    </QueryClientProvider>
  );
}

export default App;
