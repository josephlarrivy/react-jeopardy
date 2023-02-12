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

  const getClues = async (category) => {
    let allClues = [];

    // for (let num of points) {
      const res = await axios.get(
        `http://jservice.io/api/clues?category=${category.id}`
      )

      for (let item of res.data) {
        allClues.push(item)
      } 
      
      // console.log(allClues)

      let returnClues = [];
      let count=0;
      let points = [100, 200, 300, 400, 500]
      // while (returnClues.length < 5) {
        for (let point of points) {
          // console.log(point)
          for (let clue of allClues) {
            // console.log(clue)
            if (
              clue.value == point && 
              !returnClues.includes(clue) &&
              returnClues.length < point/100
              ) {
              returnClues.push(clue)
              // console.log(clue)
              // return
            }
            // break
          }
        // }
        

      }

    // console.log(returnClues)
    return returnClues;
  }  









  return [getCategories, getClues];
}

export default useJService;