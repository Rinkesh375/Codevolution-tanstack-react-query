"use client";
import React, { useState } from "react";
import { useQuery,keepPreviousData } from "@tanstack/react-query";
import axios from "axios";
async function fetchColors(page) {
  const response = await axios.get(
    `http://localhost:8080/colors?_page=${page}&_limit=2`
  );
  return response;
}
const PaginationWithPreviousData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isError, error, data,isFetching } = useQuery({
    queryKey: ["colors", currentPage],
    queryFn: () => fetchColors(currentPage),
    placeholderData: keepPreviousData,
  });



 

  return (
    <>
    
        {data?.data?.map((color) => (
          <div key={color.id}>
            <h1>
              {color?.id} {color?.label}
            </h1>
          </div>
        ))
      }

      
    
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
          <button>{currentPage}</button>
          <button
            disabled={currentPage === data?.headers["x-total-count"] / 2}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
     
     
    </>
  );
};

export default PaginationWithPreviousData;
