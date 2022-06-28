import React from "react";
import axios from "axios";
import { useInfiniteQuery } from "react-query";

// Geting users
const getCities = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/cities?_limit=2&_page=${pageParam}`);
};

export function Infinite() {
  // Fetching data query
  const { data, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery(["get-cities"], getCities, {
      getNextPageParam: (_lastPage, pages) => {
        if (pages?.length < 4) {
          return pages?.length + 1;
        } else {
          return undefined;
        }
      },
    });

  return (
    <div>
      <ul>
        {data?.pages?.map((objet) => {
          return objet?.data?.map((city) => {
            return <li key={city?.id}>{city?.name}</li>;
          });
        })}
      </ul>

      <button disabled={!hasNextPage} onClick={() => fetchNextPage()}>
        suivant
      </button>

      {isFetching && <h2>Fetching...</h2>}
      {isFetchingNextPage && <h2>Fetching NextPage...</h2>}
    </div>
  );
}
