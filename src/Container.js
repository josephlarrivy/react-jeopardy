import React, { useEffect, useState } from "react";
import Column from './Column'
import useJService from "./hooks/useJService";
import Tile from "./Tile";
import CategoryTile from "./CategoryTile";


const Container = () => {

  const [getCategories, getClues] = useJService();
  const [categories, setCategories] = useState([]);
  const [cluesArray, setCluesArray] = useState([]);

  useEffect(() => {
    const getCategoryData = async () => {
      const categories = await getCategories();
      console.log(categories)
      setCategories(categories)
    }
    getCategoryData()
  }, [])
 
  useEffect(() => {
    const getClueData = async (cats) => {
      let clues = await getClues(cats)
      // console.log(clues)
      setCluesArray(clues)
    }
    for (let category of categories) {
      getClueData(category);
    }
  }, [categories])

  if (cluesArray.length == 0) {
    return (
      <>
        <h1>Jeopardy!</h1>
        <h4>Loading</h4>
      </>
    )
  } else {
    return (
      <>
        <span>
          <h1>Jeopardy!</h1>
        </span>
        {categories.map((c) => {
          return <CategoryTile c={c}/>
        })}
        {cluesArray.map((d) => {
          return <Column data={d} />
        })}
      </>
    )
  }
  
}

export default Container;