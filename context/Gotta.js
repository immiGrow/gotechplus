import Context from "./contextApi";
import { useState } from "react";
const Gotta=(props)=>
{
   const [auth, setAuth] = useState(false)
 
return (
    <Context.Provider value={{auth,setAuth}}>
        {props.children}
    </Context.Provider>
)

}
export default Gotta;