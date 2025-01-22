import React from 'react'
import './input.css'

const Medal = ({ medals, setMedals }) => {
  const rank = ['Gold', 'Silver', 'Bronze']
  const inputHandler = (e, idx) => {
    const updatedMedals = [...medals]
    updatedMedals[idx] = e.target.value
    setMedals(updatedMedals)
  }
  
  return (
    <>
      {rank.map((rank, idx) => {
        return (
          <label key={idx}>
            {rank}
            <input 
              type="number" 
              min='0'
              value={medals[idx]}
              onChange={e => inputHandler(e, idx)}
            />
          </label>
        )
      })}
    </>
  )
}

export default Medal