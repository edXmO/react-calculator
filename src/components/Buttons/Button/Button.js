import React from 'react';
// Styles
import '../../../styles/App.css';

const Button = ({ onBtnClick, btn, action, operatorStyle }) => {

    const handleBtnClick = () => {
        onBtnClick(btn, action);
    }

    return (
        <button
            onClick={() => handleBtnClick()}
            className={`btn ${operatorStyle ? 'btn--operator' : 'btn--number'}`}>
            {btn}
        </button >
    )
}

export default Button;