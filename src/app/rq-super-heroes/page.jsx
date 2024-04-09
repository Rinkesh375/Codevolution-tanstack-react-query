"use client";
import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

async function fetchSuperHero() {
  try {
    const response = await axios.get(`http://localhost:8080/superheroes`);
    return response;
  } catch (error) {
    throw new Error("Failed to fetch superheroes");
  }
}

const TanstackQueryFetch = () => {
  const { data, isError, isLoading, error, isFetching,refetch } = useQuery({
    queryKey: ["superheroes"],
    queryFn: fetchSuperHero,
     staleTime:(1 * 1000),//after this given time(20 seconds) refetch data will be done
    // cacheTime:(20 * 1000) // after this time(20 seconds)  data will be thrown in the garbage collector,
    // refetchOnMount:true, //if we don't specify staleTime then whenever our component mount and page(tab) focused it refetch the data and if we have specified stale time then after the stale time completion only data will be refetched
    // refetchOnWindowFocus:true, // if we don't specify staleTime then whenever our this website window(tab) focused it refetches the data and if we have specified stale time then after the stale time completion only data will be refetched
    // refetchInterval:2000, // This will refetch the data no matter application is the background or foreground after every 2 seconds the data fetch will be called even if we have staleTime greater than this will be called  after refetchInterval:2000 delay time
    //  refetchIntervalInBackground:true // This will refetch the data api call only when application goes in backgrond (but if we have specified stale time then it be called after stale time)
   // enabled: false, //If we enabled:false then it can only be called using refetch function calling and in that secenario staletime,refetchInterval:2000 etc won't work
    select:(data)=>{ //using select I can extract and return only needed data from the api and data extract and updated data only be stored in cache
       return data.data.map((hero)=>({id:hero.id,name:hero?.name}))
    }
  });

 
  return (
    <>
    <button onClick={refetch}>Custom fetch </button>
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
