import { Link } from "react-router-dom";
import {UseLogOut} from '../hooks/UseLogOut'
import { useAuthContext } from "../hooks/UseAuthConext";



const Navbar=()=>{
  const {user}=useAuthContext()
  const {logout}=UseLogOut()
  const handleclick=()=>{
    logout();
  

  }
    return(
        <header>
          <div className="container">
            <Link to="/" >
              <h1>Workout Buddy</h1>
            </Link>
            <nav>
              {user && (<div>
                <span>{user.email}</span>
                <button onClick={handleclick}>log out</button>
              </div>)}
             {!user &&  <div>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
              </div>}
            </nav>
          
          </div>
        </header>

    )

}

export default Navbar;