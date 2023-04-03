import React from 'react';
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
                <button onClick={signIn}>Sign in with google</button>
            </div>
        </div>
    )
}

export default Login