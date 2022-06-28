import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

// Geting users
const getCities = (page) => {
  return axios.get(`http://localhost:4000/cities?_limit=2&_page=${page}`);
};

export function Paginaion() {
  // Page to show
  const [page, setPage] = useState(1);

  // Fetching data query
  const { data, isLoading, isError, error } = useQuery(
    ["get-cities", page],
    () => getCities(page)
  );
  // Fetching
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  // Error
  if (isError) {
    return <h2>Error : {error?.message || error}</h2>;
  }

  return (
    <div>
      <ul>
        {data?.data?.map((city) => {
          return <li key={city?.id}>{city?.name}</li>;
        })}
      </ul>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        précedent
      </button>
      <button disabled={page === 4} onClick={() => setPage(page + 1)}>
        suivant
      </button>
      <p>{page}</p>
    </div>
  );
}
