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
        res.data[randIdx].clues_count > 100
      )
      categories.push(res.data[randIdx])
      randIdxsArray.push(randIdx)
    }
    return categories;
  }

  const getClues = async (categories) => {

    let packagedClues = [];

    for (let category of categories) {

      let categoryClues = [];
      let num = 100;

      const res = await axios.get(
        `http://jservice.io/api/clues?category=${category.id}`
      )
      for (let item of res.data) {
        if (item.value == num && item.value <= 500) {
          categoryClues.push(item)
          num +=100
        }
      }
      packagedClues.push(categoryClues)
    }
    return packagedClues
  }  


  return [getCategories, getClues];
}

export default useJService;