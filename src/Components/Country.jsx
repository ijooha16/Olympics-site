import React from 'react'
import '../App.css'

//국가 인풋
const Country = ({ country, setCountry }) => {
  const inputHandler = (e) => {
    setCountry(e.target.value)
  }

  return (
    <label>
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