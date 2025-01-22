import React from 'react'
import './btn.css'

const Btn = ({ medals, setMedals, country, setCountry, setDatas }) => {
    const btnTxt = ['Add Country', 'Update']

    //local data
    const localData = JSON.parse(localStorage.getItem('olympics')) || []

    //나라 추가 버튼
    const addBtnHandler = () => {
        //나라 입력값 없을 때
        if (!country) {
            alert("Don't forget to enter a country!")
        } else if (localData.some(data => data[0] === country)) {//로컬에 나라 정보가 있으면
            alert("This country has already been added!")
        } else {
            const newData = [...localData, [country, medals]];  //새 정보 추가
            localStorage.setItem('olympics', JSON.stringify(newData)); //로컬스토리지에 저장
            setDatas(newData); //상태 업데이트
            setCountry('') //입력값 초기화
            setMedals(['','',''])
        }
    }
    //업데이트 버튼
    const updateBtnHandler = (e) => {
        console.log('updateBtn clicked')
        //나라 입력값 없을 때
        if (!country) {
            alert("Don't forget to enter a country!")
        } else if (localData.some((data) => data[0] === country) && medals == [0,0,0]) { //로컬에 나라 정보가 있는데 메달이 없으면
            alert("Please enter the number of medals!")
        } else if (!localData.some((data) => data[0] === country)) { //로컬에 나라 정보 없음
            alert('This country is not in the list!')
        } else { //둘다 있을 때
            const newData = localData.map(data => // 기존 데이터를 업데이트
                data[0] === country ? [country, data[1].map((num, idx) => Number(num) + Number(medals[idx]))] : data
            );
            localStorage.setItem('olympics', JSON.stringify(newData)); // 로컬스토리지 업데이트
            setDatas(newData); // 상태 업데이트
            setCountry('') //입력값 초기화
            setMedals(['','',''])
        }
    }
    
    return (
        <>
        {btnTxt.map((txt, idx) => {
            return (
                <button className='submitBtn'
                    key = {idx}
                    onClick = {idx === 0 ? addBtnHandler : updateBtnHandler}
                >
                    {txt}
                </button>
            )
        })}
        </>        
    )
}

export default Btn