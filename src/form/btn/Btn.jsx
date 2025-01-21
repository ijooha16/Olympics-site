import React from 'react'
import './btn.css'

const Btn = () => {
    const btnTxt = ['Add Country', 'Update']
    
    return (
        <>
        {btnTxt.map((txt) => {
            return (
                <button>
                    {txt}
                </button>
            )
        })}
        </>        
    )
}

export default Btn