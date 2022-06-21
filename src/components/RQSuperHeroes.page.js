import axios from "axios";
import { useQuery } from "react-query";

export const RQSuperHeroesPage = () => {
  const getData = () => {
    return axios.get("http://localhost:4000/superheroes");
  };
  const { isLoading, isFetching, data, isError, error } = useQuery(
    "get-heros",
    getData,
    {
      refetchOnMount: false,
      refetchOnWindowFocus: true,
    }
  );
  return (
    <div>
      <h2>React Query Super Heroes Page</h2>
      {isLoading && <h2>Loading...</h2>}

      {isFetching && <h2>Fetching...</h2>}

      {isError && <h2>Error was found : {error?.message}</h2>}

      <ul>
        {data?.data?.map((item, index) => {
          return (
            <li key={index}>
              {item?.name} -{item?.alterEgo}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
