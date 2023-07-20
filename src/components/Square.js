import React, { useState } from 'react'

export default function Square({value , onSquareClick}) {
    // const[value, setValue] = useState('')
   
  return (
    <button className='sqaure'onClick={onSquareClick}>{value}</button>

  )
}
