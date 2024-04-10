"use client"
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// calling query one after another if all above queries runs successfully;
async function fetchYoutuberDetail(id){
    let response = await axios.get(`http://localhost:8080/youtuber/${id}`)
    return response.data
}

async function fetchYoutuberCourse(id){
    let response = await axios.get(`http://localhost:8080/courses/${id}`)
    return response.data
 }
const DepedentSeriesQueries = () => {
    const {data:youtuber,isError} = useQuery({
        queryKey:["youtuber-harry"],
        queryFn:()=>fetchYoutuberDetail("codewithharry@.com")
    })
    console.log(youtuber)
    const name = youtuber?.name; //by using this first youtube name is present in youtuber then name will have something otherwise it will be undefined
    const {data:courses} = useQuery({
        queryKey:["youtuber-course"],
        queryFn:()=>fetchYoutuberCourse(name),
        enabled:!!name //if enabled will be false then it function won't run and enabled will be true or string then it will run function
    })
    console.log(name,courses)
  return (
    <div>page</div>
  )
}

export default DepedentSeriesQueries