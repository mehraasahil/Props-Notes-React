import React from 'react'

function Card(card) {
  return (
    <div className='card'>
        <h1>{card.name}</h1>
        <p>{card.number}</p>
    </div>
  )
}

export default Card