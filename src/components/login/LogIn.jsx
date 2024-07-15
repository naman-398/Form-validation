import React, { useState } from 'react';
import { Button } from '../common/Button';
import { Link } from 'react-router-dom';
import { EMAIL, PASSWORD } from '../../utils/Regex';
import CustomInput from '../common/CustomInput';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (emailError) setEmailError('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (passwordError) setPasswordError('');
    };

    const validateEmail = (email) => {
        const re = EMAIL;
        return re.test(email);
    };

    const validatePassword = (password) => {
        const re = PASSWORD;
        return re.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        if (!validateEmail(email)) {
            setEmailError('Invalid email address');
            valid = false;
        } else {
            setEmailError('');
        }

        if (!validatePassword(password)) {
            setPasswordError('Password must be at least 8 characters long and contain both letters and numbers');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            console.log('Email:', email);
            console.log('Password:', password);
            setEmail('');
            setPassword('');
        }
    };

    return (
        <div className='sm:max-w-[376px] max-w-[320px] sm:min-w-[376px]'>
            <p className='font-semibold text-2xl lg:text-3xxl leading-121 text-light-white tracking-tighter text-center lg:text-start'>Welcome Back 👋🏻</p>
            <p className='font-normal text-sm lg:text-base leading-121 text-old-silver mt-2 tracking-tighter text-center lg:text-start'>Start making more coins and submit more SBC’s</p>
            <div className='pt-3 sm:pt-[21px]'>
                <CustomInput
                    placeholder='Enter your email address'
                    type='email'
                    id='email'
                    inputuse="Email address"
                    eyeclasses='hidden'
                    value={email}
                    onChange={handleEmailChange}
                />
                {emailError && <p className='text-red-500 text-xs'>{emailError}</p>}
            </div>
            <div className='pt-3 sm:pt-[21px]'>
                <CustomInput
                    placeholder='Password'
                    type={showPassword ? 'text' : 'password'}
                    inputuse="Password"
                    eyeclasses=''
                    id='password'
                    value={password}
                    onChange={handlePasswordChange}
                    togglePasswordVisibility={() => setShowPassword(!showPassword)}
                    showPassword={showPassword}
                />
                {passwordError && <p className='text-red-500 text-xs'>{passwordError}</p>}
            </div>
            <Link to='/forgetpassword'
                className='font-normal cursor-pointer text-xs leading-121 text-malachite tracking-tighter mt-1 sm:mt-2 after:w-full after:absolute relative after:h-[1px] after:left-0 after:bottom-[-.5px] after:bg-malachite hover:after:w-0 hover:after:left-[50%] after:duration-300 after:ease-in-out'>
                Forgot Password?
            </Link>
            <Button
                text="Login"
                className=" w-full flex justify-center mt-3 sm:mt-[21px]"
                onClick={handleSubmit}
            />
            <p className='font-normal text-xs leading-121 tracking-tighter text-light-white text-center mt-3 sm:mt-6'>Don’t have an account? <Link to='/signup' className='text-malachite cursor-pointer'>Sign Up</Link></p>
        </div>
    );
}

export default LogIn;
