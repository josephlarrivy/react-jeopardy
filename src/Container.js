import React, { useEffect, useState } from "react";
import Column from './Column'
import useJService from "./hooks/useJService";
import Tile from "./Tile";
import CategoryTile from "./CategoryTile";


const Container = () => {

  const [getCategories, getClues] = useJService();
  const [categories, setCategories] = useState([]);
  // const [cluesArray, setCluesArray] = useState([]);

  let cluesArray = [];

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
      console.log(clues)
      // setCluesArray(cluesArray.push([clues]))
      cluesArray.push(clues)
      console.log(cluesArray)
    }
    for (let category of categories) {
      getClueData(category);
    }
  }, [categories])



  if (cluesArray.length < 4) {
    console.log('test')
    return (
      <>
        <h1>Jeopardy!</h1>
        <h4>Loading</h4>
      </>
    )
  } else {
    // console.log(cluesArray)
    return (
      <>
        <span>
          <h1>Jeopardy!</h1>
        </span>
        {categories.map((c) => {
          return <CategoryTile c={c}/>
        })}
        {cluesArray.map((data) => {
          return <Column data={data}/>
        })}
      </>
    )
  }
  
}

export default Container;