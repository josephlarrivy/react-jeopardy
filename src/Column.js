import React from "react";
import Tile from "./Tile";
import './Column.css'

const Column = ({data}) => {

  console.log(data)

  return (
    <div className="column">
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />

    </div>
  )
}

export default Column;