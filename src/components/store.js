import React, { createContext, useReducer, useContext } from "react"

function generateInitialState() {
  return { thing: true, count: 0 }
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

const StateProviderContext = createContext()
const DispatchProviderContext = createContext()

const StateProvider = ({ children }) => {
  console.log("init")
  const initialState = generateInitialState()
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StateProviderContext.Provider value={state}>
      <DispatchProviderContext.Provider value={dispatch}>
        {children}
      </DispatchProviderContext.Provider>
    </StateProviderContext.Provider>
  )
}

function useGlobalState() {
  const context = useContext(StateProviderContext)
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a StateProvider")
  }
  return context
}

function useGlobalDispatch() {
  const context = useContext(DispatchProviderContext)
  if (context === undefined) {
    throw new Error("useGlobalDispatch must be used within a StateProvider")
  }
  return context
}

export { StateProvider, useGlobalState, useGlobalDispatch }
