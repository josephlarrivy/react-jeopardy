import React, { useEffect, useState } from "react";
import Column from './Column'
import useJService from "./hooks/useJService";
import Tile from "./Tile";
import CategoryTile from "./CategoryTile";
import { render } from "@testing-library/react";


const Container = () => {

  const [getCategories, getClues] = useJService();

  const [categories, setCategories] = useState([]);
  const [displayClues, setDisplayClues] = useState(false);
  const [loading, setLoading] = useState(true)

  let cluesArray = [];

  useEffect(() => {

    const getData = async () => {
      const cats = await getCategories();
      setCategories(cats)
      const clues = await getClues(cats)
      setDisplayClues(clues)
    }

    getData()
  }, [])
 

  if (displayClues == false) {
    return (
      <>
        <h1>Jeopardy!</h1>
        <h4>Loading</h4>
      </>
    )
  } else {
    console.log(displayClues)
    return (
      <>
        <span>
          <h1>Jeopardy!</h1>
        </span>
        {categories.map((c) => {
          return <CategoryTile c={c}/>
        })}
        {displayClues.map((data) => {
          return <Column data={[data]} />
        })}
      </>
    )
  }


  
  
}

export default Container;