import { useState } from "react"
import { UseSignup } from "../hooks/UseSignup"

const Signup=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {signup,error,loading} =UseSignup()
    const handlesubmit=async(e)=>{
        e.preventDefault();
        await signup(email,password)
        

    }

    return(
        <form className="signup" onSubmit={handlesubmit}>
            <h3>signup</h3>
            <label>Email: </label>
            <input type="email" onChange={(e)=>{
                setEmail(e.target.value)
                
                
            }}
            value={email}
            ></input>

<label>Password: </label>
            <input type="password" onChange={(e)=>{
                setPassword(e.target.value)
                
            }}
            value={password}
            ></input>
           <button disabled={loading}>Signup</button>
            {error && <div className="error">{error}</div>}
    
        </form>
    )

}
export default Signup;