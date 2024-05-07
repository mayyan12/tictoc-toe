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
        <img src={userPref.playerAvatar} alt="" />
      <div>{userPref.isValue == "x"||"X" ? <X/> : <O/>} <div><h3>Wins {userPref.wins} </h3></div></div>
      <h1>{userPref?.playername}</h1>
      </div>
      <div>
        <img src={user?.user?.avatar} alt="" />
      <div>{userPref.isValue == "x"||"X" ?  <O/>:<X/> }<div><h3>Wins {userPref.playerWins} </h3></div></div>
      <h1>{user?.user?.name}</h1>
      </div>
    </div>
  )
}

