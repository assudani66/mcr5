'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState, useReducer } from "react";

type recipe = {
    firstName: string
}

interface ContextProps {
    
}

const GlobalContext = createContext<ContextProps>({
})

export const GlobalContextProvider = ({ children }) => {
    const recipeReducer = (state,action) => {
        switch (action.key) {
            case 'GET_RECIPIE':
                // get the particular recipe data
                console.log()
                return state
            case 'EDIT_RECIPIE':
                // requires ID to find the recipe
                // replace Recipe with the payload
                // payload : updated recipe
                return state
            case 'ADD_RECIPIE':
                // adds payload to recipe array
                return state
            case 'DELETE_RECIPIES':
                // filters the recipe from the array of recipe
                return state
        
            default:
                state;
        }
    }

    const [] = useReducer(recipeReducer,[])
    
    return (
        <GlobalContext.Provider value={{ }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);