import React from "react";
import styles from './style.module.scss';

export default function Bord() {
    const handleClick = () => {
        console.log("Cell clicked!");
    };

    return (
        <div className={styles.square}>
            <div className={styles.row}>
                <div onClick={() => handleClick()} className={styles.cell}></div>
                <div onClick={() => handleClick()} className={styles.cell}></div>
                <div onClick={() => handleClick()} className={styles.cell}></div>
            </div>
            <div className={styles.row}>
                <div onClick={() => handleClick()} className={styles.cell}></div>
                <div onClick={() => handleClick()} className={styles.cell}></div>
                <div onClick={() => handleClick()} className={styles.cell}></div>
            </div>
            <div className={styles.row}>
                <div onClick={() => handleClick()} className={styles.cell}></div>
                <div onClick={() => handleClick()} className={styles.cell}></div>
                <div onClick={() => handleClick()} className={styles.cell}></div>
            </div>
        </div>
    );
}
