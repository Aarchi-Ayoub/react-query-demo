import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

// Geting users
const getUser = (id) => {
  return axios.get(`http://localhost:4000/users/${id}`);
};

// Geting jobs
const getJobs = (id) => {
  return axios.get(`http://localhost:4000/jobs/${id}`);
};

export function DependentQueries({ email }) {
  const { data: user } = useQuery(["user", email], () => getUser(email));

  const userID = user?.data?.name;
  const { data: jobs } = useQuery(["jobs", userID], () => getJobs(userID), {
    enabled: !!userID,
  });

  return <div>DependentQueries</div>;
}
