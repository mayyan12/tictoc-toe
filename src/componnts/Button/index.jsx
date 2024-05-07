import React from 'react'
import styles from './style.module.scss'
import { NavLink } from 'react-router-dom'
export default function index({text ,back , to} ) {
  return (
    <div>
   
<NavLink to={to}>
     <button className={back ?  styles.buttonBack :styles.button}>
        {text}
      </button>
</NavLink>
      
    </div>
  )
}

