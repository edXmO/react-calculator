import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { display_screen } from '../../actions';

// Styles 
import '../../styles/App.css';

const Screen = () => {
    const keyHistory = useSelector(({ calculator }) => calculator.keyHistory);
    const result = useSelector(({ calculator }) => calculator.result);
    const lastKeyPressed = useSelector(({ calculator }) => calculator.lastKey);
    const currNumberDisplayed = useSelector(({ calculator }) => calculator.screen);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(display_screen(currNumberDisplayed, lastKeyPressed));
    }, [keyHistory]);

    return (
        <div className='screen'>
            <p className='screen__currOperation'>
                {currNumberDisplayed}
            </p>
            <p className='screen__display'>
                {result}
            </p>
        </div>
    )
}

export default Screen;