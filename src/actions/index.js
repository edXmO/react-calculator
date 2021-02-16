import {
    ADD,
    SUBTRACT,
    MULTIPLY,
    DIVIDE,
    EXP,
    MOD,
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
export const decimal = currentDisplay => {
    const updatedDisplay = currentDisplay + '.';
    return {
        type: DECIMAL,
        payload: updatedDisplay
    }
}
export const display_screen = (currentDisplay, keyPressed) => {
    const updatedDisplay = currentDisplay + keyPressed;
    return {
        type: DISPLAY_SCREEN,
        payload: updatedDisplay
    }
}
export const lastKey_pressed = (key, type) => {
    return {
        type: KEYNUMBER_PRESS,
        payload: { key, type }
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

export const addOperator = (history, operator, action, type) => {
    const result = history.concat(operator);
    return { type: action, payload: { result, type } }
}

export const add = history => {
    const result = history.concat('+');
    return {
        type: ADD,
        payload: result
    }
}

export const subtract = history => {
    const result = history.concat('-');
    return {
        type: SUBTRACT,
        payload: result
    }
}

export const multiply = history => {
    const result = history.concat('*');
    return {
        type: MULTIPLY,
        payload: result
    }
}
export const divide = history => {
    const result = history.concat('/');
    return {
        type: DIVIDE,
        payload: result
    }
}
export const exponential = num => {
    return {
        type: EXP,
        payload: num
    }
}
export const mod = num => {
    return {
        type: MOD,
        payload: num
    }
}