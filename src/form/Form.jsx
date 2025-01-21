import React from 'react'
import './Form.css'
import Country from './input/Country'
import Medal from './input/Medal'
import Btn from './btn/Btn'

const Form = () => {
  return (
    <div id='form_container'>
        <form>
          <Country/>
          <Medal/>
        </form>
        <div>
          <Btn/>
        </div>
    </div>
  )
}

export default Form