import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const UseWorkoutContext=()=>{
    const context=useContext(WorkoutContext)
    if(!context){
        throw Error("errorr")
    }
    return context;
}