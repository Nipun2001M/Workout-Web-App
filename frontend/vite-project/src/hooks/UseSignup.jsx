import { useState } from "react"
import { useAuthContext } from "./UseAuthConext"

export const UseSignup=()=>{
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(null)
    const {dispatch}=useAuthContext();

    const signup=async(email,password)=>{
        console.log('sign up function')
        setLoading(true)
        console.log('after set loading')

        setError(null)
        console.log('after befor ferch')

        const response=await fetch('http://localhost:4000/api/user/signup',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({email,password})
        })
        console.log('after fetch')
        const json=await response.json();
        console.log('befor')
        if(!response.ok){
            console.log('res not ok')
            setLoading(false)
            setError(true)
        }
        if(response.ok){
            console.log('res ok')

            localStorage.setItem('user', JSON.stringify(json))
        }
        console.log
        dispatch({type:'LOGIN',payload:json})
        setLoading(false)

    }
    return {signup,loading,error}

}