import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  useAddSuperHeros,
  useFetchSuperHeros,
} from "../hooks/useFetchSuperHeros";

export const RQSuperHeroesPage = () => {
  // My local state
  const [hero, setHero] = useState({
    name: "",
    alterEgo: "",
  });

  // Geting data
  const getData = () => {
    return axios.get("http://localhost:4000/superheroes");
  };

  // Success Callback
  const onSuccess = (data) => console.log("Success callback", data);

  // Failure Callback
  const onError = (error) => console.log("Failure callback ==> ", error);

  // Query
  const { isLoading, isFetching, data, isError, error, refetch } =
    useFetchSuperHeros("get-heros", getData, onSuccess, onError);
  const { mutate } = useAddSuperHeros();

  // Add new item
  const addhero = () => {
    mutate(hero);
  };

  return (
    <div>
      <h2>React Query Super Heroes Page</h2>
      {isLoading && <h2>Loading...</h2>}
      {isFetching && <h2>Fetching...</h2>}
      {isError && <h2>Error was found : {error?.message}</h2>}
      <div>
        <input
          name="name"
          value={hero?.name}
          onChange={(e) => setHero({ ...hero, name: e.target.value })}
        />
        <input
          name="alterEgo"
          value={hero?.alterEgo}
          onChange={(e) => setHero({ ...hero, alterEgo: e.target.value })}
        />

        <p>{JSON.stringify(hero)}</p>
        <button onClick={addhero}>Ajouter</button>
        <hr />
      </div>
      <button onClick={refetch}>Actualiser</button>
      <ul>
        {data?.map((item, index) => {
          return (
            <li key={index}>
              <Link to={`/SuperHero/${index + 1}`}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
