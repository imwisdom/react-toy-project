import React from 'react';
import MenuFrame from '../components/MenuFrame';
import SignUpForm from '../components/SignUpForm';

const SignUp: React.FC = () => {
    return (
        <MenuFrame pageTitle='signUp'>
            <SignUpForm />
        </MenuFrame>
    )
};

export default SignUp;
