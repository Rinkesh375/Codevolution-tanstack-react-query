"use client";
import React from "react";
import { useMutation, useQuery ,useQueryClient} from "@tanstack/react-query";
import axios from "axios";

const hero = {
  name: "Rinkesh",
  alterEgo: "Full Stack Developer",
};

const addNewHero = async (data) => {
  return await axios.post(`http://localhost:8080/superheroes`, data);
};

async function fetchSuperHero() {
  try {
    const response = await axios.get(`http://localhost:8080/superheroes`);
    return response;
  } catch (error) {
    throw new Error("Failed to fetch superheroes");
  }
}

const AddHero = () => {
    const queryClient = useQueryClient();
  const { isLoading, isError, error, mutate, isSuccess } = useMutation({
    mutationFn: addNewHero,
    onSuccess: (data) => {
        /*
        //This onSuccess code will update the UI or we can say it will show the new added data by doing invalidte queryClient.invalidateQueries("super-hero-add-page")
        
        return queryClient.invalidateQueries(["super-hero-add-page"])
        */

         // "------------------------------------------------------------------------"
       
         /*
         //without calling Invalid or api now we set the data in current "super-hero-add-page" key
         queryClient.setQueryData(["super-hero-add-page"],(oldQueryData)=>{
            return {
                ...oldQueryData,
                data:[...oldQueryData.data,data.data]
            }
         })
         */
    },
  });

  const {
    data,
    isError: superError,
    error: superErrorMessage,
    isLoading: superHeroLoading,
  } = useQuery({
    queryKey: ["super-hero-add-page"],
    queryFn: fetchSuperHero,
  });

  const handleAddNewDataButtonClick = () => {
    mutate(hero);
  };
  return (
    <>
      <div>
        <button onClick={handleAddNewDataButtonClick}>Add Data</button>
      </div>
      {data?.data.map((hero) => (
        <h1 key={hero.id}>{hero?.name} {hero?.id}</h1>
      ))}
    </>
  );
};

export default AddHero;
