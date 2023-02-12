import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import './Column.css'

const Column = ({data}) => {

  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    selectQuestionsToDisplay(data)
  },[])

  const selectQuestionsToDisplay = (questionData) => {
    let questions = [];
    const points = [100, 200, 300, 400, 500]
    while (points.length) {
      for (let p of points) {
        for (let question of questionData) {
          if (question.value == points[0]) {
            // console.log(points[0])
            // console.log(question)
            questions.push(question)
            points.shift()
          }
        }
      }
    }
    setDisplayData(questions)
  }
  
  if (displayData.length == 0) {
    return (
      <>
      
      </>
    )
  } else {
    return (
      <div className="column">
        {displayData.map((d) => {
          return <Tile data={d} />
        })}
      </div>
    )
  }
  
}

export default Column;