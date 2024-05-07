import React from 'react'
import Logo from '../../componnts/Logo/index.jsx'
import O from '../../componnts/O'
import X from '../../componnts/X'
import styles from './style.module.scss'



export default function index() {
    return (
        <div className={styles.welcome}>
            <div className={styles.container1}>
                <div className={styles.x1}>
                    <X />
                </div>
                <div className={styles.o1}>
                    <O />
                </div>
            </div>
            <div className={styles.logo}>
                <Logo />
            </div>
            <div className={styles.container2}>
                <div className={styles.o2}>
                    <O />
                </div>
                <div className={styles.x2}>
                    <X />
                </div>
            </div>
        </div>
    );
}
