import { useState } from 'react';
import React from 'react'
import './List.css'
import DeleteData from './DeleteData'

const List = ({ datas, setDatas }) => {
  const medal = ['Gold', 'Silver', 'Bronze']
  
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
      </div>
      {datas.map((el, idx) => {
        return (
          <div id={el[0]} className='lists'>
            <div className='idx'>{idx+1}</div>
            <div className='country'>{el[0]}</div>
            <div className='medal'>{el[1][0]}</div>
            <div className='medal'>{el[1][1]}</div>
            <div className='medal'>{el[1][2]}</div>
            <DeleteData idx={idx} setDatas={setDatas}/>
          </div>
        )
      })}
    </div>
  )
}

export default List