import React from 'react';
// Styles
import '../../../styles/App.css';

const Button = ({ btn, operatorStyle }) => {
    return (
        <button
            className={`btn ${operatorStyle ? 'btn--operator' : 'btn--number'}`}>
            {btn}
        </button >
    )
}

export default Button;


// const handleBtnClick = () => {
    //     onBtnClick(btn, action);
    // }

// button props 
// onClick={() => handleBtnClick()}