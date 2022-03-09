import React, { createContext, useReducer, ReactNode } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  users: [],
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
interface GlobalProviderProps {
    children: ReactNode
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeUser = (id: any) => {
    dispatch({
      type: 'REMOVE_USER',
      payload: id
    })
  }

  const addUser = (user: any) => {
    dispatch({
      type: 'ADD_USER',
      payload: user
    })
  }

  const editUser = (user: any) => {
    dispatch({
      type: 'EDIT_USER',
      payload: user
    })
  }

  return (
    <GlobalContext.Provider value={{
      users: state.users,
      // removeUser,
      // addUser,
      // editUser
    }}>
      {children}
    </GlobalContext.Provider>
  )
}