import React from 'react'

const DeleteData = ({ idx, setDatas }) => {
    const localData = JSON.parse(localStorage.getItem('olympics')) || [];

    
    const clickHandler = (idx) => {
        const newData = localData.filter((_, index) => index !== idx );
        
        localStorage.setItem('olympics', JSON.stringify(newData)); //로컬스토리지에 저장
        setDatas(newData)
    }
    
    return (
        <div 
            id={idx}
            className='deletBtn'
            onClick={() => clickHandler(idx)}
        >
                delete
        </div>
    )
}

export default DeleteData