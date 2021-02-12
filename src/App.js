import React from 'react';
import './styles/App.css';

// Components
import Logo from './components/Logo/Logo';
import Screen from './components/Display/Screen';
import Buttons from './components/Buttons/Buttons';

const SYMBOLS = [
    { 'key': '+', 'type': 'Action' },
    { 'key': '-', 'type': 'Action' },
    { 'key': '/', 'type': 'Action' },
    { 'key': 'Clear', 'type': 'Action' },
    { 'key': '7', 'type': 'Display' },
    { 'key': '8', 'type': 'Display' },
    { 'key': '9', 'type': 'Display' },
    { 'key': 'x', 'type': 'Action' },
    { 'key': '4', 'type': 'Display' },
    { 'key': '5', 'type': 'Display' },
    { 'key': '6', 'type': 'Display' },
    { 'key': 'e', 'type': 'Action' },
    { 'key': '1', 'type': 'Display' },
    { 'key': '2', 'type': 'Display' },
    { 'key': '3', 'type': 'Display' },
    { 'key': '%', 'type': 'Action' },
    { 'key': '0', 'type': 'Display' },
    { 'key': '.', 'type': 'Display' },
    { 'key': '<=', 'type': 'Action' },
    { 'key': '=', 'type': 'Action' }
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



