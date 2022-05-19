import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <p>Loaading...</p>;
    }

    return (
        <div>
            <h2>Login with your google account:</h2>
            <div onClick={() => signInWithGoogle()} className='google-login-container'>
                <span>Login with google</span>
            </div>
        </div>
    );
};

export default Login;