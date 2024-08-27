import { useEffect, useState } from "react";
import WorkoutDetails from "../Components/workoutDetails";
import WorkoutForm from "../Components/WorkoutForm";
import { UseWorkoutContext } from "../hooks/UseWorkoutsContext";
import { useAuthContext } from "../hooks/UseAuthConext";

const Home=()=>{
    
    const {workouts,dispatch}=UseWorkoutContext()
    const {user}=useAuthContext()
    useEffect(()=>{
        const fetchworkouts=async()=>{
            const resonse=await fetch('http://localhost:4000/api/workouts',{
                headers: {'Authorization': `Bearer ${user.token}`}
            })
            const json=await resonse.json();
            if(resonse.ok){
                dispatch({type:'SET_WORKOUTS',payload:json.workouts})
               
               

            }

        }
        
            if(user){
                
                fetchworkouts();
            }

        
       

    },[dispatch,user])
    return(
       <div className="home">
         <div className="workouts">
            {workouts && workouts.map((workout)=>(
                <WorkoutDetails key={workout._id} workout={workout}/>
                
            ))}
        </div>
        <WorkoutForm/>
       </div>
    )
}
export default Home;