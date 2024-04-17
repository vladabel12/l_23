import React, { useState } from "react";
import { UserIcon } from '../../../shared/Icons/UserIcon'
import '/src/pages/auth/Login/Login.scss'
import { Button } from '/src/shared/ui/Button/Button'
import { Input } from'/src/shared/ui/Input/Input'
export const Login = () => {
  const [value, setValue] = useState('Test');
  const handleValueChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div className='login'>
      <Input value={value} setValue={handleValueChange} placeholder='Enter your email' type='email' className='login__input' icon={<UserIcon />} />
      <Input placeholder='Enter your email' type='password' className='login__input' icon={<UserIcon />} />
      <Button type='submit' variant='primary'>
        <div>Login to Continue</div>
      </Button>
    </div>
  )
}

