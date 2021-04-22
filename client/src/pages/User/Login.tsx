import React from 'react';
import { Link } from 'react-router-dom';
import InputRound from '../../components/Inputs/InputRound';
import SimpleButton from '../../components/Buttons/SimpleButton';

import '../../styles/Login.scss';

const LoginComponent: React.FC = () => {
    function loginUser() {
        console.log('yooo');
    }
    return (
        <section className="login-component">
            <div>
                <label>Name</label>
                <InputRound color="black" classnames="login__input" placeholder="Username" />
                <label>Email</label>
                <InputRound color="black" classnames="login__input" placeholder="Email" />
                <label>Password</label>
                <InputRound color="black" classnames="login__input" placeholder="Password" />
                <Link to="/dashboard">
                    <SimpleButton color="green" text="Sign up" onClick={loginUser} />
                </Link>
            </div>
        </section>
    );
};

export default LoginComponent;
