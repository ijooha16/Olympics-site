import { useState } from 'react';
import React from 'react'
import './Form.css'
import Country from './input/Country'
import Medal from './input/Medal'
import Btn from './btn/Btn'

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
