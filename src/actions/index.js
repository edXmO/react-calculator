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

export const equals = () => {
    return {
        type: EQUALS
    }
}

// Operator actions


export const add = () => {
    return {
        type: ADD
    }
}

export const subtract = (num) => {
    return {
        type: SUBTRACT,
        payload: num
    }
}

export const multiply = (num) => {
    return {
        type: MULTIPLY,
        payload: num
    }
}
export const divide = (num) => {
    return {
        type: DIVIDE,
        payload: num
    }
}
export const exponential = (num) => {
    return {
        type: EXP,
        payload: num
    }
}
export const mod = (num) => {
    return {
        type: MOD,
        payload: num
    }
}