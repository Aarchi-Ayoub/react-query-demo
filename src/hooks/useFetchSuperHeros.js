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
    /**  onSuccess: (data) => {
      /**
       * Get request
       * queryClient.invalidateQueries("get-heros");
       */
    /** Handel response 
      queryClient.setQueryData("get-heros", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData?.data, data?.data],
        };
      });
    },*/
    // This function will fire before the mutation function is fired and is passed the same variables the mutation function would receive
    onMutate: async (newHero) => {
      /** 1 - Annuler toutes les actualisations sortantes afin qu'elles nécrasent pas notre màj optimiste */
      await queryClient.cancelQueries("get-heros");
      /** 2 - Attendre les données de la requête actuelle avant de faire une màj
       * NB : Cela nous aidera pour revenir en arrière à l'échec  de la requête
       */
      const prevData = queryClient.getQueryData("get-heros");
      /** 3 - MÀJ la liste avant le lancement de la requête */
      queryClient.setQueryData("get-heros", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData?.data,
            { id: oldQueryData?.data?.length + 1, ...newHero },
          ],
        };
      });
      /** 4 - En cas d'erreur on retourne l'ancienne data */
      return {
        prevData,
      };
    },
    // This function will fire if the mutation encounters an error and will be passed the error.
    onError: (error, newHero, context) => {
      console.log("An error was found on trying add ", newHero);
      console.log("Error object = ", error);
      // En cas d'erreur on retourne l'ancienne data
      queryClient.setQueryData("get-heros", context.prevData);
    },
    // This function will fire when the mutation is either successfully fetched or encounters an error and be passed either the data or error
    onSettled: () => {
      // Refetch list
      queryClient.invalidateQueries("get-heros");
    },
  });
};
