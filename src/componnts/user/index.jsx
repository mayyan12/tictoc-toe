import React from 'react'
import { useUserStore, useUserPrefStore } from '../../store'
import styles from './style.module.scss'
import X from '../X'
import O from '../O'
export default function index() {
  const user= useUserStore()
  const userPref= useUserPrefStore()
  console.log(user.user);
  return (
    <div className={styles.haderUser}>
      <div>
        <img src={userPref.p1.avatar} alt="" />
      <div>{userPref.p1.value == "x"||"X" ? <X/> : <O/>} <div><h3>Wins {userPref.p1.wins} </h3></div></div>
      <h1>{userPref?.p1.name}</h1>
      </div>
      <div>
        <img src={userPref?.p2?.avatar} alt="" />
      <div>{userPref.p1.value == "x"||"X" ?  <O/>:<X/> }<div><h3>Wins {userPref.p2.wins} </h3></div></div>
      <h1>{userPref?.p2.name}</h1>
      </div>
    </div>
  )
}

