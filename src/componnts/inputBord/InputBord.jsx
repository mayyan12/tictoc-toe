import React from "react";
import style from './style.module.scss';

export default function InputBord({ labelText = "Your code", placeholder = "Write here...", children }) {
    return (
        <div className={style.coolinput}>
            <label htmlFor="input" className={style.text}>{labelText}</label>
            {children ? children : <input type="text" placeholder={placeholder} name="input" className={style.input} />}
        </div>
    );
}

