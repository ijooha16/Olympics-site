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
            <input 
              type="number" 
              min='1'
              placeholder={rank}
              value={medals[idx]}
              onChange={e => inputHandler(e, idx)}
              style={{

              }}
            />
          </label>
        )
      })}
    </>
  )
}

export default Medal