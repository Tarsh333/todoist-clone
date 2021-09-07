import React, { useReducer } from 'react'
import Reducer from './Reducer'
const initialState={
    tasks:[],
    projects:['daily','future','job'],
    opened:'inbox'
}
const AppContext=React.createContext()
const Context = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState)
    const changeOpen=(payload)=>{
        dispatch({type:'CHANGE_OPEN',payload})
    }
    const addTask=(payload)=>{
        dispatch({type:'ADD_TASK',payload})
    }
    const removeTask=(payload)=>{
        dispatch({type:'REMOVE_TASK',payload})
    }
    const addProject=(payload)=>{
        dispatch({type:'ADD_PROJECT',payload})
    }
    const deleteProject=(payload)=>{
        dispatch({type:'DELETE_PROJECT',payload})
    }
    return (
        <AppContext.Provider value={
           { ...state,
            changeOpen,
            addTask,
            removeTask,
            addProject,
            deleteProject
        }
        }>
            {children}
        </AppContext.Provider>
    )
}

export  {Context,AppContext}
