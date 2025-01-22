import React from 'react'
import './input.css'

const Country = ({ country, setCountry }) => {
  const inputHandler = (e) => {
    setCountry(e.target.value)
  }

  return (
    <label>
      Country
      <input 
        id='input_country'
        type="text"
        value={country}
        placeholder='Please enter country'
        onChange={(e) => inputHandler(e)}
      />
    </label>
  )
}

export default Country