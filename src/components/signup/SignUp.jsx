import React, { useState } from 'react';
import { Button } from '../common/Button';
import { Link } from 'react-router-dom';
import { EMAIL, PASSWORD } from '../../utils/Regex';
import CustomInput from '../common/CustomInput';

const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
        if (fullNameError) setFullNameError('');
    };

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

        if (!fullName) {
            setFullNameError('Full name is required');
            valid = false;
        } else {
            setFullNameError('');
        }

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
            console.log('Full Name:', fullName);
            console.log('Email:', email);
            console.log('Password:', password);
            setFullName('');
            setEmail('');
            setPassword('');
        }
    };

    return (
        <div className='sm:max-w-[376px] max-w-[320px] sm:min-w-[376px]'>
            <p className='font-semibold text-2xl lg:text-3xxl leading-121 text-light-white tracking-tighter text-center lg:text-start'>Sign Up 🚪 </p>
            <p className='font-normal text-sm lg:text-base leading-121 text-old-silver mt-2 tracking-tighter text-center lg:text-start'>Start making more coins and submit more SBC’s</p>
            <div className='pt-3 sm:pt-[21px]'>
                <CustomInput
                    placeholder='Enter your name'
                    type='text'
                    inputuse="Full name"
                    eyeclasses='hidden'
                    value={fullName}
                    onChange={handleFullNameChange}
                    id='name'
                />
                {fullNameError && <p className='text-red-500 text-xs'>{fullNameError}</p>}
            </div>
            <div className='pt-3 sm:pt-[21px]'>
                <CustomInput
                    placeholder='Enter your email address'
                    type='email'
                    inputuse="Email address"
                    eyeclasses='hidden'
                    value={email}
                    onChange={handleEmailChange}
                    id='email'
                />
                {emailError && <p className='text-red-500 text-xs'>{emailError}</p>}
            </div>
            <div className='pt-3 sm:pt-[21px]'>
                <CustomInput
                    placeholder='Password'
                    type={showPassword ? 'text' : 'password'}
                    inputuse="Password"
                    eyeclasses=''
                    value={password}
                    onChange={handlePasswordChange}
                    togglePasswordVisibility={() => setShowPassword(!showPassword)}
                    showPassword={showPassword}
                />
                {passwordError && <p className='text-red-500 text-xs'>{passwordError}</p>}
            </div>
            <Button
                text="Create an account"
                className="text-light-white w-full flex justify-center mt-[21px]"
                onClick={handleSubmit}
            />
            <p className='font-normal text-xs leading-121 tracking-tighter text-light-white text-center mt-3 sm:mt-6 relative z-[2]'>Already have an account? <Link to='/' className='text-malachite cursor-pointer' >Login </Link>  </p>
        </div>
    );
}

export default SignUp;
