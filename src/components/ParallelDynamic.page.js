import axios from "axios";
import React from "react";
import { useQueries } from "react-query";

// Geting data
const getData = (heroID) => {
  return axios.get(`http://localhost:4000/superheroes/${heroID}`);
};

export function ParallelDynamic({ herosID }) {
  const result = useQueries(
    herosID.map((hero) => {
      return {
        queryKey: ["get-hero", hero],
        queryFun: () => getData(hero),
      };
    })
  );
  console.log({ result });
  return <div>ParallelDynamic</div>;
}
