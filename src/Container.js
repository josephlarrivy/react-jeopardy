import React, { useEffect, useState } from "react";
import Column from './Column'
import useJService from "./hooks/useJService";
import Tile from "./Tile";
import CategoryTile from "./CategoryTile";
import { render } from "@testing-library/react";


const Container = () => {

  const [getCategories, getClues] = useJService();
  const [categories, setCategories] = useState([]);
  const [cluesData, setCluesData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [refresh, setRefresh] = useState(false)

  let cluesArray = [];

  useEffect(() => {
    const getCategoryData = async () => {
      const categories = await getCategories();
      // console.log(categories)
      setCategories(categories)
    }
    getCategoryData()
  }, [])
 
  useEffect(() => {
    const getClueData = async (cats) => {
      let clues = await getClues(cats)
      cluesArray.push(clues)
      // console.log(cluesArray)
    }
    for (let category of categories) {
      getClueData(category);
    }
    setLoading(false)
    // setCluesData(cluesArray)
    // console.log(cluesData)
  }, [refresh])

  useEffect(() => {
    setCluesData(cluesArray)
  }, [refresh])

  const handleClick = () => {
    setRefresh(true)
  }


  if (loading == true) {
    console.log('test')
    return (
      <>
        <button onClick={handleClick}>test</button>
        <h1>Jeopardy!</h1>
        <h4>Loading</h4>
      </>
    )
  } else {
    console.log(cluesData)
    return (
      <>
        <button onClick={handleClick}>test</button>
        <span>
          <h1>Jeopardy!</h1>
        </span>
        {categories.map((c) => {
          return <CategoryTile c={c}/>
        })}
        {cluesData.forEach((item) => {
          console.log(item)
          return (
            <div>
              <Column item={item} />
            </div>
          )
        })}
      </>
    )
  }


  
  
}

export default Container;