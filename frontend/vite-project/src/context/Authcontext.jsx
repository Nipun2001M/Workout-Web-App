import { createContext, useEffect, useReducer } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(authReducer, { 
    user: null
  })

  useEffect(()=>{
    // i n here we not verifying we very fy it in middle ware for each req middle ware clled , here we just 
    // grab it from local storage and set it to auth context 
    const user=JSON.parse(localStorage.getItem('user'))
    if(user){
        dispatch({type:'LOGIN',payload:user})
    }

  },[])
  console.log('AuthContext state:', state)
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}