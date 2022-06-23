import { useQuery } from "react-query";

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
