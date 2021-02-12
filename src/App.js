import React from 'react';
import './styles/App.css';

import SYMBOLS from './models/symbolKeys';

// Components
import Logo from './components/Logo/Logo';
import Screen from './components/Display/Screen';
import Buttons from './components/Buttons/Buttons';


const App = () => {

    return (
        <div className='main-wrapper'>
            <Logo />
            <Screen />
            <Buttons symbols={SYMBOLS} />
        </div>
    )
}

export default App;



