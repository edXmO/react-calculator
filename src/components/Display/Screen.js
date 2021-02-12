import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { display_screen } from '../../actions';

// Styles 
import '../../styles/App.css';

const Screen = () => {
    const result = 0;
    // const operationHistory = useSelector(({ interact }) => interact.operationHistory);
    const lastKeyPressed = useSelector(({ interact }) => interact.key);
    const currNumberDisplayed = useSelector(({ interact }) => interact.screen);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(display_screen(currNumberDisplayed, lastKeyPressed));
    }, [lastKeyPressed]);

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