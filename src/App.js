import React, { useState } from 'react';
import './styles/App.css';

// Components
import Logo from './components/Logo/Logo';
import Screen from './components/Display/Screen';
import Buttons from './components/Buttons/Buttons';

const SYMBOLS = [
    { 'key': '+', 'type': 'Operator', 'action': 'plus' },
    { 'key': '-', 'type': 'Operator', 'action': 'minus' },
    { 'key': '/', 'type': 'Operator', 'action': 'divide' },
    { 'key': 'Clear', 'type': 'Operator', 'action': 'clear_screen' },
    { 'key': '7', 'type': 'Number' },
    { 'key': '8', 'type': 'Number' },
    { 'key': '9', 'type': 'Number' },
    { 'key': 'x', 'type': 'Operator', 'action': 'multiply' },
    { 'key': '4', 'type': 'Number' },
    { 'key': '5', 'type': 'Number' },
    { 'key': '6', 'type': 'Number' },
    { 'key': 'e', 'type': 'Operator', 'action': 'exp' },
    { 'key': '1', 'type': 'Number' },
    { 'key': '2', 'type': 'Number' },
    { 'key': '3', 'type': 'Number' },
    { 'key': '%', 'type': 'Operator', 'action': 'mod' },
    { 'key': '0', 'type': 'Number' },
    { 'key': '.', 'type': 'Number', 'action': 'decimal' },
    { 'key': '<=', 'type': 'Number', 'action': 'delete' },
    { 'key': '=', 'type': 'Number', 'action': 'equals' }
];

const App = () => {

    const [screenValue, setScreenValue] = useState('0')
    const [currentOperation, setCurrentOperation] = useState('0');

    const clearScreen = () => {
        setScreenValue('0');
    }

    const handleAction = action => {
        if (action === 'clear_screen') {
            clearScreen();
        }
    }

    const getBtnClicked = (btn, action) => {
        if (screenValue === '0') {
            setScreenValue(btn);
        }
        setScreenValue(prevValue => prevValue + btn);
        handleAction(action);
    }

    return (
        <div className='main-wrapper'>
            <Logo />
            <Screen display={screenValue} currentOperation={currentOperation} />
            <Buttons onBtnClick={getBtnClicked} clearScreen={clearScreen} symbols={SYMBOLS} />
        </div>
    )
}

export default App;