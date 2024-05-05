import React from 'react'
import styles from './style.module.scss'
import {useUserStore ,useUserPrefStore } from '../../store'
import X from '../X'
import O from '../O'
import InputBord from '../inputBord/InputBord';

export default function index() {


  const x = useUserPrefStore();
  return (
    
    <InputBord>
    <div className={styles.aba}>
    <div className={styles.container} onClick={()=>x.setVsValue("x")}><X/></div>

    <div className={styles.container2} onClick={()=>x.setVsValue("O")}><O/> </div>
    </div>
    </InputBord>
  )
}
