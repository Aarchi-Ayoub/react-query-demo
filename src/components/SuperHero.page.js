import React from "react";
import { useParams } from "react-router-dom";
import { useGetSuperHero } from "../hooks/useGetSuperHero";

export const SuperHero = () => {
  const { heroId } = useParams();
  const { data } = useGetSuperHero(heroId);
  return (
    <div>
      {data?.data?.alterEgo} == {data?.data?.name}
    </div>
  );
};
