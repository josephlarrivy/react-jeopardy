import React from "react";
// import './Tile.css'
import './CategoryTile.css'

const CategoryTile = ({c}) => {

  console.log(c.title)

  return (
    <div className="category-tile">
      <p>{c.title}</p>
      {/* <p>this is a bunch of placeholder test that mimmics a question</p> */}
    </div>
  )
}

export default CategoryTile;