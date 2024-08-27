import { useAuthContext } from "./UseAuthConext"
import { UseWorkoutContext } from "./UseWorkoutsContext"

export const UseLogOut=()=>{
    const {dispatch}=useAuthContext()
    const {dispatch:workouts}=UseWorkoutContext()
    const logout=()=>{
        localStorage.removeItem('user')
        dispatch({type:'LOGOUT'})
        workouts({type:'SET_WORKOUTS',payload:null})
        
    }
    return {logout};
}