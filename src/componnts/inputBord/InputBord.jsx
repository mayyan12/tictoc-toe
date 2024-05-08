import React, { useEffect, useState } from "react";
import style from './style.module.scss';

export default function InputBord({ inputValue, labelText = "Your code" , placeholder = "Write here...", setInputValue,children }) {



    return (
        <div className={style.coolinput}>
            <label htmlFor="input" className={style.text}>{labelText}</label>
            {children ? children : <input  maxLength={6} type="text" 
 placeholder={placeholder} name="input" className={style.input} 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}/>}
        </div>
    );
}

