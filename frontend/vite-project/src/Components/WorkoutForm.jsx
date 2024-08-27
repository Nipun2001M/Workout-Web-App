import { useState } from "react";
import { UseWorkoutContext } from "../hooks/UseWorkoutsContext";
import { useAuthContext } from "../hooks/UseAuthConext";

const WorkoutForm=()=>{
    const {dispatch}=UseWorkoutContext()
    const {user}=useAuthContext()
    const [title,Settitle]=useState("");
    const [load,Setload]=useState(0);
    const [reps,Setreps]=useState(0)
    const [error,Seterror]=useState(null)
    const handlesubmit=async(e)=>{
        e.preventDefault();
        if(!user){
            return
        }
        const workout={title,load,reps};
        const response=await fetch('http://localhost:4000/api/workouts',{
            method:'POST',
            body:JSON.stringify(workout),
            headers:{
                'Content-type':'application/json',
                'Authorization':`Bearer ${user.token}`,
              
                    
        

            }
           


        })
        const json =await response.json();
        if(!response.ok){
            Seterror(json.error)

        }
        if(response.ok){
            Seterror(null)
            console.log("new workout added!")
            Settitle('')
            Setload(0)
            Setreps(0)
            dispatch({type:'CREATE_WORKOUT',payload:json})
        }

    }
    return(
        <form  className="create" onSubmit={handlesubmit}>
            <h3>Add a New Workout</h3>
            <label>Exercise Title: </label>
            <input type="text"
            onChange={(e)=>{Settitle(e.target.value)}} value={title}>
                
            </input>


            <label>Load(Kg): </label>
            <input type="number"
            onChange={(e)=>{Setload(e.target.value)}} value={load}>
                
            </input>


            
            <label>Reps: </label>
            <input type="number"
            onChange={(e)=>{Setreps(e.target.value)}} value={reps}>
                
            </input>
            <button type="submit">
                Add Workout
            </button>
            {error&&<div className="error">{error}</div>}

        </form>
    )
}
export default WorkoutForm;