"use client"
import React from 'react'
import { useQuery } from "@tanstack/react-query";
import axios from "axios"

async function fetchSingleSuperHero(data) {
    
    try {
      const response = await axios.get(`http://localhost:8080/superheroes/${data?.queryKey[1]}`);
      return response;
    } catch (error) {
      throw new Error("Failed to fetch superheroes");
    }
  }


const SingleHeroDetails = ({params:{id}}) => {
    const {data,isLoading,isFetching,isError,error} = useQuery({
        queryKey: ["super-hero",id],
        queryFn: fetchSingleSuperHero,
         staleTime:(600 * 1000),
         select:(data)=>data.data
     
    })
  return (
    <div>
        <h1>{data?.id}</h1>
        <p>{data?.name}</p>
    </div>
  )
}

export default SingleHeroDetails;