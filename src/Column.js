import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import './Column.css'
import { render } from "@testing-library/react";

const Column = ({item}) => {

  const [displayData, setDisplayData] = useState([]);

  console.log(item)

  // useEffect(() => {
  //   setDisplayData(data)
  //   console.log(data)
  // }, [])
  
  // if (!data) {
  //   return (
  //     <>
      
  //     </>
  //   )
  // } else {
    return (
      <div className="column">
        {/* <p>test</p> */}
        {item.map((data) => {
          render( <Tile data={data} /> )
        })}
      </div>
    )
  // }
  
}

export default Column;