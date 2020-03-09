import React from "react"
import { Link } from "gatsby"
import { useGlobalDispatch, useGlobalState } from "./store"

const Layout = ({ children }) => {
  const dispatch = useGlobalDispatch()
  const state = useGlobalState()
  console.log(state)
  return (
    <>
      <Link
        onClick={() => {
          if (true) dispatch({ type: "increment" })
        }}
        to={`/`}
      >
        home
      </Link>
      <Link to={`/page2`}>page2</Link>
      <button
        onClick={() => {
          dispatch({ type: "increment" })
        }}
      >
        increment
      </button>
      <div>{state.count}</div>
      {children}
    </>
  )
}

export default Layout
