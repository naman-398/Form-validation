import React from 'react';
import { EyeClose, EyeOpen } from './Icon';

const CustomInput = ({ type, placeholder, inputuse, eyeclasses, value, onChange, togglePasswordVisibility, showPassword, id }) => {
    return (
        <div className='flex flex-col gap-2'>
            <p className='font-medium text-sm lg:text-base leading-121 tracking-tighter text-light-white'>{inputuse}</p>
            <div className='w-full p-3 sm:p-[15.5px_16px_19px_16px] rounded-[36px] bg-black-olive flex items-center elative z-10 justify-between'>
                <input
                    type={type}
                    placeholder={placeholder}
                    id={id}
                    className='placeholder:font-normal pr-4 w-full border-none outline-none bg-transparent placeholder:text-xs lg:placeholder:text-sm placeholder:tracking-tighter placeholder:text-light-white text-light-white font-normal leading-121 text-xs lg:text-sm placeholder:opacity-40'
                    value={value}
                    onChange={onChange}
                />
                {inputuse === 'Password' && (
                    <span className={`${eyeclasses} ml-3 cursor-pointer sm:mt-[2px]`} onClick={togglePasswordVisibility}>
                        {showPassword ? <EyeClose /> : <EyeOpen />}
                    </span>
                )}
            </div>
        </div>
    );
};

export default CustomInput;
