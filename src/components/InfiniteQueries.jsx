import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useQuery, useQueryClient, useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';

// test url "https://api.hnpwa.com/v0/news/1.json";

const fetchProjects = async ({ pageParam = 1 }) => {
  console.log('pageParam', pageParam);
  const url = `https://api.hnpwa.com/v0/news/${pageParam}.json`;
  const datas = await axios.get(url);
  return datas.data;
};

const InfiniteQueries = () => {
  const queryClinet = useQueryClient();
  const [page, setPage] = useState(1);
  const {
    data: todos,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery('todos', fetchProjects, {
    // eslint-disable-next-line no-shadow
    getNextPageParam: () => page,
  });

  const [ref, inView] = useInView();

  useEffect(() => {
    fetchNextPage(page);
  }, [page]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !isFetchingNextPage && status !== 'loading') {
      setPage((prevState) => prevState + 1);
    }
  }, [inView, status]);

  if (status === 'loading') {
    return <div> loading </div>;
  }
  if (status === 'error') {
    return <div> error </div>;
  }

  // const nextPage = () => {
  //   setpage((prev) => prev + 1);
  // };

  console.log('todos', todos.pages);
  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        {todos.pages.map((group, index) => (
          <Fragment key={index}>
            {group.map((data, i) => (
              <div key={data.id} style={{ color: i === 0 && 'red' }}>
                {data.id} / {data.title}
              </div>
            ))}
          </Fragment>
        ))}
      </div>
      {/* <button onClick={() => nextPage()}> + </button> */}
      <div ref={ref}>{page}</div>
    </div>
  );
};

export default InfiniteQueries;
