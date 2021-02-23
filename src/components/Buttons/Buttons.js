import React from 'react';

// Components
import Button from './Button/Button';

// Styles 
import '../../styles/App.css';

const Buttons = ({ symbols }) => {
    const renderBtn = symbols.map(symbol => {
        const { key, type } = symbol;
        if (type === 'Action' || type === 'Command') {
            return <Button key={key} btn={key} type={type} operatorStyle={'btn--operator'} />
        }
        if (type === 'Display') {
            return <Button key={key} btn={key} type={type} />
        }
        else {
            return;
        }
    })

    return (
        <div className='buttons' >
            {renderBtn}
        </div>
    )
}

export default Buttons;


// Button component props
// onBtnClick={onBtnClick} action={action} 