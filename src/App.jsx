import { useState } from 'react';
import './App.css'
import Form from './form/Form'
import List from './list/List'

function App() {
  const [datas, setDatas] = useState([])
  
  return (
    <div id='container'>
      <h2>2024 Paris Olympics</h2>
      <Form setDatas={setDatas}/>
      <List datas={datas} setDatas={setDatas}/>
    </div>
  )
}

export default App