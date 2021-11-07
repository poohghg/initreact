import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { name } from './common';
import ReactQuery from './components/ReactQuery';
import InfiniteQueries from './components/InfiniteQueries';

const queryClinet = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClinet}>
      <InfiniteQueries />
    </QueryClientProvider>
  );
}

export default App;
