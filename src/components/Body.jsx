import { useEffect } from "react"
import Browse from "./Browse"
import Login from "./Login"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Body = () => {
    const Dispatch = useDispatch()
    const appRouter = createBrowserRouter([
    {
       path : "/",
       element : <Login />
    },
    {
        path:"browse",
        element:<Browse />
    }])
    
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName,photoURL} = user;
              Dispatch(addUser({uid:uid, email:email, displayName:displayName,photoURL:photoURL}))
            
            } else {
             Dispatch(removeUser())
              
            }
          });
    },[])

    return (
        <>
        <RouterProvider router={appRouter} />
        </>
    )
}
export default Body;