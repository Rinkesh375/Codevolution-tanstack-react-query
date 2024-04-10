"use client";
import React from "react";
import { useQuery,useQueryClient } from "@tanstack/react-query";
import axios from "axios";

async function fetchSingleSuperHero(data) {
  try {
    const response = await axios.get(
      `http://localhost:8080/superheroes/${data?.queryKey[1]}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch superheroes");
  }
}

const SingleHeroDetails = ({ params: { id } }) => {
  const queryClient = useQueryClient();
  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ["super-hero", id],
    queryFn: fetchSingleSuperHero,
    initialData:()=>{
      
      const singleHero = queryClient.getQueryData(["superheroes-1"])?.data?.find((hero)=>hero.id === +id);
       if(singleHero) return {data:singleHero}
      else undefined
    }
  });
 
  return (
    <>
      {isLoading  ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <h1>{data?.id}</h1>
          <p>{data?.name}</p>
        </div>
      )}
    </>
  );
};

export default SingleHeroDetails;
