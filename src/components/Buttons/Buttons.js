import React from 'react';

// Components
import Button from './Button/Button';

// Styles 
import '../../styles/App.css';

const Buttons = ({ symbols }) => {
    const renderBtn = symbols.map(symbol => {
        const { key, type } = symbol;
        if (type === 'Operator') {
            return <Button key={key} btn={key} operatorStyle={'btn--operator'} />
        }
        if (type === 'Number') {
            return <Button key={key} btn={key} />
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