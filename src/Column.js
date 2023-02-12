import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import './Column.css'

const Column = ({data}) => {

  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    setDisplayData(data)
    console.log(data)
  }, [])
  
  // if (!data) {
  //   return (
  //     <>
      
  //     </>
  //   )
  // } else {
    return (
      <div className="column">
        {data.map((d) => {
          return <Tile data={d} />
        })}
      </div>
    )
  // }
  
}

export default Column;