import React from 'react'
import User from '../../componnts/user'
import Bord from '../../componnts/bord/Bord'
import Button from '../../componnts/Button'
import styles from './style.module.scss'
export default function index() {
  return (
    <div className={styles.container}>
        <User/>
        <Bord/>
        <Button text={"BACK"}/>
    </div>
  )
}
