import React from 'react';
// Styles
import '../../../styles/App.css';
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { clear_screen, del, lastKey_pressed, decimal, equals, addOperator } from '../../../actions';
// Types
import { ADD, SUBTRACT, DIVIDE, MULTIPLY, MOD, EXP } from '../../../actions/types';

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
                    dispatch(addOperator(currDisplay, '+', ADD));
                    return
                case '-':
                    console.log('subtract');
                    dispatch(addOperator(currDisplay, '-', SUBTRACT));
                    return
                case 'x':
                    console.log('multiply');
                    dispatch(addOperator(currDisplay, '*', MULTIPLY));
                    return
                case '/':
                    console.log('divide');
                    dispatch(addOperator(currDisplay, '/', DIVIDE));
                    return
                case '%':
                    console.log('mod');
                    dispatch(addOperator(currDisplay, '%', MOD));
                    return
                case 'e':
                    console.log('add');
                    dispatch(addOperator(currDisplay, 'e', EXP));
                    return
            }
        }
        if (type === 'Command') {
            switch (btn) {
                case 'Clear':
                    console.log('Clearing screen');
                    return dispatch(clear_screen());
                case 'del':
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
