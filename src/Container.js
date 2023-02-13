import React, { useEffect, useState } from "react";
import Column from './Column'
import useJService from "./hooks/useJService";
import Tile from "./Tile";
import CategoryTile from "./CategoryTile";
import LoadingSpinner from "./LoadingSpinner";
import { render } from "@testing-library/react";


const Container = () => {

  const [getCategories, getClues] = useJService();

  const [categories, setCategories] = useState([]);
  const [displayClues, setDisplayClues] = useState(false);
  const [loading, setLoading] = useState(true)


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
        <h4>Loading</h4>
        <LoadingSpinner />
      </>
    )
  } else {
    console.log(displayClues)
    return (
      <>
        {categories.map((c) => {
          return <CategoryTile c={c}/>
        })}
        {displayClues.map((data) => {
          return <Column data={data} />
        })}
      </>
    )
  }
}

export default Container;