import React from "react";
import { useParams } from "react-router-dom";
import { useGetSuperHero } from "../hooks/useGetSuperHero";

export const SuperHero = () => {
  const { heroId } = useParams();
  const { data, isLoading } = useGetSuperHero(heroId);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      {data?.data?.alterEgo} == {data?.data?.name}
    </div>
  );
};
