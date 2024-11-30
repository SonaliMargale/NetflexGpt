import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addUser, removeUser } from "../utils/userSlice";
import {onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { LOGO } from "../utils/constant";

const Header = () => {
    const navigate = useNavigate();
    const Dispatch = useDispatch();
    const user = useSelector((store) => store.user)

    const handlersignout = () => {
        signOut(auth)
        .then(() => {})
        .catch((error) => {
            navigate('/error')
        });
    }
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName,photoURL} = user;
              Dispatch(addUser({uid:uid, email:email, displayName:displayName,photoURL:photoURL}))
              navigate("/Browse")
            } else {
             Dispatch(removeUser())
             navigate("/")
            }
          });

          return () => unsubscribe()
    },[])
    return (
        <div className="absolute w-screen top-0 left-0 z-10 bg-gradient-to-b from-black flex justify-between items-center px-4 py-2">
            <img
                className="w-44"
                src={LOGO}
                alt="logo"
            />
            {user && (<div className="flex items-center space-x-4">
                <img
                    className="w-12 h-12"
                    src={user?.photoURL}
                    alt="usericon"
                />
                <button onClick={handlersignout} className="text-white font-bold px-4 py-2 rounded hover:bg-red-700">
                    Sign Out
                </button>
            </div>)
            }
        </div>
    );
};

export default Header;
