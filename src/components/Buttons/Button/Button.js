import React from 'react';
// Styles
import '../../../styles/App.css';
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { clear_screen, del, lastKey_pressed, decimal, equals, addOperator } from '../../../actions';
// Types
import { ADD, SUBTRACT, DIVIDE, MULTIPLY, MOD, EXP } from '../../../actions/types';

const Button = ({ type, btn, operatorStyle }) => {

    const lastResult = useSelector(({ calculator }) => calculator.result);
    const currDisplay = useSelector(({ calculator }) => calculator.screen);
    const lastType = useSelector(({ calculator }) => calculator.lastType);
    const dispatch = useDispatch();

    const handleBtnClick = (btn, type, lastType) => {
        if (type === 'Display') {
            if (btn === '.') {
                if (currDisplay.includes('.') || currDisplay[-1] === '.') return;
                return dispatch(decimal(currDisplay));
            }
            console.log('number', btn, 'pressed');
            dispatch(lastKey_pressed(btn, type));
        }
        if (type === 'Command') {
            switch (btn) {
                case 'Clear':
                    return dispatch(clear_screen());
                case 'del':
                    return dispatch(del(currDisplay));
                case '=':
                    let newOperation = lastResult + currDisplay;
                    return dispatch(equals(newOperation));
            }
        }
        if (type === 'Action' && lastType !== type) {
            switch (btn) {
                case '+':
                    dispatch(addOperator(currDisplay, '+', ADD, type));
                    return
                case '-':
                    dispatch(addOperator(currDisplay, '-', SUBTRACT, type));
                    return
                case 'x':
                    dispatch(addOperator(currDisplay, '*', MULTIPLY, type));
                    return
                case '/':
                    dispatch(addOperator(currDisplay, '/', DIVIDE, type));
                    return
                case '%':
                    dispatch(addOperator(currDisplay, '%', MOD, type));
                    return
                case 'e':
                    dispatch(addOperator(currDisplay, 'e', EXP, type));
                    return
            }
        }
    }
    return (
        <button
            onClick={() => handleBtnClick(btn, type, lastType)}
            className={`btn ${operatorStyle ? 'btn--operator' : 'btn--number'}`}>
            {btn}
        </button >
    )
}

export default Button;
