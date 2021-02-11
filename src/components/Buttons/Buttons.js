import React from 'react';

// Components
import Button from './Button/Button';

// Styles 
import '../../styles/App.css';

const Buttons = ({ onBtnClick, symbols }) => {
    const renderBtn = symbols.map(symbol => {
        const { key, type, action } = symbol;
        if (type === 'Operator') {
            return <Button key={key} btn={key} operatorStyle={'btn--operator'} onBtnClick={onBtnClick} action={action} />
        }
        if (type === 'Number') {
            return <Button key={key} btn={key} onBtnClick={onBtnClick} />
        }

    })

    return (
        <div className='buttons' >
            {renderBtn}
        </div>
    )
}

export default Buttons;