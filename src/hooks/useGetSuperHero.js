import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

// Geting data
const getData = ({ queryKey }) => {
  // Extract the ID from params
  const heroID = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroID}`);
};

export const useGetSuperHero = (heroID) => {
  const queryClient = useQueryClient();
  return useQuery(["get-hero", heroID], getData, {
    initialData: () => {
      const hero = queryClient
        .getQueryData("get-hero")
        ?.data?.find((hero) => hero?.id === heroID);
      if (hero) {
        return { data: hero };
      } else {
        return undefined;
      }
    },
  });
};
