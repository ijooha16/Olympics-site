import { useState } from 'react';
import React from 'react'
import './List.css'
import DeleteData from './DeleteData'

const List = ({ datas, setDatas }) => {
  const medal = ['Gold', 'Silver', 'Bronze']
  const localData = JSON.parse(localStorage.getItem('olympics')) || [];

  const changeHandler = (option) => {
    let data = [...localData]

    //'-'값 0으로 변환
    data = data.map(item => {
      item[1] = item[1].map(value => value === '-' ? 0 : value);
      return item;
    });
    
    if (option === 'Gold') {
      data.sort((a,b) => b[1][0] - a[1][0]);
    }
    if (option === 'Silver') {
      data.sort((a,b) => b[1][1] - a[1][1]);
    }
    if (option === 'Bronze') {
      data.sort((a,b) => b[1][2] - a[1][2]);
    }

    setDatas(data);
  }
  
  return (
    <div id='list_container'>
      <div className='list_title'>
        <div className='idx'></div>
        <div className='country'>Country</div>
        {medal.map((el) => {
          return (
            <div className='medal'>
              {el}
            </div>
          )
        })}
        <select 
          id="sort"
          onChange={(e) => changeHandler(e.target.value)}
        >
            <option value="Gold">Gold</option>
            <option value="Silver">Silver</option>
            <option value="Bronze">Bronze</option>
        </select>
      </div>
      {datas.map((el, idx) => {
        return (
          <div id={el[0]} className='lists'>
            <div className='idx'>{idx+1}</div>
            <div className='country'>{el[0]}</div>
            <div className='medal'>{el[1][0] || '-'}</div>
            <div className='medal'>{el[1][1] || '-'}</div>
            <div className='medal'>{el[1][2] || '-'}</div>
            <DeleteData idx={idx} setDatas={setDatas}/>
          </div>
        )
      })}
    </div>
  )
}

export default List