import React from 'react';
// Styles
import '../../../styles/App.css';
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { clear_screen, del, lastKey_pressed, decimal, equals } from '../../../actions';

const Button = ({ type, btn, operatorStyle }) => {

    const currDisplay = useSelector(({ interact }) => interact.screen);
    const dispatch = useDispatch();

    const handleBtnClick = (btn) => {
        if (type === 'Display') {
            if (btn === '.') {
                if (currDisplay.includes('.') || currDisplay[-1] === '.') return;
                return dispatch(decimal(currDisplay));
            }
            dispatch(lastKey_pressed(btn));
        }
        if (type === 'Action') {
            switch (btn) {
                case '+':
                    return console.log('add');
                case '-':
                    return console.log('subtract');
                case 'x':
                    return console.log('multiply');
                case '/':
                    return console.log('divide');
                case '%':
                    return console.log('mod');
                case 'e':
                    return console.log('exponential');
                case 'Clear':
                    return dispatch(clear_screen());
                case '<=':
                    return dispatch(del(currDisplay));
            }
        }
    }
    return (
        <button
            onClick={() => handleBtnClick(btn)}
            className={`btn ${operatorStyle ? 'btn--operator' : 'btn--number'}`}>
            {btn}
        </button >
    )
}

export default Button;
