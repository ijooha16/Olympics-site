import React from 'react'
import './input.css'

const Medal = () => {
  const rank = ['Gold', 'Silver', 'Bronze']
  
  return (
    <>
      {rank.map((rank) => {
        return (
          <label>
            {rank}
            <input type="number" min={0} />
          </label>
        )
      })}
    </>
  )
}

export default Medal