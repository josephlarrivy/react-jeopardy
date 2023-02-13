import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import './Column.css'
import { render } from "@testing-library/react";

const Column = ({data}) => {

  return (
    <div className="column">
      {data.map((element) => {
        return <Tile element={element} />
      })}
    </div>
  )
    
}

export default Column;