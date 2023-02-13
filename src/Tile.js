import React, { useState } from "react";
import './Tile.css'

const Tile = ({element}) => {

  const [display, setDisplay] = useState('value')

  const handleClick = () => {
    if (display == 'value') {
      setDisplay('question')
    } else if (display == 'question') {
      setDisplay('answer')
    } else if (display == 'answer') {
      setDisplay('blank')
    }
  }

  // console.log(element.value)

  if (display == 'value') {
    return (
      <div className="tile-value" onClick={handleClick}>
        <h2>{element.value}</h2>
      </div>
    )
  } else if (display == 'question') {
    return (
      <div className="tile-question" onClick={handleClick}>
        <p>{element.question}</p>
      </div>
    )
  } else if (display == 'answer') {
    return (
      <div className="tile-answer" onClick={handleClick}>
        <p>{element.answer}</p>
      </div>
    )
  } else if (display == 'blank') {
    return (
      <div className="tile-question" onClick={handleClick}>
        <p>X</p>
      </div>
    )
  }
  
}

export default Tile;