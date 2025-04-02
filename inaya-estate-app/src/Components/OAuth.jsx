import React from 'react';
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { app } from '../firbase.js';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice.js';
import {useNavigate } from "react-router-dom";

export default function OAuth() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
    const handleGoogleSignIn = async() => {
        try {
          const provider=new GoogleAuthProvider();
          const auth=getAuth(app);
          const result=await signInWithPopup(auth,provider);
          const res=await fetch("/api/auth/google",{
            method:'POST',
            header:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify({name:result.user.displayName,email:result.user.email,photo:result.user.photoURL}),
        })
        const data=await res.json();
        dispatch(signInSuccess(data));
        console.log(result);
        navigate("/");
        } catch (error) {
          console.log("could not sign in with google",error);
        }
      };
  return (
    <div>
        {/* Google Sign In */}
        <button className="btn btn-danger w-100" onClick={handleGoogleSignIn}>
          <i className="bi bi-google me-2"></i> Continue with Google
        </button>
    </div>
  )
}
