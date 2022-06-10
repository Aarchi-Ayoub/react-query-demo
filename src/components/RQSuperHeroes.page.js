import axios from "axios";
import { useQuery } from "react-query";

export const RQSuperHeroesPage = () => {
  const { isLoading, isFetching, data, isError, error } = useQuery("get-heros", () => {
    return axios.get("http://localhost:4000/superheroes1");
  });
  const result = useQuery("get-heros", () => {
    return axios.get("http://localhost:4000/superheroes1");
  });

  console.log(result);
  console.log({ error });


  return (
    <div>
      <h2>React Query Super Heroes Page</h2>
      {isLoading && <h2>Loading...</h2>}

      {isFetching && <h2>Fetching...</h2>}

      {isError && <h2>Error was found : {error?.message}</h2>}

      {JSON.stringify(data)}
    </div>
  );
};
