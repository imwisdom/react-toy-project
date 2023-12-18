import React from 'react';
import MenuFrame from '../components/MenuFrame';
import SignUpForm from '../components/SignUpForm';

const Login: React.FC = () => {
    return (
        <MenuFrame pageTitle='login'>
            <SignUpForm />
        </MenuFrame>
    )
};

export default Login;
