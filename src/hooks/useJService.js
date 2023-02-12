import React, { useEffect, useState } from "react";
import axios from "axios";


const useJService = () => {

  const getCategories = async () => {
    let res = await axios.get(
      "http://jservice.io/api/categories?count=100"
      )

    let categories = [];
    let randIdxsArray = [];

    while (categories.length < 6) {
      let randIdx = Math.floor(Math.random() * 99)
      if (
        !randIdxsArray.includes(randIdx) &&
        res.data[randIdx].clues_count > 5
      )
      categories.push(res.data[randIdx])
      randIdxsArray.push(randIdx)
    }
    return categories;
  }

  const getClues = async (categories) => {
    let clues = [];
    for (let category of categories) {
      const res = await axios.get(
        `http://jservice.io/api/clues?category=${category.id}`
      )
      clues.push(res.data)
    }
    return clues;
  }  









  return [getCategories, getClues];
}

export default useJService;