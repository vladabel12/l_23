import "/src/pages/home/components/HomeInput/HomeInput.scss";
import { PasswordIcon } from "/src/shared/Icons/PasswordIcon";
import React, { useState } from "react";

export const HomeInput = ({ value, setValue, type, icon, placeholder, ...props}) => {
    const handleChange = (e) => {
        setValue(e.target.value);
    }; 

    const [inputType, setInputType] = useState(type);
    const checkType = () => {
        switch (inputType) {
            case "password":
                return setInputType("text");
            case "text":
                return setInputType("password");
        }
    }
  return (
    <label>
        <div className="icon__container">
            {icon}
        </div>
        
        <input value={value} onChange={handleChange} {...props} type={inputType} placeholder={placeholder} className="home-input"/>
        {type == 'password' && (
            <div onClick={checkType}>
                <PasswordIcon />
            </div>
        )}
    </label>
  );
};