import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import './Column.css'

const Column = ({data}) => {

  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    setDisplayData(data)
    console.log(data)
  }, [])
  
  // if (displayData.length == 0) {
  //   return (
  //     <>
      
  //     </>
  //   )
  // } else {
  //   return (
  //     <div className="column">
  //       {displayData.map((d) => {
  //         return <Tile data={d} />
  //       })}
  //     </div>
  //   )
  // }
  
}

export default Column;