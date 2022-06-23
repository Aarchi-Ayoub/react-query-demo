import axios from "axios";
import { useQuery } from "react-query";

export const RQSuperHeroesPage = () => {
  // Geting data
  const getData = () => {
    return axios.get("http://localhost:4000/superheroes");
  };

  // Success Callback
  const onSuccess = (data) => console.log("Success callback ==> ", data);

  // Failure Callback
  const onError = (error) => console.log("Failure callback ==> ", error);

  // Query
  const { isLoading, isFetching, data, isError, error, refetch } = useQuery(
    "get-heros",
    getData,
    {
      onSuccess,
      onError,
      select: (data) => {
        let herosNames = data?.data?.map((hero) => hero?.name);
        return herosNames;
      },
    }
  );

  return (
    <div>
      <h2>React Query Super Heroes Page</h2>
      {isLoading && <h2>Loading...</h2>}

      {isFetching && <h2>Fetching...</h2>}

      {isError && <h2>Error was found : {error?.message}</h2>}

      <button onClick={refetch}>Actualiser</button>
      <ul>
        {data?.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
