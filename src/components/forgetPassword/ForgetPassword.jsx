import React, { useState } from 'react';
import { Button } from '../common/Button';
import { ArrowLeft } from '../common/Icon';
import { Link } from 'react-router-dom';
import { EMAIL } from '../../utils/Regex';
import CustomInput from '../common/CustomInput';

const ForgetPassword = ({ onSwitchToLogin }) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (emailError) setEmailError('');
    };

    const validateEmail = (email) => {
        const re = EMAIL;
        return re.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
            console.log('Email:', email);
            setEmail('');
        }
    };

    return (
        <div className='sm:max-w-[376px] max-w-[320px] sm:min-w-[376px]'>
            <Link className='flex items-center gap-1 cursor-pointer group' to='/' >
                <span className=' group-hover:-translate-x-1 duration-300 ease-in-out'><ArrowLeft /></span>
                <span className='font-normal text-base leading-121 tracking-tighter text-light-white'>Back</span>
            </Link>
            <p className='font-semibold text-2xl lg:text-3xxl leading-121 text-light-white tracking-tighter pt-5 lg:pt-[45.5px] text-center lg:text-start'>Forgot Password?</p>
            <p className='font-normal text-sm lg:text-base leading-121 text-old-silver mt-2 tracking-tighter text-center lg:text-start'>Start making more coins and submit more SBC’s</p>
            <div className='pt-[21px]'>
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
            <Button
                text="Recover Password"
                className="w-full flex justify-center mt-[21px]"
                onClick={handleSubmit}
            />
        </div>
    );
}

export default ForgetPassword;
