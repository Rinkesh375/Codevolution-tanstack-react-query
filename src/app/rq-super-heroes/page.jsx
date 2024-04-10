"use client";
import React from "react";
import axios from "axios";
import Link from "next/link"
import { useQuery } from "@tanstack/react-query";
import useCustomQuery from "@/components/customHook/useCustomQuery";



const TanstackQueryFetch = () => {
  const { data, isError, isLoading, error, isFetching,refetch } = useCustomQuery("superheroes-1",true)

 
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
          data?.map(({id,name}) => <Link href={`/singleHeroDetail/${id}`} key={id}><h2 >{name}</h2></Link>)
        )}
      </div>
    </>
  );
};

export default TanstackQueryFetch;
