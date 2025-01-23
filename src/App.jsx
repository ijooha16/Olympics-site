import { useState, useEffect } from 'react';
import './App.css'
import Form from './Components/Form'
import List from './Components/List'

function App() {
  const [datas, setDatas] = useState([])
  
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('olympics')) || [];
    const sorted = localData.sort((a,b) => b[1][0] - a[1][0])
    setDatas(sorted);
  }, []);
  
  return (
    <div id='container'>
      <h1>2024 Paris Olympics</h1>
      <Form setDatas={setDatas}/>
      <List datas={datas} setDatas={setDatas}/>
    </div>
  )
}

export default App