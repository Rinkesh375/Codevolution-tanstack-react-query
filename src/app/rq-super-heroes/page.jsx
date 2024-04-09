"use client";
import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useCustomQuery from "@/components/customHook/useCustomQuery";



const TanstackQueryFetch = () => {
  const { data, isError, isLoading, error, isFetching,refetch } = useCustomQuery("superheroes-for-one",true)

 
  return (
    <>
 
      <h1>Tanstack Using</h1>
      <div>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : isError ? (
          <h1>{error?.message}</h1>
        ) : (
          // data?.data?.map((hero) => <h2 key={hero.id}>{hero?.name}</h2>)
          data?.map((hero) => <h2 key={hero.id}>{hero?.name}</h2>)
        )}
      </div>
    </>
  );
};

export default TanstackQueryFetch;
