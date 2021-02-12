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
    KEYNUMBER_PRESS
} from './types';

// Interactions actions

export const clear_screen = () => {
    return {
        type: CLEAR_SCREEN
    }
}
export const del = () => {
    return {
        type: DELETE
    }
}
export const decimal = () => {
    return {
        type: DECIMAL
    }
}
export const display_screen = () => {
    return {
        type: DISPLAY_SCREEN
    }
}
export const key_press = (key) => {
    return {
        type: KEYNUMBER_PRESS
    }
}

// Operator actions

export const add = (num) => {
    return {
        type: ADD,
        payload: num
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