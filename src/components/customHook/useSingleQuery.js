"use client"
import React from 'react'
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

async function fetchSingleSuperHero() {
  try {
    const response = await axios.get(`http://localhost:8080/superheroes`);
    return response;
  } catch (error) {
    throw new Error("Failed to fetch superheroes");
  }
}

const useCustomSingleQuery = (uniqueKey) => {
    return useQuery({
        queryKey: ["HEOR"],
        queryFn: fetchSingleSuperHero,
         staleTime:(1 * 1000)
     
    })
  

}

export  {useCustomSingleQuery};