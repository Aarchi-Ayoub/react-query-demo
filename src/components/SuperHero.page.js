import React from "react";
import { useParams } from "react-router-dom";
import { useGetSuperHero } from "../hooks/useGetSuperHero";

export const SuperHero = () => {
  const { heroId } = useParams();
  useGetSuperHero(heroId);
  return <div>SuperHero.page</div>;
};
