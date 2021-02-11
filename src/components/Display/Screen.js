import React from 'react';


// Styles 
import '../../styles/App.css';

const Screen = ({ display, currentOperation }) => {
    return (
        <div className='screen'>
            <p className='screen__currOperation'>{currentOperation}</p>
            <p className='screen__display'>{display}</p>
        </div>
    )
}

export default Screen;