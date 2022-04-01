import React, { useReducer, useContext } from 'react';
import config from './config.js';

const AppContext = React.createContext([{}, () => {}]);

const AppStateProvider = (props) => {
    //** use a reducer to handle app state changes; AppStateHandler handles the logic for modifying the state
    let stateHandler = useReducer(AppStateHandler, { ...config.app });

    return (
        <AppContext.Provider value={ stateHandler }>
            { props.children }
        </AppContext.Provider>
    );
}

//** wraps the use of useContext() and dispatch() to make using/updating state easier/less coupled
const useAppState = () => {
    let [state, dispatch] = useContext(AppContext);

    return [
        state,

        //** wraps dispatch(), decouples consumers from how dispatch() is used underneath
        (action, data) => {
            !!action && action.type && (action = action.type);
            dispatch({ type: action, data: data });
        }
    ]
}

//** global state handler; possibly break these down into modules if needed...
const AppStateHandler = (state, action) => {
    if(!action) return state;

    switch(action.type) {
        case 'app.title':
            return {
                ...state,
                title: action.data
            };

        default: 
            return state;
    }
}

export { 
    useAppState,
    AppContext, 
    AppStateProvider,
};
