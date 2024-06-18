import { useState } from 'react';
import Header from './Header'

const Login = () => {
   const[signinform, setsigninform] = useState(true)

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
          <form className='w-3/12 py-5 my-36 mx-auto absolute bg-black right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4 m-2 ml-4'>{signinform ? "Sign In":"Sign Up"}</h1>
             {!signinform && (<input type="text" 
              placeholder='Full Name'
              className='p-4 my-2 ml-12 w-3/4 rounded-lg bg-gray-700'
             />)}
            <input type="text" 
              placeholder='enter email address'
              className='p-4 my-2 ml-12 w-3/4 rounded-lg bg-gray-700'
            />
            <input type="password"
             placeholder='enter password' 
             className='p-4 my-2 ml-12 w-3/4 rounded-lg bg-gray-700'
            />
            <button className='p-4 my-4 bg-red-700 ml-12 w-3/4 rounded-lg'>{signinform ? "Sign In":"Sign Up"}</button>
            <p className='ml-12 cursor-pointer' onClick={onToggle}>{signinform ? "New to netflix ? sign up now":"already registered "}</p>
         </form>
          
 
        </div>

    )
}
export default Login;