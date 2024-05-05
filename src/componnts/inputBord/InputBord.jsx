import React from "react";
import style from './style.module.scss';

export default function InputBord() {
    return (
        <div className={style.InputBord}>
            <div className={style.coolinput}>
                <label htmlFor="input" className={style.text}>Name:</label>
                <input type="text" placeholder="Write here..." name="input" className={style.input} />
            </div>
        </div>
    );
}
