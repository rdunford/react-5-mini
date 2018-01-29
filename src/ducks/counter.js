// let initialState = {
//     currentValue: 0,
//     futureValues: [],
//     previousValues: []
// }

// const INCREMENT = 'INCREMENT';
// const DECREMENT = 'DECREMENT';
// const UNDO = 'UNDO';
// const REDO = 'REDO';

// export function redo() {
//     return {
//         type: REDO
//     }
// }

// export function undo() {
//     return {
//         type: UNDO
//     }
// }


// export function increase(amount) {
//     return {
//         type: INCREMENT,
//         amount
//     }
// }

// export function decrease(amount) {
//     return {
//         type: DECREMENT,
//         amount
//     }
// }

// export default function reducer(state = initialState, action) {
//     switch (action.type) {
//         case INCREMENT:
//             return Object.assign({}, state, { currentValue: state.currentValue + action.amount });
//         case DECREMENT:
//             return Object.assign({}, state, { currentValue: state.currentValue - action.amount });
//         case REDO:
//             return {
//                 currentValue: state.futureValues[ 0 ],
//                 futureValues: state.futureValues.slice( 1, state.futureValues.length ),
//                 previousValues: [ state.currentValue, ...state.previousValues ]
//             };
//         case UNDO:
//             return {
//                 currentValue: state.previousValues[0],
//                 futureValues: [state.currentValue, ...state.futureValues],
//                 previousValues: state.previousValues.slice(1, state.previousValues.length)

//             };
//         default:
//             return state;
//     }
// }
const initialState = {
    currentValue: 0,
    futureValues: [],
    previousValues: []
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const UNDO = "UNDO";
const REDO = "REDO";

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                currentValue: state.currentValue + action.amount,
                futureValues: [],
                previousValues: [state.currentValue, ...state.previousValues]
            };
        case DECREMENT:
            return {
                currentValue: state.currentValue - action.amount,
                futureValues: [],
                previousValues: [state.currentValue, ...state.previousValues]
            };
        case UNDO:
            return {
                currentValue: state.previousValues[0],
                futureValues: [state.currentValue, ...state.futureValues],
                previousValues: state.previousValues.slice(1, state.previousValues.length)
            };
        case REDO:
            return {
                currentValue: state.futureValues[0],
                futureValues: state.futureValues.slice(1, state.futureValues.length),
                previousValues: [state.currentValue, ...state.previousValues]
            };
        default:
            return state;
    }
}

export function increment(amount) {
    return { amount, type: INCREMENT };
}

export function decrement(amount) {
    return { amount, type: DECREMENT };
}

export function undo() {
    return { type: UNDO };
}

export function redo() {
    return { type: REDO };
}