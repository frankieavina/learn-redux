export const increment = (numIncrement) => {
    return {
        type: 'INCREMENT',
        payload: numIncrement
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

export const logIn = () => {
    return {
        type: 'SIGN_IN'
    };
};