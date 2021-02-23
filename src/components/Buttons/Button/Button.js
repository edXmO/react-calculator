import React from 'react';
// Styles
import '../../../styles/App.css';
// redux
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { clear_screen, del, lastKey_pressed, decimal, equals, addOperator } from '../../../actions';

const Button = ({ type, btn, operatorStyle }) => {

    const lastResult = useSelector(({ calculator }) => calculator.result);
    const currDisplay = useSelector(({ calculator }) => calculator.screen);
    const lastType = useSelector(({ calculator }) => calculator.lastType);
    const keyHistory = useSelector(({ calculator }) => calculator.keyHistory);
    const dispatch = useDispatch();

    const handleBtnClick = (btn, type, lastType) => {
        if (type === 'Display') {
            if (btn === '.') {
                if (currDisplay.includes('.') || currDisplay[-1] === '.') return;
                return dispatch(decimal(currDisplay, type));
            }
            return dispatch(lastKey_pressed(keyHistory, btn, type));
        }

        if (type === 'Command') {
            switch (btn) {
                case 'Clear':
                    return dispatch(clear_screen());
                case 'del':
                    return dispatch(del(currDisplay));
                case '=':
                    const newOperation = lastResult + currDisplay;
                    return dispatch(equals(newOperation));
                default:
                    return;
            }
        }

        if (type === 'Action' && lastType !== 'Action') {
            return dispatch(addOperator(currDisplay, btn, type));
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
