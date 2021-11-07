import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useQuery, useQueryClient, useInfiniteQuery } from 'react-query';

// test url "https://api.hnpwa.com/v0/news/1.json";

async function getTodo(page) {
  try {
    console.log('page', page);
    const url = `https://api.hnpwa.com/v0/news/${page}.json`;
    console.log('url', url);
    const datas = await axios.get(url);
    console.log('datas', datas.data);
    return datas.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

const ReactQuery = () => {
  const queryClinet = useQueryClient();
  const [page, setpage] = useState(1);
  const {
    isLoading,
    isError,
    data: todos,
    error,
  } = useQuery(['todos', page], () => getTodo(page), {
    keepPreviousData: true,
  });
  console.log('todos', todos);
  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        {todos.length !== 0 &&
          todos.map((todo) => (
            <div>
              {todo.id} / {todo.title}
            </div>
          ))}
      </div>
      <button onClick={() => setpage((prev) => prev + 1)}> + </button>
      <div>{page}</div>
    </div>
  );
};

export default ReactQuery;
