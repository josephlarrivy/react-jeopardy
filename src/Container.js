import React, { useEffect } from "react";
import Column from './Column'
import useJService from "./hooks/useJService";

const Container = () => {

  const [getCategories] = useJService();

  useEffect(() => {
    const getData = async () => {
      const categories = await getCategories();
      console.log(categories)
    }
    getData()

    const getQuestions = async () => {
      const 
    }
  }, [])
 

  return (
    <>
      <h1>Jeopardy!</h1>
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
    </>
  )
}

export default Container;