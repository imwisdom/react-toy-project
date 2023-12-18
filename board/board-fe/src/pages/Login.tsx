import React from 'react';
import MenuFrame from '../components/MenuFrame';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
    return (
        <MenuFrame pageTitle='login'>
            <LoginForm />
        </MenuFrame>
    )
};

export default Login;
