"use client";
import React from "react";
import { useQuery, useQueries } from "@tanstack/react-query";
import axios from "axios";

async function fetchSuperHero() {
  try {
    const response = await axios.get(`http://localhost:8080/superheroes`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch superheroes");
  }
}

async function fetchFriends() {
  try {
    const response = await axios.get(`http://localhost:8080/friend`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch superheroes");
  }
}

const ParallelQueries = () => {
   const [{data:superHeros,isError:superHerosError,isLoading:supersLoading},{data:friends,isError:friendsError,isLoading:friendsLoading}] = useQueries({
    queries: [
      { queryKey: ["superheroes"], queryFn: fetchSuperHero },
      { queryKey: ["friends"], queryFn: fetchFriends },
    ],
  });
  console.log(superHeros,superHerosError,supersLoading,"-------",friends,friendsError,friendsLoading)
  return <div>page</div>;
};

export default ParallelQueries;
