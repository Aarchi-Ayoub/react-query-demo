import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

export const useFetchSuperHeros = (pseudo, getData, onSuccess, onError) => {
  return useQuery(pseudo, getData, {
    onSuccess,
    onError,
    select: (data) => {
      let herosNames = data?.data?.map((hero) => hero?.name);
      return herosNames;
    },
  });
};

// Geting data
const postData = (hero) => {
  return axios.post("http://localhost:4000/superheroes", hero);
};

export const useAddSuperHeros = () => {
  const queryClient = useQueryClient();
  return useMutation(postData, {
    onSuccess: () => queryClient.invalidateQueries("get-heros"),
  });
};
