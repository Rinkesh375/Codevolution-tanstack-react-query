"use client"
import React from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const hero = { name: "Rinkesh", alterEgo: "Full Stack Developer" };

const addNewHero = async (data) => {
    return await axios.post(`http://localhost:8080/superheroes`,data)
};

const AddHero = () => {
  const { isLoading, isError, error ,mutate,isSuccess} = useMutation({ mutationFn:addNewHero,onSuccess:()=>console.log("Data added successfully") });
  console.log(isSuccess,"-------------")
  const handleAddNewDataButtonClick = ()=>{
    mutate(hero)
  }
  return <button onClick={handleAddNewDataButtonClick}>Add Data</button>;
};

export default AddHero;
