import "/src/shared/ui/Input/Input.scss"
import { PasswordIcon } from "../../Icons/PasswordIcon";
import React, { useState } from "react";

export const Input = ({ value, setValue, type, icon, ...props}) => {
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
        {icon}
        <input value={value} onChange={handleChange} {...props} type={inputType} />
        {type == 'password' && (
            <div onClick={checkType}>
                <PasswordIcon />
            </div>
        )}
    </label>
  );
};

