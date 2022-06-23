import axios from "axios";
import { useQuery } from "react-query";

// Geting data
const getData = ({ queryKey }) => {
  // Extract the ID from params
  const heroID = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroID}`);
};

export const useGetSuperHero = (heroID) => {
  return useQuery(["get-hero", heroID], getData);
};
