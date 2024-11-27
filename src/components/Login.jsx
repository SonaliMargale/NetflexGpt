import { useState, useRef } from 'react';
import Header from './Header'
import { checkValidateData } from '../utils/validate.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch } from 'react-redux';


const Login = () => {
  const [signinform, setsigninform] = useState(true)
  const [errormessage, seterrormessage] = useState(null);
   const Dispatch = useDispatch();

  //form validation
  const email = useRef(null)
  const password = useRef(null)

  const Handlerclick = () => {
    console.log(email.current.value)
    console.log(password.current.value)
    const message = checkValidateData(email.current.value, password.current.value)
    console.log(message)
    seterrormessage(message)
    if (message) return

    if (!signinform) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: email.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            Dispatch(addUser({ uid: uid, 
              email: email,
               displayName: displayName, 
               photoURL: photoURL }))
          }).catch((error) => {
            seterrormessage(error)
          });
          console.log("singed up", user)

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + " " + errorMessage)
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("signed In", user)

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  }

  const onToggle = () => {
    setsigninform(!signinform)
  }

  return (
    <div className="relative w-full h-screen">
      <Header />
      <div>
        <img className='absolute'
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 py-5 my-36 mx-auto absolute bg-black right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4 m-2 ml-4'>{signinform ? "Sign In" : "Sign Up"}</h1>
        {!signinform && (
          <input
            type="text"
            placeholder='Full Name'
            className='p-4 my-2 ml-12 w-3/4 rounded-lg bg-gray-700'
          />)}
        <input
          ref={email}
          type="text"
          placeholder='enter email address'
          className='p-4 my-2 ml-12 w-3/4 rounded-lg bg-gray-700'
        />
        <input
          ref={password}
          type="password"
          placeholder='enter password'
          className='p-4 my-2 ml-12 w-3/4 rounded-lg bg-gray-700'
        />
        <p className='text-red-500 font-bold'>{errormessage}</p>
        <button className='p-4 my-4 bg-red-700 ml-12 w-3/4 rounded-lg'
          onClick={Handlerclick}>{signinform ? "Sign In" : "Sign Up"}
        </button>
        <p className='ml-12 cursor-pointer' onClick={onToggle}>{signinform ? "New to netflix ? sign up now" : "already registered "}</p>
      </form>


    </div>

  )
}
export default Login;