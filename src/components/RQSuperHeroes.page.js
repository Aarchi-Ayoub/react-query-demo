import axios from "axios"
import { useQuery } from "react-query"


export const RQSuperHeroesPage = () => {
  const { isLoading, isFetching, data, error } = useQuery('get-heros', () => { return axios.get('http://localhost:4000/superheroes') })
  console.log({
    isLoading,
    isFetching
  });
  return (
    <div>
      <h2>React Query Super Heroes Page</h2>
      {isLoading && <h2>Loading...</h2>}
      {isFetching && <h2>Fetching...</h2>}

      {error && <h2>Error was found : {error}</h2>}
      {JSON.stringify(data)}
    </div>
  )
}
