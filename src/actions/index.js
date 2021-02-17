import {
    OPERATOR,
    CLEAR_SCREEN,
    DELETE,
    DECIMAL,
    DISPLAY_SCREEN,
    KEYNUMBER_PRESS,
    EQUALS
} from './types';


// Interactions actions

export const clear_screen = () => {
    return {
        type: CLEAR_SCREEN
    }
}

export const del = currentDisplay => {
    const updatedDisplay = currentDisplay.slice(0, currentDisplay.length - 1);
    return {
        type: DELETE,
        payload: updatedDisplay
    }
}

export const decimal = (currentDisplay, type) => {
    const updatedDisplay = currentDisplay + '.';
    return {
        type: DECIMAL,
        payload: { updatedDisplay, type }
    }
}

export const display_screen = (currentDisplay, keyPressed) => {
    const updatedDisplay = currentDisplay + keyPressed;
    return {
        type: DISPLAY_SCREEN,
        payload: updatedDisplay
    }
}

export const lastKey_pressed = (keyHistory, key, type) => {
    const updatedKeyHistory = keyHistory + key;
    return {
        type: KEYNUMBER_PRESS,
        payload: { key, type, updatedKeyHistory }
    }
}

export const equals = history => {
    const result = eval(history);
    return {
        type: EQUALS,
        payload: result
    }
}

// Operator action
export const addOperator = (history, operator, type) => {
    const result = history.concat(operator);
    return { type: OPERATOR, payload: { result, type } }
}