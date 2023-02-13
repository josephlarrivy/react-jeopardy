import React from "react";
// import './Tile.css'
import './CategoryTile.css'

const CategoryTile = ({c}) => {

  return (
    <div className="category-tile">
      <p>{c.title}</p>
      
    </div>
  )
}

export default CategoryTile;