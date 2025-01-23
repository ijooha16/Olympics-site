import React from 'react'
import '../App.css'
import DeleteData from './DeleteData'

const List = ({ datas, setDatas }) => {
  const medal = ['Gold', 'Silver', 'Bronze']
  const localData = JSON.parse(localStorage.getItem('olympics')) || [];

  //정렬 옵션 버튼 핸들러
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
    if (option === 'Total') {
      data.sort((a,b) => b[1].reduce((a,b) => a+b) - a[1].reduce((a,b) => a+b));
    }

    setDatas(data);
  }

  //리스트가 없을 때
  function listHandler() {
    if (datas.length === 0) {
      return (
        <div className='no_data_alert'>No data yet!</div>
      )
    }
    
    return datas.map((el, idx) => {
        return (
          <div key={el[0]} id={el[0]} className='lists'>
            <div className='idx'>{idx+1}</div>
            <div className='country'>{el[0]}</div>
            <div className='medal'>{el[1][0] || '-'}</div>
            <div className='medal'>{el[1][1] || '-'}</div>
            <div className='medal'>{el[1][2] || '-'}</div>
            <DeleteData idx={idx} setDatas={setDatas}/>
          </div>
        )
    })
  }
  
  return (
    <div id='list_container'>
      <div className='list_title'>
        <div className='idx'></div>
        <div className='country'>Country</div>
        {medal.map((el) => {
          return (
            <div key={el} className='medal'>
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
            <option value="Total">Total</option>
        </select>
      </div>
      {listHandler()}
    </div>
  )
}

export default List