import React, { useReducer, useContext, useMemo, createContext } from 'react';
import initialState from '../initial-state.json';

//** the main context where state data is persisted
const AppContext = createContext([{}, () => {}]);

//** a useAppState hook that allows apps to dispatch updates to the AppContext from anywhere
const useAppState = () => {
    let { state, dispatch } = useContext(AppContext);

    return [
        state, 

        //** wrap the dispatch function so you can identify the type of update being made, storing granular state
        (action, data) => {
            dispatch({ type: action, data });
        }
    ];
}

//** a provider that exposes a reducer handle state changes as the state handler for the context provider
const AppStateProvider = (props) => {
    //** create a reducing using the initial state
    const [state, dispatch] = useReducer(AppStateHandler, initialState);

    //** memo the value so it isn't re-initialized unless needed
    const value = useMemo(() => ({ 
        state, 
        dispatch 
    }), [state, dispatch]);

    return (
        <AppContext.Provider value={ value }>
            { props.children }
        </AppContext.Provider>
    );
}

//** global state handler; possibly break these down into modules if needed...
const AppStateHandler = (state, action) => {
    if(!action) return state;

    switch(action.type) {
        default: 
            return state;
    }
}

export { 
    useAppState,
    AppContext, 
    AppStateProvider,
};
