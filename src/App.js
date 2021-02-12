import React from 'react';
import './styles/App.css';

// Components
import Logo from './components/Logo/Logo';
import Screen from './components/Display/Screen';
import Buttons from './components/Buttons/Buttons';

const SYMBOLS = [
    { 'key': '+', 'type': 'Operator' },
    { 'key': '-', 'type': 'Operator' },
    { 'key': '/', 'type': 'Operator' },
    { 'key': 'Clear', 'type': 'Operator' },
    { 'key': '7', 'type': 'Number' },
    { 'key': '8', 'type': 'Number' },
    { 'key': '9', 'type': 'Number' },
    { 'key': 'x', 'type': 'Operator' },
    { 'key': '4', 'type': 'Number' },
    { 'key': '5', 'type': 'Number' },
    { 'key': '6', 'type': 'Number' },
    { 'key': 'e', 'type': 'Operator' },
    { 'key': '1', 'type': 'Number' },
    { 'key': '2', 'type': 'Number' },
    { 'key': '3', 'type': 'Number' },
    { 'key': '%', 'type': 'Operator' },
    { 'key': '0', 'type': 'Number' },
    { 'key': '.', 'type': 'Number' },
    { 'key': '<=', 'type': 'Number' },
    { 'key': '=', 'type': 'Number' }
];

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

// screen props
// display={screenValue} currentOperation={currentOperation}

// buttons props
// onBtnClick={getBtnClicked} 

 // const clearScreen = () => {
    //     setScreenValue('0');
    // }

    // const handleAction = action => {
    //     if (action === 'clear_screen') {
    //         clearScreen();
    //     }
    // }

    // const getBtnClicked = (btn, action) => {
    //     if (screenValue === '0') {
    //         setScreenValue(btn);
    //     }
    //     setScreenValue(prevValue => prevValue + btn);
    //     handleAction(action);
    // }

