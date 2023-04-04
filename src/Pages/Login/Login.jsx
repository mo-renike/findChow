import React from 'react';
import { FcGoogle } from "react-icons/fc";
import "./Login.scss"



const Login = ({ signIn }) => {
    // build login form with authentication

    return (
        <div className="login">
            <div className="login__form">
                <h1>Login to your account</h1>
                <p>
                    Save your favourite  spots and share them with your friends.
                </p>
                <button onClick={signIn}> <FcGoogle style={{ marginRight: "2rem", fontSize: "1.5rem" }} /> Sign in with Google</button>
            </div>
        </div>
    )
}

export default Login