import { useState } from 'react';
import React from 'react'
import '../App.css'
import Country from './Country'
import Medal from './Medal'
import Btn from './Btn'

const Form = ({ setDatas }) => {
    const [medals, setMedals] = useState(['','',''])
    const [country, setCountry] = useState('')
  
  return (
    <div id='form_container'>
        <form>
          <Country country={country} setCountry={setCountry}/>
          <Medal medals={medals} setMedals={setMedals}/>
        </form>
        <div>
          <Btn 
            medals={medals} 
            setMedals={setMedals}
            country={country} 
            setCountry={setCountry}
            setDatas={setDatas}/>
        </div>
    </div>
  )
}

export default Form
