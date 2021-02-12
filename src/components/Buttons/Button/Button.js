import React from 'react';
// Styles
import '../../../styles/App.css';
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { clear_screen, del, lastKey_pressed, decimal, equals } from '../../../actions';

const Button = ({ type, btn, operatorStyle }) => {

    const currDisplay = useSelector(({ calculator }) => calculator.screen);
    const lastType = useSelector(({ calculator }) => calculator.type);
    const dispatch = useDispatch();

    const handleBtnClick = (btn, type) => {
        if (type === 'Display') {
            if (btn === '.') {
                if (currDisplay.includes('.') || currDisplay[-1] === '.') return;
                return dispatch(decimal(currDisplay));
            }
            dispatch(lastKey_pressed(btn, type));
        }
        if (type === 'Action') {
            if (lastType === 'Action') return;
            switch (btn) {
                case '+':
                    console.log('add');
                    dispatch(lastKey_pressed(btn, type));
                    return
                case '-':
                    console.log('subtract');
                    return dispatch(lastKey_pressed(btn, type));
                case 'x':
                    console.log('multiply')
                    return dispatch(lastKey_pressed(btn, type));
                case '/':
                    console.log('divide');
                    return dispatch(lastKey_pressed(btn, type));
                case '%':
                    console.log('mod');
                    return dispatch(lastKey_pressed(btn, type));
                case 'e':
                    console.log('exponential');
                    return dispatch(lastKey_pressed(btn, type));
            }
        }
        if (type === 'Command') {
            switch (btn) {
                case 'Clear':
                    console.log('Clearing screen');
                    return dispatch(clear_screen());
                case 'DEL':
                    console.log('delete last key pressed');
                    return dispatch(del(currDisplay));
                case '=':
                    console.log('equals pressed');
                    return dispatch(equals(currDisplay));
            }
        }
    }
    return (
        <button
            onClick={() => handleBtnClick(btn, type)}
            className={`btn ${operatorStyle ? 'btn--operator' : 'btn--number'}`}>
            {btn}
        </button >
    )
}

export default Button;
