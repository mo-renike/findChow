import React from 'react';
import { FcGoogle } from "react-icons/fc";
import "./Login.scss"
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../../firebase';



const Login = () => {
    const navigate = useNavigate()

    const handleSignIn = async () => {
        await signInWithGoogle();
        navigate('/')
    };


    return (
        <div className="login">
            <div className="login__form">
                <h1>Login to your account</h1>
                <p>
                    Save your favourite  spots and share them with your friends.
                </p>
                <button onClick={handleSignIn}> <FcGoogle style={{ marginRight: "1rem", fontSize: "1.5rem" }} /> Sign in with Google</button>
            </div>
        </div>
    )
}

export default Login