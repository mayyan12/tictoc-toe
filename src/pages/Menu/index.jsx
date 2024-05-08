import React from 'react'
import Logo from '../../componnts/Logo/index.jsx'
import Button from '../../componnts/Button/index.jsx'
import styles from './style.module.scss'



export default function index() {
    return (
        <div className={styles.menu}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <div className={styles.btn}>
                <Button text={"SETTINGS"} to={"/settings"} />
                <Button text={"PLAY SOLO"} to={"/choosePlayer"} />
                <Button text={"PlAY WITH A FRIEND"} to={"/"} />
            </div>

        </div>

    );
}
